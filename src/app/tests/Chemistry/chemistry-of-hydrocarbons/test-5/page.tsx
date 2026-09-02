"use client";

import TestEngine from "@/components/testengine";
import { chemistryOfHydrocarbonsQuestions } from "@/data/chemistry/chemistry-of-hydrocarbons";

export default function Test5Page() {
  return (
    <TestEngine
      questions={chemistryOfHydrocarbonsQuestions}
      title="Chemistry Of Hydrocarbons Test 5"
      subject="Chemistry"
      chapter="Chemistry Of Hydrocarbons"
      timeLimit={200}
      questionCount={200}
    />
  );
}
