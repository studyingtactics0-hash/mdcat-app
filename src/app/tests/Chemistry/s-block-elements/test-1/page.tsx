"use client";

import TestEngine from "@/components/testengine";
import { sAndPBlockElementsQuestions } from "@/data/chemistry/s-and-p-block";

export default function Test1Page() {
  return (
    <TestEngine
      questions={sAndPBlockElementsQuestions}
      title="S Block Elements Test 1"
      subject="Chemistry"
      chapter="S Block Elements"
      timeLimit={20}
      questionCount={20}
    />
  );
}
