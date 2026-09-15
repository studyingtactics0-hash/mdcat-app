"use client";

import TestEngine from "@/components/testengine";
import { chemicalBondingQuestions } from "@/data/chemistry/chemical-bonding";

export default function Test4Page() {
  return (
    <TestEngine
      questions={chemicalBondingQuestions}
      title="Chemical Bonding Test 4"
      subject="Chemistry"
      chapter="Chemical Bonding"
      timeLimit={50}
      questionCount={50}
    />
  );
}
