"use client";

import TestEngine from "@/components/testengine";

import { electromagneticInductionQuestions } from "@/data/physics/electromagnetic-induction";

export default function ElectromagneticInductionTest1Page() {
  return (
    <TestEngine
      questions={electromagneticInductionQuestions}
      title="Electromagnetic Induction — Test 1"
      subject="Physics"
      chapter="Electromagnetic Induction"
      timeLimit={20}
      questionCount={20}
    />
  );
}