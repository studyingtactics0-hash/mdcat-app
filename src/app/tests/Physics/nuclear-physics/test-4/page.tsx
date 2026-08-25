"use client";

import TestEngine from "@/components/testengine";

import { nuclearPhysicsQuestions } from "@/data/physics/nuclear-physics";

export default function NuclearPhysicsTest4Page() {
  return (
    <TestEngine
      questions={nuclearPhysicsQuestions}
      title="Nuclear Physics — Test 4"
      subject="Physics"
      chapter="Nuclear Physics"
      timeLimit={50}
      questionCount={50}
    />
  );
}