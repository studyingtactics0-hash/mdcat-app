"use client";

import TestEngine from "@/components/testengine";

import { currentElectricityQuestions } from "@/data/physics/current-electricity";

export default function CurrentElectricityTest4Page() {
  return (
    <TestEngine
      questions={currentElectricityQuestions}
      title="Current Electricity — Test 4"
      subject="Physics"
      chapter="Current Electricity"
      timeLimit={50}
      questionCount={50}
    />
  );
}