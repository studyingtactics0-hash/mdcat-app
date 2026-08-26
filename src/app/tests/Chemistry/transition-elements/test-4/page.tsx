"use client";

import TestEngine from "@/components/testengine";
import { transition-elementsQuestions } from "@/data/chemistry/transition-elements";

export default function Test4Page() {
  return (
    <TestEngine
      questions={transition-elementsQuestions}
      title="Transition Elements Test 4"
      subject="Chemistry"
      chapter="Transition Elements"
    />
  );
}
