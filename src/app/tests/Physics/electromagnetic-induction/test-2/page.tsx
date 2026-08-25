"use client";

import TestEngine from "@/components/testengine";

import { electromagneticInductionQuestions } from "@/data/physics/electromagnetic-induction";

export default function ElectromagneticInductionTest2Page() {
  return (
    <TestEngine
      questions={electromagneticInductionQuestions}
      title="Electromagnetic Induction — Test 2"
      subject="Physics"
      chapter="Electromagnetic Induction"
      timeLimit={35}
      questionCount={35}
    />
  );
}