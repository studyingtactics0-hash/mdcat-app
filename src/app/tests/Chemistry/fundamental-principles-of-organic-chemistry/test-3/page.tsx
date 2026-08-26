"use client";

import TestEngine from "@/components/testengine";
import { fundamentalPrinciplesOrganicChemistryQuestions } from "@/data/chemistry/fundamental-principles-of-organic-chemistry";

export default function Test3Page() {
  return (
    <TestEngine
      questions={fundamentalPrinciplesOrganicChemistryQuestions}
      title="Fundamental Principles of Organic Chemistry Test 3"
      subject="Chemistry"
      chapter="Fundamental Principles of Organic Chemistry"
      timeLimit={20}
      questionCount={20}
    />
  );
}
