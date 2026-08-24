"use client";

import TestEngine from "@/components/testengine";

import { fluidDynamicsQuestions } from "@/data/physics/fluid-dynamics";

export default function FluidDynamicsTest1Page() {
  return (
    <TestEngine
      questions={fluidDynamicsQuestions}
      title="Fluid Dynamics — Test 1"
      subject="Physics"
      chapter="Fluid Dynamics"
      timeLimit={20}
      questionCount={20}
    />
  );
}