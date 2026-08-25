"use client";

import TestEngine from "@/components/testengine";

import { nuclearPhysicsQuestions } from "@/data/physics/nuclear-physics";

export default function NuclearPhysicsTest2Page() {
  return (
    <TestEngine
      questions={nuclearPhysicsQuestions}
      title="Nuclear Physics — Test 2"
      subject="Physics"
      chapter="Nuclear Physics"
      timeLimit={35}
      questionCount={35}
    />
  );
}