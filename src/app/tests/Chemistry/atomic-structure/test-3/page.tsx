"use client";

import TestEngine from "@/components/testengine";
import { atomic-structureQuestions } from "@/data/chemistry/atomic-structure";

export default function Test3Page() {
  return (
    <TestEngine
      questions={atomic-structureQuestions}
      title="Atomic Structure Test 3"
      subject="Chemistry"
      chapter="Atomic Structure"
    />
  );
}
