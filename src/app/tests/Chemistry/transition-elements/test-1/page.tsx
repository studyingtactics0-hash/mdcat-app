"use client";

import TestEngine from "@/components/testengine";
import { transitionElementsQuestions } from "@/data/chemistry/transition-elements";

export default function Test1Page() {
  return (
    <TestEngine
      questions={transitionElementsQuestions}
      title="Transition Elements Test 1"
      subject="Chemistry"
      chapter="Transition Elements"
      timeLimit={20}
      questionCount={20}
    />
  );
}
