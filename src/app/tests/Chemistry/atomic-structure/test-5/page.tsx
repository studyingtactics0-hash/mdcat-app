"use client";

import TestEngine from "@/components/testengine";
import { atomicStructureQuestions } from "@/data/chemistry/atomic-structure";

export default function Test5Page() {
  return (
    <TestEngine
      questions={atomicStructureQuestions}
      title="Atomic Structure Test 5"
      subject="Chemistry"
      chapter="Atomic Structure"
      timeLimit={200}
      questionCount={200}
    />
  );
}
