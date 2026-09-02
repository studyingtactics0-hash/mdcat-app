"use client";

import TestEngine from "@/components/testengine";
import { supportAndMovementQuestions } from "@/data/biology/support-and-movement";

export default function SupportAndMovementTest5Page() {
  return (
    <TestEngine
      questions={supportAndMovementQuestions}
      title="Support and Movement Test 5"
      subject="Biology"
      chapter="Support and Movement"
      timeLimit={200}
      questionCount={200}
    />
  );
}