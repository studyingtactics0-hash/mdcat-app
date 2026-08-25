"use client";

import TestEngine from "@/components/testengine";

import { electronicsQuestions } from "@/data/physics/electronics";

export default function ElectronicsTest1Page() {
  return (
    <TestEngine
      questions={electronicsQuestions}
      title="Electronics — Test 1"
      subject="Physics"
      chapter="Electronics"
      timeLimit={20}
      questionCount={20}
    />
  );
}