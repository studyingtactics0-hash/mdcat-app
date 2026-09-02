"use client";

import TestEngine from "@/components/testengine";

import { electromagnetismQuestions } from "@/data/physics/electromagnetism";

export default function ElectromagnetismTest5Page() {
  return (
    <TestEngine
      questions={electromagnetismQuestions}
      title="Electromagnetism — Test 5"
      subject="Physics"
      chapter="Electromagnetism"
      timeLimit={200}
      questionCount={200}
    />
  );
}