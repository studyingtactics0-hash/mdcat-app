"use client";

import TestEngine from "@/components/testengine";
import { liquidsQuestions } from "@/data/chemistry/liquids";

export default function Test4Page() {
  return (
    <TestEngine
      questions={liquidsQuestions}
      title="Liquids Test 4"
      subject="Chemistry"
      chapter="Liquids"
    />
  );
}
