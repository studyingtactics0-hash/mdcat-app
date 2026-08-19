"use client";

import TestEngine from "@/components/testengine";
import { biologicalMoleculesQuestions } from "@/data/biology/biomolecules";

export default function BiologicalMoleculesTest2Page() {
  return (
    <TestEngine
      questions={biologicalMoleculesQuestions}
      title="Biological Molecules — Test 2"
      subject="Biology"
      chapter="Biological Molecules"
      timeLimit={35}
      questionCount={35}
    />
  );
}