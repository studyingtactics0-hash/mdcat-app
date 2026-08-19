"use client";

import TestEngine from "@/components/testengine";
import { biologicalMoleculesQuestions } from "@/data/biology/biomolecules";

export default function BiologicalMoleculesTest4Page() {
  return (
    <TestEngine
      questions={biologicalMoleculesQuestions}
      title="Biological Molecules — Test 4"
      subject="Biology"
      chapter="Biological Molecules"
      timeLimit={50}
      questionCount={50}
    />
  );
}