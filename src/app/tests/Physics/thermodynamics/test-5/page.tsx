"use client";

import TestEngine from "@/components/testengine";

import { thermodynamicsQuestions } from "@/data/physics/thermodynamics";

export default function ThermodynamicsTest5Page() {
  return (
    <TestEngine
      questions={thermodynamicsQuestions}
      title="Thermodynamics — Test 5"
      subject="Physics"
      chapter="Thermodynamics"
      timeLimit={122}
      questionCount={122}
    />
  );
}