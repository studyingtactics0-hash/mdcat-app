"use client";

import TestEngine from "@/components/testengine";
import { supportAndMovementQuestions } from "@/data/biology/support-and-movement";

export default function SupportAndMovementTest1Page() {
  return (
    <TestEngine
      questions={supportAndMovementQuestions}
      title="Support and Movement Test 1"
      subject="Biology"
      chapter="Support and Movement"
      timeLimit={20}
      questionCount={20}
    />
  );
}