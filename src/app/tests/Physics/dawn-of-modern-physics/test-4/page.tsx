"use client";

import TestEngine from "@/components/testengine";

import { dawnOfModernPhysicsQuestions } from "@/data/physics/dawn-of-modern-physics";

export default function DawnOfModernPhysicsTest4Page() {
  return (
    <TestEngine
      questions={dawnOfModernPhysicsQuestions}
      title="Dawn of Modern Physics — Test 4"
      subject="Physics"
      chapter="Dawn of Modern Physics"
      timeLimit={50}
      questionCount={50}
    />
  );
}