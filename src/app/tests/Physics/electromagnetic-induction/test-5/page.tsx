"use client";

import TestEngine from "@/components/testengine";

import { electromagneticInductionQuestions } from "@/data/physics/electromagnetic-induction";

export default function ElectromagneticInductionTest5Page() {
  return (
    <TestEngine
      questions={electromagneticInductionQuestions}
      title="Electromagnetic Induction — Test 5"
      subject="Physics"
      chapter="Electromagnetic Induction"
      timeLimit={50}
      questionCount={50}
    />
  );
}