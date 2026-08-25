"use client";

import TestEngine from "@/components/testengine";

import { electronicsQuestions } from "@/data/physics/electronics";

export default function ElectronicsTest4Page() {
  return (
    <TestEngine
      questions={electronicsQuestions}
      title="Electronics — Test 4"
      subject="Physics"
      chapter="Electronics"
      timeLimit={50}
      questionCount={50}
    />
  );
}