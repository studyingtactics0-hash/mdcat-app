"use client";

import TestEngine from "@/components/testengine";

import { physicsquestions } from "@/data/physics/subject";

export default function PhysicsTest1Page() {
  return (
    <TestEngine
      questions={physicsquestions}
      title="Physics Test 1"
      subject="Physics"
      chapter="Subject-Wise"
      timeLimit={20}
      questionCount={20}
    />
  );
}