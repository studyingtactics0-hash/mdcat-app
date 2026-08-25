"use client";

import TestEngine from "@/components/testengine";

import { electromagnetismQuestions } from "@/data/physics/electromagnetism";

export default function ElectromagnetismTest2Page() {
  return (
    <TestEngine
      questions={electromagnetismQuestions}
      title="Electromagnetism — Test 2"
      subject="Physics"
      chapter="Electromagnetism"
      timeLimit={35}
      questionCount={35}
    />
  );
}