"use client";

import TestEngine from "@/components/testengine";

import { dawnOfModernPhysicsQuestions } from "@/data/physics/dawn-of-modern-physics";

export default function DawnOfModernPhysicsTest1Page() {
  return (
    <TestEngine
      questions={dawnOfModernPhysicsQuestions}
      title="Dawn of Modern Physics — Test 1"
      subject="Physics"
      chapter="Dawn of Modern Physics"
      timeLimit={20}
      questionCount={20}
    />
  );
}