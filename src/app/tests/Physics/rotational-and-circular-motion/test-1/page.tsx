"use client";

import TestEngine from "@/components/testengine";

import {
  rotationalAndCircularMotionQuestions,
} from "@/data/physics/rotational-and-circular-motion";

export default function RotationalAndCircularMotionTest1Page() {
  return (
    <TestEngine
      questions={rotationalAndCircularMotionQuestions}
      title="Rotational and Circular Motion — Test 1"
      subject="Physics"
      chapter="Rotational and Circular Motion"
      timeLimit={20}
      questionCount={20}
    />
  );
}