"use client";

import TestEngine from "@/components/testengine";
import { chemical-bondingQuestions } from "@/data/chemistry/chemical-bonding";

export default function Test2Page() {
  return (
    <TestEngine
      questions={chemical-bondingQuestions}
      title="Chemical Bonding Test 2"
      subject="Chemistry"
      chapter="Chemical Bonding"
    />
  );
}
