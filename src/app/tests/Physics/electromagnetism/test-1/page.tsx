"use client";

import TestEngine from "@/components/testengine";

import { electromagnetismQuestions } from "@/data/physics/electromagnetism";

export default function ElectromagnetismTest1Page() {
  return (
    <TestEngine
      questions={electromagnetismQuestions}
      title="Electromagnetism — Test 1"
      subject="Physics"
      chapter="Electromagnetism"
      timeLimit={20}
      questionCount={20}
    />
  );
}