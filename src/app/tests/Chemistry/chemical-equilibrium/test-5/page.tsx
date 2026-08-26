"use client";

import TestEngine from "@/components/testengine";
import { chemical-equilibriumQuestions } from "@/data/chemistry/chemical-equilibrium";

export default function Test5Page() {
  return (
    <TestEngine
      questions={chemical-equilibriumQuestions}
      title="Chemical Equilibrium Test 5"
      subject="Chemistry"
      chapter="Chemical Equilibrium"
      timeLimit={20}
      questionCount={20}
    />
  );
}
