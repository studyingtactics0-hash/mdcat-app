"use client";

import TestEngine from "@/components/testengine";

import { thermodynamicsQuestions } from "@/data/physics/thermodynamics";

export default function ThermodynamicsTest2Page() {
  return (
    <TestEngine
      questions={thermodynamicsQuestions}
      title="Thermodynamics — Test 2"
      subject="Physics"
      chapter="Thermodynamics"
      timeLimit={35}
      questionCount={35}
    />
  );
}