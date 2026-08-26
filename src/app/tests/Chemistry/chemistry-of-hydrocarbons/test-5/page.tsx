"use client";

import TestEngine from "@/components/testengine";
import { chemistry-of-hydrocarbonsQuestions } from "@/data/chemistry/chemistry-of-hydrocarbons";

export default function Test5Page() {
  return (
    <TestEngine
      questions={chemistry-of-hydrocarbonsQuestions}
      title="Chemistry Of Hydrocarbons Test 5"
      subject="Chemistry"
      chapter="Chemistry Of Hydrocarbons"
      timeLimit={20}
      questionCount={20}
    />
  );
}
