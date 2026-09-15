"use client";

import TestEngine from "@/components/testengine";

import { electrostaticsQuestions } from "@/data/physics/electrostatics";

export default function ElectrostaticsTest2Page() {
  return (
    <TestEngine
      questions={electrostaticsQuestions}
      title="Electrostatics — Test 2"
      subject="Physics"
      chapter="Electrostatics"
      timeLimit={15}
      questionCount={15}
    />
  );
}