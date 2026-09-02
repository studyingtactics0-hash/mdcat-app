"use client";

import TestEngine from "@/components/testengine";
import { solidsQuestions } from "@/data/chemistry/solids";

export default function Test5Page() {
  return (
    <TestEngine
      questions={solidsQuestions}
      title="Solids Test 5"
      subject="Chemistry"
      chapter="Solids"
      timeLimit={200}
      questionCount={200}
    />
  );
}
