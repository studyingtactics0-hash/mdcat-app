"use client";

import TestEngine from "@/components/testengine";
import { atomicStructureQuestions } from "@/data/chemistry/atomic-structure";

export default function Test2Page() {
  return (
    <TestEngine
      questions={atomicStructureQuestions}
      title="Atomic Structure Test 2"
      subject="Chemistry"
      chapter="Atomic Structure"
      timeLimit={20}
      questionCount={20}
    />
  );
}
