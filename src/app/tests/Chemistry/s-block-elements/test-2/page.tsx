"use client";

import TestEngine from "@/components/testengine";
import { sAndPBlockElementsQuestions } from "@/data/chemistry/s-and-p-block";

export default function Test2Page() {
  return (
    <TestEngine
      questions={sAndPBlockElementsQuestions}
      title="S Block Elements Test 2"
      subject="Chemistry"
      chapter="S Block Elements"
      timeLimit={15}
      questionCount={15}
    />
  );
}
