"use client";

import TestEngine from "@/components/testengine";

import { biotechnologyQuestions } from "@/data/biology/biotechnology";

export default function BiotechnologyTest1Page() {
  return (
    <TestEngine
      questions={biotechnologyQuestions}
      title="Biotechnology — Test 4"
      subject="Biology"
      chapter="Biotechnology"
      timeLimit={20}
      questionCount={20}
    />
  );
}