"use client";

import TestEngine from "@/components/testengine";
import { biologicalMoleculesQuestions } from "@/data/biology/biomolecules";

export default function BiologicalMoleculesTest5Page() {
  return (
    <TestEngine
      questions={biologicalMoleculesQuestions}
      title="Biological Molecules — Test 5"
      subject="Biology"
      chapter="Biological Molecules"
      timeLimit={125}
      questionCount={125}
    />
  );
}