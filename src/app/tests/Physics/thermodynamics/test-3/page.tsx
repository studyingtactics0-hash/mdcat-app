"use client";

import TestEngine from "@/components/testengine";

import { thermodynamicsQuestions } from "@/data/physics/thermodynamics";

export default function ThermodynamicsTest3Page() {
  return (
    <TestEngine
      questions={thermodynamicsQuestions}
      title="Thermodynamics — Test 3"
      subject="Physics"
      chapter="Thermodynamics"
      timeLimit={50}
      questionCount={50}
    />
  );
}