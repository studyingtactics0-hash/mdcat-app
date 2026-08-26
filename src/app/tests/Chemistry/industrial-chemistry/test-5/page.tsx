"use client";

import TestEngine from "@/components/testengine";
import { industrial-chemistryQuestions } from "@/data/chemistry/industrial-chemistry";

export default function Test5Page() {
  return (
    <TestEngine
      questions={industrial-chemistryQuestions}
      title="Industrial Chemistry Test 5"
      subject="Chemistry"
      chapter="Industrial Chemistry"
    />
  );
}
