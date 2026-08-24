"use client";

import TestEngine from "@/components/testengine";

import {
  rotationalAndCircularMotionQuestions,
} from "@/data/physics/rotational-and-circular-motion";

export default function RotationalAndCircularMotionTest4Page() {
  return (
    <TestEngine
      questions={rotationalAndCircularMotionQuestions}
      title="Rotational and Circular Motion — Test 4"
      subject="Physics"
      chapter="Rotational and Circular Motion"
      timeLimit={50}
      questionCount={50}
    />
  );
}