"use client";

import TestEngine from "@/components/testengine";

import { mockTest3Questions } from "@/data/mock tests/mock-test-3";

export default function MockTest3Page() {
  const questions = mockTest3Questions;

  return (
    <TestEngine
      questions={questions}
      title="Full Mock Test 3"
      subject="MDCAT"
      chapter="Full Mock"
      timeLimit={180}
      questionCount={questions.length}
    />
  );
}