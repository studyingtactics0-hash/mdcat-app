"use client";

import TestEngine from "@/components/testengine";
import { gasesQuestions } from "@/data/chemistry/gases";

export default function Test4Page() {
  return (
    <TestEngine
      questions={gasesQuestions}
      title="Gases Test 4"
      subject="Chemistry"
      chapter="Gases"
    />
  );
}
