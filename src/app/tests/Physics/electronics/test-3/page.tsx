"use client";

import TestEngine from "@/components/testengine";

import { electronicsQuestions } from "@/data/physics/electronics";

export default function ElectronicsTest3Page() {
  return (
    <TestEngine
      questions={electronicsQuestions}
      title="Electronics — Test 3"
      subject="Physics"
      chapter="Electronics"
      timeLimit={50}
      questionCount={50}
    />
  );
}