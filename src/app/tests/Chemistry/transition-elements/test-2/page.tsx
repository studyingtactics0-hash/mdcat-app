"use client";

import TestEngine from "@/components/testengine";
import { transition-elementsQuestions } from "@/data/chemistry/transition-elements";

export default function Test2Page() {
  return (
    <TestEngine
      questions={transition-elementsQuestions}
      title="Transition Elements Test 2"
      subject="Chemistry"
      chapter="Transition Elements"
    />
  );
}
