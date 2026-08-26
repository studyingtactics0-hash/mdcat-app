"use client";

import TestEngine from "@/components/testengine";
import { liquidsQuestions } from "@/data/chemistry/liquids";

export default function Test3Page() {
  return (
    <TestEngine
      questions={liquidsQuestions}
      title="Liquids Test 3"
      subject="Chemistry"
      chapter="Liquids"
    />
  );
}
