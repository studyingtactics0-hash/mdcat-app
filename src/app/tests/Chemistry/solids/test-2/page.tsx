"use client";

import TestEngine from "@/components/testengine";
import { solidsQuestions } from "@/data/chemistry/solids";

export default function Test2Page() {
  return (
    <TestEngine
      questions={solidsQuestions}
      title="Solids Test 2"
      subject="Chemistry"
      chapter="Solids"
    />
  );
}
