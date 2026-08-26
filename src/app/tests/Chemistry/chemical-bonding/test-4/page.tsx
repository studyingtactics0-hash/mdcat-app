"use client";

import TestEngine from "@/components/testengine";
import { chemical-bondingQuestions } from "@/data/chemistry/chemical-bonding";

export default function Test4Page() {
  return (
    <TestEngine
      questions={chemical-bondingQuestions}
      title="Chemical Bonding Test 4"
      subject="Chemistry"
      chapter="Chemical Bonding"
    />
  );
}
