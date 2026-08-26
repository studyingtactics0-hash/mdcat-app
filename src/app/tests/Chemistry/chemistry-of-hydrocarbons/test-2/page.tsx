"use client";

import TestEngine from "@/components/testengine";
import { chemistry-of-hydrocarbonsQuestions } from "@/data/chemistry/chemistry-of-hydrocarbons";

export default function Test2Page() {
  return (
    <TestEngine
      questions={chemistry-of-hydrocarbonsQuestions}
      title="Chemistry Of Hydrocarbons Test 2"
      subject="Chemistry"
      chapter="Chemistry Of Hydrocarbons"
    />
  );
}
