"use client";

import TestEngine from "@/components/testengine";
import { thermochemistryQuestions } from "@/data/chemistry/thermochemistry";

export default function Test5Page() {
  return (
    <TestEngine
      questions={thermochemistryQuestions}
      title="Thermochemistry Test 5"
      subject="Chemistry"
      chapter="Thermochemistry"
      timeLimit={20}
      questionCount={20}
    />
  );
}
