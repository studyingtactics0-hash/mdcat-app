"use client";

import TestEngine from "@/components/testengine";
import { transitionElementsQuestions } from "@/data/chemistry/transition-elements";

export default function Test2Page() {
  return (
    <TestEngine
      questions={transitionElementsQuestions}
      title="Transition Elements Test 2"
      subject="Chemistry"
      chapter="Transition Elements"
      timeLimit={15}
      questionCount={15}
    />
  );
}
