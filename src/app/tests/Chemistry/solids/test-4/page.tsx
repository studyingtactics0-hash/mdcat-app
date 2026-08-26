"use client";

import TestEngine from "@/components/testengine";
import { solidsQuestions } from "@/data/chemistry/solids";

export default function Test4Page() {
  return (
    <TestEngine
      questions={solidsQuestions}
      title="Solids Test 4"
      subject="Chemistry"
      chapter="Solids"
    />
  );
}
