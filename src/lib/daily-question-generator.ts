
import "server-only";

import { createAdminClient } from "@/lib/supabase/admin";
import {
  questionBanks,
  subjectRotation,
  type DailyQuestionSubject,
} from "@/lib/daily-question-bank";

const TIME_ZONE = "Asia/Karachi";

// Monday = Biology, Tuesday = Chemistry, etc.
const WEEKDAY_SUBJECTS: Record<string, DailyQuestionSubject> = {
  Mon: "Biology",
  Tue: "Chemistry",
  Wed: "Physics",
  Thu: "English",
  Fri: "Logical Reasoning",
  Sat: "Biology",
  Sun: "Chemistry",
};

function getPakistanDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value;

  return `${get("year")}-${get("month")}-${get("day")}`;
}

function getTodaySubject(): DailyQuestionSubject {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
  }).format(new Date());

  return WEEKDAY_SUBJECTS[weekday] ?? subjectRotation[0];
}

export async function getOrCreateDailyQuestion() {
  const supabase = createAdminClient();
  const today = getPakistanDate();

  // Check whether today's question already exists
  const { data: existing, error: existingError } = await supabase
    .from("daily_questions")
    .select("*")
    .eq("question_date", today)
    .maybeSingle();

  if (existingError) throw existingError;

  if (existing) return existing;

  // Determine today's subject
  const subject = getTodaySubject();
  const bank = questionBanks[subject];

  if (!bank || bank.length === 0) {
    throw new Error(`No questions found for ${subject}`);
  }

  // Find previously selected questions for this subject
  const { data: previousQuestions, error: historyError } =
    await supabase
      .from("daily_questions")
      .select("question_index")
      .eq("subject", subject);

  if (historyError) throw historyError;

  const usedIndices = new Set(
    (previousQuestions ?? []).map((item) => item.question_index)
  );

  // Prefer questions that have never been selected before
  const unusedIndices = bank
    .map((_, index) => index)
    .filter((index) => !usedIndices.has(index));

  // Start allowing repeats only after the subject pool is exhausted
  const availableIndices =
    unusedIndices.length > 0
      ? unusedIndices
      : bank.map((_, index) => index);

  const questionIndex =
    availableIndices[Math.floor(Math.random() * availableIndices.length)];

  const question = bank[questionIndex];

  // Save today's question
  const { data: created, error: insertError } = await supabase
    .from("daily_questions")
    .insert({
      question_date: today,
      subject,
      question_index: questionIndex,
      question_text: question.question,
      options: question.options,
      correct_answer: question.answer,
      explanation: question.explanation ?? null,
    })
    .select()
    .single();

  if (insertError) {
    // Another student may have generated today's question simultaneously.
    // Retrieve the question already created for today.
    const { data: concurrentQuestion, error: retryError } =
      await supabase
        .from("daily_questions")
        .select("*")
        .eq("question_date", today)
        .maybeSingle();

    if (retryError) throw retryError;

    if (concurrentQuestion) return concurrentQuestion;

    throw insertError;
  }

  return created;
}