"use client";

import TestEngine from "@/components/testengine";

import { dawnOfModernPhysicsQuestions } from "@/data/physics/dawn-of-modern-physics";

export default function DawnOfModernPhysicsTest5Page() {
  return (
    <TestEngine
      questions={dawnOfModernPhysicsQuestions}
      title="Dawn of Modern Physics — Test 5"
      subject="Physics"
      chapter="Dawn of Modern Physics"
      timeLimit={200}
      questionCount={200}
    />
  );
}