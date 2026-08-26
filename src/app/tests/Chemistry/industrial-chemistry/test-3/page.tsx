"use client";

import TestEngine from "@/components/testengine";
import { industrial-chemistryQuestions } from "@/data/chemistry/industrial-chemistry";

export default function Test3Page() {
  return (
    <TestEngine
      questions={industrial-chemistryQuestions}
      title="Industrial Chemistry Test 3"
      subject="Chemistry"
      chapter="Industrial Chemistry"
    />
  );
}
