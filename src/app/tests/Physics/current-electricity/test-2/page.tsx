"use client";

import TestEngine from "@/components/testengine";

import { currentElectricityQuestions } from "@/data/physics/current-electricity";

export default function CurrentElectricityTest2Page() {
  return (
    <TestEngine
      questions={currentElectricityQuestions}
      title="Current Electricity — Test 2"
      subject="Physics"
      chapter="Current Electricity"
      timeLimit={35}
      questionCount={35}
    />
  );
}