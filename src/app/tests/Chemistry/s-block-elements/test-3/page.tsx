"use client";

import TestEngine from "@/components/testengine";
import { sAndPBlockElementsQuestions } from "@/data/chemistry/s-and-p-block";

export default function Test3Page() {
  return (
    <TestEngine
      questions={sAndPBlockElementsQuestions}
      title="S Block Elements Test 3"
      subject="Chemistry"
      chapter="S Block Elements"
      timeLimit={20}
      questionCount={20}
    />
  );
}
