"use client";

import TestEngine from "@/components/testengine";

import { currentElectricityQuestions } from "@/data/physics/current-electricity";

export default function CurrentElectricityTest1Page() {
  return (
    <TestEngine
      questions={currentElectricityQuestions}
      title="Current Electricity — Test 1"
      subject="Physics"
      chapter="Current Electricity"
      timeLimit={20}
      questionCount={20}
    />
  );
}