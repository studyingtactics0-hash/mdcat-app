"use client";

import TestEngine from "@/components/testengine";

import {
  biologyQuestions,
  chemistryQuestions,
  physicsQuestions,
  englishQuestions,
  logicalReasoningQuestions,
  readingAndThinkingSkillQuestions,
} from "@/data/mock tests/half-syllabus/1st-year";

function pickRandom<T>(questions: T[], count: number): T[] {
  return [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export default function MockTest1Page() {
  // MDCAT distribution
  const biology = pickRandom(biologyQuestions, 81);
  const chemistry = pickRandom(chemistryQuestions, 45);
  const physics = pickRandom(physicsQuestions, 36);
  const english = pickRandom(englishQuestions, 7);
  const logicalReasoning = pickRandom(logicalReasoningQuestions, 9);
  const english2 = pickRandom(readingAndThinkingSkillQuestions, 2);
  const testQuestions = [
    ...biology,
    ...chemistry,
    ...physics,
    ...english,
    ...logicalReasoning,
    ...english2
  ];

  return (
    <TestEngine
      questions={testQuestions}
      subject="FULL MOCK"
      chapter="1st year"
      title="MDCAT Mock Test 3 - 1st Year Half Syllabus"
      timeLimit={180}
      shuffleBySubject={true}
    />
  );
}