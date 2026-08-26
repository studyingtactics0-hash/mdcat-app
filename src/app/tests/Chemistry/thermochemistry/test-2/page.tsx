"use client";

import TestEngine from "@/components/testengine";
import { thermochemistryQuestions } from "@/data/chemistry/thermochemistry";

export default function Test2Page() {
  return (
    <TestEngine
      questions={thermochemistryQuestions}
      title="Thermochemistry Test 2"
      subject="Chemistry"
      chapter="Thermochemistry"
      timeLimit={20}
      questionCount={20}
    />
  );
}
