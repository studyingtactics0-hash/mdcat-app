"use client";

import TestEngine from "@/components/testengine";
import { chemicalEquilibriumQuestions } from "@/data/chemistry/chemical-equilibrium";

export default function Test3Page() {
  return (
    <TestEngine
      questions={chemicalEquilibriumQuestions}
      title="Chemical Equilibrium Test 3"
      subject="Chemistry"
      chapter="Chemical Equilibrium"
      timeLimit={20}
      questionCount={20}
    />
  );
}
