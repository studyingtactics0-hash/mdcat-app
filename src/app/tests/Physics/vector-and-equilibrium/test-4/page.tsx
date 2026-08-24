"use client";

import TestEngine from "@/components/testengine";

import { vectorsAndEquilibriumQuestions } from "@/data/physics/vectors-and-equilibrium";

export default function VectorsAndEquilibriumTest2Page() {
  return (
    <TestEngine
      questions={vectorsAndEquilibriumQuestions}
      title="Vectors and Equilibrium — Test 4"
      subject="Physics"
      chapter="Vectors and Equilibrium"
      timeLimit={35}
      questionCount={35}
    />
  );
}