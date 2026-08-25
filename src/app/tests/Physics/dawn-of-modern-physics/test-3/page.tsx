"use client";

import TestEngine from "@/components/testengine";

import { dawnOfModernPhysicsQuestions } from "@/data/physics/dawn-of-modern-physics";

export default function DawnOfModernPhysicsTest3Page() {
  return (
    <TestEngine
      questions={dawnOfModernPhysicsQuestions}
      title="Dawn of Modern Physics — Test 3"
      subject="Physics"
      chapter="Dawn of Modern Physics"
      timeLimit={50}
      questionCount={50}
    />
  );
}