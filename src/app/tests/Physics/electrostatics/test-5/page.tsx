"use client";

import TestEngine from "@/components/testengine";

import { electrostaticsQuestions } from "@/data/physics/electrostatics";

export default function ElectrostaticsTest5Page() {
  return (
    <TestEngine
      questions={electrostaticsQuestions}
      title="Electrostatics — Test 5"
      subject="Physics"
      chapter="Electrostatics"
      timeLimit={200}
      questionCount={200}
    />
  );
}