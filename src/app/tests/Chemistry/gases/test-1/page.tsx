"use client";

import TestEngine from "@/components/testengine";
import { gasesQuestions } from "@/data/chemistry/gases";

export default function Test1Page() {
  return (
    <TestEngine
      questions={gasesQuestions}
      title="Gases Test 1"
      subject="Chemistry"
      chapter="Gases"
    />
  );
}
