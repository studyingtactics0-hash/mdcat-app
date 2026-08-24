"use client";

import TestEngine from "@/components/testengine";

import { forceAndMotionQuestions } from "@/data/physics/force-and-motion";

export default function ForceAndMotionTest1Page() {
  return (
    <TestEngine
      questions={forceAndMotionQuestions}
      title="Force and Motion — Test 5"
      subject="Physics"
      chapter="Force and Motion"
      timeLimit={20}
      questionCount={20}
    />
  );
}