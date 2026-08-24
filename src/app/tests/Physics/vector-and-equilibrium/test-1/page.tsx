"use client";

import TestEngine from "@/components/testengine";

import { vectorsAndEquilibriumQuestions } from "@/data/physics/vectors-and-equilibrium";

export default function VectorsAndEquilibriumTest1Page() {
  return (
    <TestEngine
      questions={vectorsAndEquilibriumQuestions}
      title="Vectors and Equilibrium — Test 1"
      subject="Physics"
      chapter="Vectors and Equilibrium"
      timeLimit={20}
      questionCount={20}
    />
  );
}