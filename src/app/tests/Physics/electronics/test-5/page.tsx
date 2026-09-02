"use client";

import TestEngine from "@/components/testengine";

import { electronicsQuestions } from "@/data/physics/electronics";

export default function ElectronicsTest5Page() {
  return (
    <TestEngine
      questions={electronicsQuestions}
      title="Electronics — Test 5"
      subject="Physics"
      chapter="Electronics"
      timeLimit={200}
      questionCount={200}
    />
  );
}