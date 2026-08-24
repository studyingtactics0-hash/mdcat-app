"use client";

import TestEngine from "@/components/testengine";

import { fluidDynamicsQuestions } from "@/data/physics/fluid-dynamics";

export default function FluidDynamicsTest2Page() {
  return (
    <TestEngine
      questions={fluidDynamicsQuestions}
      title="Fluid Dynamics — Test 2"
      subject="Physics"
      chapter="Fluid Dynamics"
      timeLimit={35}
      questionCount={35}
    />
  );
}