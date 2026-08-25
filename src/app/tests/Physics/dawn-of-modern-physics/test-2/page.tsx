"use client";

import TestEngine from "@/components/testengine";

import { dawnOfModernPhysicsQuestions } from "@/data/physics/dawn-of-modern-physics";

export default function DawnOfModernPhysicsTest2Page() {
  return (
    <TestEngine
      questions={dawnOfModernPhysicsQuestions}
      title="Dawn of Modern Physics — Test 2"
      subject="Physics"
      chapter="Dawn of Modern Physics"
      timeLimit={35}
      questionCount={35}
    />
  );
}