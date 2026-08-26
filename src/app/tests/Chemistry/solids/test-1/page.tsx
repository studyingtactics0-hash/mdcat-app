"use client";

import TestEngine from "@/components/testengine";
import { solidsQuestions } from "@/data/chemistry/solids";

export default function Test1Page() {
  return (
    <TestEngine
      questions={solidsQuestions}
      title="Solids Test 1"
      subject="Chemistry"
      chapter="Solids"
      timeLimit={20}
      questionCount={20}
    />
  );
}
