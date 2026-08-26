"use client";

import TestEngine from "@/components/testengine";
import { thermochemistryQuestions } from "@/data/chemistry/thermochemistry";

export default function Test3Page() {
  return (
    <TestEngine
      questions={thermochemistryQuestions}
      title="Thermochemistry Test 3"
      subject="Chemistry"
      chapter="Thermochemistry"
    />
  );
}
