"use client";

import TestEngine from "@/components/testengine";

import { electrostaticsQuestions } from "@/data/physics/electrostatics";

export default function ElectrostaticsTest4Page() {
  return (
    <TestEngine
      questions={electrostaticsQuestions}
      title="Electrostatics — Test 4"
      subject="Physics"
      chapter="Electrostatics"
      timeLimit={50}
      questionCount={50}
    />
  );
}