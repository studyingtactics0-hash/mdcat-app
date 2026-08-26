"use client";

import TestEngine from "@/components/testengine";
import { atomicStructureQuestions } from "@/data/chemistry/atomic-structure";

export default function Test4Page() {
  return (
    <TestEngine
      questions={atomicStructureQuestions}
      title="Atomic Structure Test 4"
      subject="Chemistry"
      chapter="Atomic Structure"
      timeLimit={20}
      questionCount={20}
    />
  );
}
