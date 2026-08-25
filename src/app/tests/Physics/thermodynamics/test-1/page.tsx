"use client";

import TestEngine from "@/components/testengine";

import { thermodynamicsQuestions } from "@/data/physics/thermodynamics";

export default function ThermodynamicsTest1Page() {
  return (
    <TestEngine
      questions={thermodynamicsQuestions}
      title="Thermodynamics — Test 1"
      subject="Physics"
      chapter="Thermodynamics"
      timeLimit={20}
      questionCount={20}
    />
  );
}