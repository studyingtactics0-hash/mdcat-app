"use client";

import TestEngine from "@/components/testengine";

import { nuclearPhysicsQuestions } from "@/data/physics/nuclear-physics";

export default function NuclearPhysicsTest1Page() {
  return (
    <TestEngine
      questions={nuclearPhysicsQuestions}
      title="Nuclear Physics — Test 1"
      subject="Physics"
      chapter="Nuclear Physics"
      timeLimit={20}
      questionCount={20}
    />
  );
}