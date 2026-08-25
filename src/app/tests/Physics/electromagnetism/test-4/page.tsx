"use client";

import TestEngine from "@/components/testengine";

import { electromagnetismQuestions } from "@/data/physics/electromagnetism";

export default function ElectromagnetismTest4Page() {
  return (
    <TestEngine
      questions={electromagnetismQuestions}
      title="Electromagnetism — Test 4"
      subject="Physics"
      chapter="Electromagnetism"
      timeLimit={50}
      questionCount={50}
    />
  );
}