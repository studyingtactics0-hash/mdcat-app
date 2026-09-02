"use client";

import TestEngine from "@/components/testengine";

import { logicalReasoningQuestions } from "@/data/Logical Reasoning/logical reasoning";

export default function LogicalReasoningTest1Page() {
  return (
    <TestEngine
      questions={logicalReasoningQuestions}
      title="Logical Reasoning — Test"
      subject="Logical Reasoning"
      chapter="Logical Reasoning"
      timeLimit={80}
      questionCount={80}
    />
  );
}