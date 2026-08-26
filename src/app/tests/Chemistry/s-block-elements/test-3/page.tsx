"use client";

import TestEngine from "@/components/testengine";
import { s-block-elementsQuestions } from "@/data/chemistry/s-block-elements";

export default function Test3Page() {
  return (
    <TestEngine
      questions={s-block-elementsQuestions}
      title="S Block Elements Test 3"
      subject="Chemistry"
      chapter="S Block Elements"
    />
  );
}
