"use client";

import TestEngine from "@/components/testengine";
import { biologicalMoleculesQuestions } from "@/data/biology/biomolecules";

export default function BiologicalMoleculesTest1Page() {
  return (
    <TestEngine
      questions={biologicalMoleculesQuestions}
      title="Biological Molecules — Test 1"
      subject="Biology"
      chapter="Biological Molecules"
      timeLimit={20}
      questionCount={20}
    />
  );
}