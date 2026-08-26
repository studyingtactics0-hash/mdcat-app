"use client";

import TestEngine from "@/components/testengine";
import { fundamentalConceptsChemistryQuestions } from "@/data/chemistry/fundamental-concepts-of-chemistry";

export default function Test2Page() {
  return (
    <TestEngine
      questions={fundamentalConceptsChemistryQuestions}
      title="Fundamental Concepts Of Chemistry Test 2"
      subject="Chemistry"
      chapter="Fundamental Concepts Of Chemistry"
      timeLimit={20}
      questionCount={20}
    />
  );
}
