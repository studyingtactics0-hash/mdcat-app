"use client";

import TestEngine from "@/components/testengine";
import { chemical-bondingQuestions } from "@/data/chemistry/chemical-bonding";

export default function Test5Page() {
  return (
    <TestEngine
      questions={chemical-bondingQuestions}
      title="Chemical Bonding Test 5"
      subject="Chemistry"
      chapter="Chemical Bonding"
      timeLimit={20}
      questionCount={20}
    />
  );
}
