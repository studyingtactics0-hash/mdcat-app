"use client";

import TestEngine from "@/components/testengine";

import { physicsquestions } from "@/data/physics/subject";

export default function PhysicsTest1Page() {
  return (
    <TestEngine
      questions={physicsquestions}
      title="Physics Test 2"
      subject="Physics"
      chapter="Subject-Wise"
      timeLimit={45}
      questionCount={45}
    />
  );
}