"use client";

import TestEngine from "@/components/testengine";

import { electrostaticsQuestions } from "@/data/physics/electrostatics";

export default function ElectrostaticsTest1Page() {
  return (
    <TestEngine
      questions={electrostaticsQuestions}
      title="Electrostatics — Test 1"
      subject="Physics"
      chapter="Electrostatics"
      timeLimit={20}
      questionCount={20}
    />
  );
}