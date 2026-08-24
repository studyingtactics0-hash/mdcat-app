"use client";

import TestEngine from "@/components/testengine";

import { fluidDynamicsQuestions } from "@/data/physics/fluid-dynamics";

export default function FluidDynamicsTest3Page() {
  return (
    <TestEngine
      questions={fluidDynamicsQuestions}
      title="Fluid Dynamics — Test 3"
      subject="Physics"
      chapter="Fluid Dynamics"
      timeLimit={50}
      questionCount={50}
    />
  );
}