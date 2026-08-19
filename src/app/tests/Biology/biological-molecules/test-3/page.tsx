"use client";

import TestEngine from "@/components/testengine";
import { biologicalMoleculesQuestions } from "@/data/biology/biomolecules";

export default function BiologicalMoleculesTest3Page() {
  return (
    <TestEngine
      questions={biologicalMoleculesQuestions}
      title="Biological Molecules — Test 3"
      subject="Biology"
      chapter="Biological Molecules"
      timeLimit={50}
      questionCount={50}
    />
  );
}