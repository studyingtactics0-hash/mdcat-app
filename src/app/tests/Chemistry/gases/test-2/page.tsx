"use client";

import TestEngine from "@/components/testengine";
import { gasesQuestions } from "@/data/chemistry/gases";

export default function Test2Page() {
  return (
    <TestEngine
      questions={gasesQuestions}
      title="Gases Test 2"
      subject="Chemistry"
      chapter="Gases"
    />
  );
}
