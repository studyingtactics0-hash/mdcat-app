"use client";

import TestEngine from "@/components/testengine";
import { chemistry-of-hydrocarbonsQuestions } from "@/data/chemistry/chemistry-of-hydrocarbons";

export default function Test4Page() {
  return (
    <TestEngine
      questions={chemistry-of-hydrocarbonsQuestions}
      title="Chemistry Of Hydrocarbons Test 4"
      subject="Chemistry"
      chapter="Chemistry Of Hydrocarbons"
    />
  );
}
