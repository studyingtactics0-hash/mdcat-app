"use client";

import TestEngine from "@/components/testengine";
import { gasesQuestions } from "@/data/chemistry/gases";

export default function Test3Page() {
  return (
    <TestEngine
      questions={gasesQuestions}
      title="Gases Test 3"
      subject="Chemistry"
      chapter="Gases"
    />
  );
}
