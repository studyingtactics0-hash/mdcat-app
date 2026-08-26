"use client";

import TestEngine from "@/components/testengine";
import { fundamental-concepts-of-chemistryQuestions } from "@/data/chemistry/fundamental-concepts-of-chemistry";

export default function Test4Page() {
  return (
    <TestEngine
      questions={fundamental-concepts-of-chemistryQuestions}
      title="Fundamental Concepts Of Chemistry Test 4"
      subject="Chemistry"
      chapter="Fundamental Concepts Of Chemistry"
    />
  );
}
