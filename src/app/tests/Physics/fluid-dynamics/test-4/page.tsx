"use client";

import TestEngine from "@/components/testengine";

import { fluidDynamicsQuestions } from "@/data/physics/fluid-dynamics";

export default function FluidDynamicsTest4Page() {
  return (
    <TestEngine
      questions={fluidDynamicsQuestions}
      title="Fluid Dynamics — Test 4"
      subject="Physics"
      chapter="Fluid Dynamics"
      timeLimit={50}
      questionCount={50}
    />
  );
}