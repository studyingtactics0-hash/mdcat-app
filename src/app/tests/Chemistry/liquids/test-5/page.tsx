"use client";

import TestEngine from "@/components/testengine";
import { liquidsQuestions } from "@/data/chemistry/liquids";

export default function Test5Page() {
  return (
    <TestEngine
      questions={liquidsQuestions}
      title="Liquids Test 5"
      subject="Chemistry"
      chapter="Liquids"
      timeLimit={20}
      questionCount={20}
    />
  );
}
