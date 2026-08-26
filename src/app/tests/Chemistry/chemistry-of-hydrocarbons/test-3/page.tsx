"use client";

import TestEngine from "@/components/testengine";
import { chemistryOfHydrocarbonsQuestions } from "@/data/chemistry/chemistry-of-hydrocarbons";

export default function Test3Page() {
  return (
    <TestEngine
      questions={chemistryOfHydrocarbonsQuestions}
      title="Chemistry Of Hydrocarbons Test 3"
      subject="Chemistry"
      chapter="Chemistry Of Hydrocarbons"
      timeLimit={20}
      questionCount={20}
    />
  );
}
