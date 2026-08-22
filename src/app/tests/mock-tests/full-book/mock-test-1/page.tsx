"use client";

import TestEngine from "@/components/testengine";

import {
  biologyQuestions,
  chemistryQuestions,
  physicsQuestions,
  englishQuestions,
  logicalQuestions,
} from "@/data/mock tests/mock-test-1";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function MockTest1Page() {
  const questions = [
    ...shuffleArray(biologyQuestions),
    ...shuffleArray(chemistryQuestions),
    ...shuffleArray(physicsQuestions),
    ...shuffleArray(englishQuestions),
    ...shuffleArray(logicalQuestions),
  ];

  return (
    <TestEngine
      questions={questions}
      title="Full Mock Test 1"
      subject="MDCAT"
      chapter="Full Mock"
      timeLimit={180}
      questionCount={questions.length}
    />
  );
}