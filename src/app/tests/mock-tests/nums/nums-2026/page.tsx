"use client";

import TestEngine from "@/components/testengine";

import { nums2026Questions } from "@/data/mock tests/nums/nums-26";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function NUMS2026Page() {
  const questions = shuffleArray(nums2026Questions);

  return (
    <TestEngine
      questions={questions}
      title="NUMS 2026"
      subject="NUMS"
      chapter="NUMS 2026"
      timeLimit={150}
      questionCount={questions.length}
    />
  );
}