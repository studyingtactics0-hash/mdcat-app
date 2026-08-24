"use client";

import TestEngine from "@/components/testengine";

import {
  rotationalAndCircularMotionQuestions,
} from "@/data/physics/rotational-and-circular-motion";

export default function RotationalAndCircularMotionTest2Page() {
  return (
    <TestEngine
      questions={rotationalAndCircularMotionQuestions}
      title="Rotational and Circular Motion — Test 2"
      subject="Physics"
      chapter="Rotational and Circular Motion"
      timeLimit={35}
      questionCount={35}
    />
  );
}