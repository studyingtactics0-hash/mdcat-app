"use client";

import TestEngine from "@/components/testengine";
import { chemicalBondingQuestions } from "@/data/chemistry/chemical-bonding";

export default function Test3Page() {
  return (
    <TestEngine
      questions={chemicalBondingQuestions}
      title="Chemical Bonding Test 3"
      subject="Chemistry"
      chapter="Chemical Bonding"
      timeLimit={20}
      questionCount={20}
    />
  );
}
