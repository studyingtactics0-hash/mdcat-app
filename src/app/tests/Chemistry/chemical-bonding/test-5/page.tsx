"use client";

import TestEngine from "@/components/testengine";
import { chemicalBondingQuestions } from "@/data/chemistry/chemical-bonding";

export default function Test5Page() {
  return (
    <TestEngine
      questions={chemicalBondingQuestions}
      title="Chemical Bonding Test 5"
      subject="Chemistry"
      chapter="Chemical Bonding"
      timeLimit={20}
      questionCount={20}
    />
  );
}
