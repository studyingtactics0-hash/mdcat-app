"use client";

import TestEngine from "@/components/testengine";
import { gasesQuestions } from "@/data/chemistry/gases";

export default function Test5Page() {
  return (
    <TestEngine
      questions={gasesQuestions}
      title="Gases Test 5"
      subject="Chemistry"
      chapter="Gases"
      timeLimit={200}
      questionCount={200}
    />
  );
}
