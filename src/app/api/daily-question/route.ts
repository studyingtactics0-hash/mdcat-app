
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getOrCreateDailyQuestion } from "@/lib/daily-question-generator";

export const dynamic = "force-dynamic";

// GET: Deliver today's question without exposing its answer
export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Please log in first." },
        { status: 401 }
      );
    }

    const dailyQuestion = await getOrCreateDailyQuestion();
    const admin = createAdminClient();

    const { data: attempt, error } = await admin
      .from("daily_question_attempts")
      .select("selected_answer, is_correct, attempted_at")
      .eq("daily_question_id", dailyQuestion.id)
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) throw error;

    return NextResponse.json({
      question: {
        id: dailyQuestion.id,
        date: dailyQuestion.question_date,
        subject: dailyQuestion.subject,
        question: dailyQuestion.question_text,
        options: dailyQuestion.options,
      },
      attempted: !!attempt,
      result: attempt
        ? {
            selectedAnswer: attempt.selected_answer,
            isCorrect: attempt.is_correct,
            correctAnswer: dailyQuestion.correct_answer,
            explanation: dailyQuestion.explanation,
          }
        : null,
    });
  } catch (error) {
    console.error("Daily question GET error:", error);

    return NextResponse.json(
      { error: "Unable to load today's question." },
      { status: 500 }
    );
  }
}

// POST: Check and save the student's answer
export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Please log in first." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const selectedAnswer = body.selectedAnswer;

    const dailyQuestion = await getOrCreateDailyQuestion();

    if (
      !Number.isInteger(selectedAnswer) ||
      selectedAnswer < 0 ||
      selectedAnswer >= dailyQuestion.options.length
    ) {
      return NextResponse.json(
        { error: "Invalid answer selection." },
        { status: 400 }
      );
    }

    const admin = createAdminClient();

    // Check whether the student has already attempted
    const { data: previousAttempt, error: previousError } =
      await admin
        .from("daily_question_attempts")
        .select("*")
        .eq("daily_question_id", dailyQuestion.id)
        .eq("user_id", user.id)
        .maybeSingle();

    if (previousError) throw previousError;

    if (previousAttempt) {
      return NextResponse.json(
        {
          error: "You have already attempted today's question.",
          attempted: true,
          result: {
            selectedAnswer: previousAttempt.selected_answer,
            isCorrect: previousAttempt.is_correct,
            correctAnswer: dailyQuestion.correct_answer,
            explanation: dailyQuestion.explanation,
          },
        },
        { status: 409 }
      );
    }

    const isCorrect =
      selectedAnswer === dailyQuestion.correct_answer;

      const studentName =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      null;
    
    const { error: insertError } = await admin
      .from("daily_question_attempts")
      .insert({
        daily_question_id: dailyQuestion.id,
        user_id: user.id,
        student_name: studentName,
        selected_answer: selectedAnswer,
        is_correct: isCorrect,
      });

    if (insertError) {
      // Handle simultaneous duplicate submissions
      if (insertError.code === "23505") {
        return NextResponse.json(
          { error: "This question has already been attempted." },
          { status: 409 }
        );
      }

      throw insertError;
    }

    return NextResponse.json({
      success: true,
      attempted: true,
      result: {
        selectedAnswer,
        isCorrect,
        correctAnswer: dailyQuestion.correct_answer,
        explanation: dailyQuestion.explanation,
      },
    });
  } catch (error) {
    console.error("Daily question POST error:", error);

    return NextResponse.json(
      { error: "Unable to submit your answer." },
      { status: 500 }
    );
  }
}
