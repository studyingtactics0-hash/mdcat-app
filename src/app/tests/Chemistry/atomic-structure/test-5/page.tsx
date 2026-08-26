"use client";

import TestEngine from "@/components/testengine";
import { atomic-structureQuestions } from "@/data/chemistry/atomic-structure";

export default function Test5Page() {
  return (
    <TestEngine
      questions={atomic-structureQuestions}
      title="Atomic Structure Test 5"
      subject="Chemistry"
      chapter="Atomic Structure"
      timeLimit={20}
      questionCount={20}
    />
  );
}
