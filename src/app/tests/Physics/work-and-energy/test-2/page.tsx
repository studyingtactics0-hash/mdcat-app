"use client";

import TestEngine from "@/components/testengine";

import { workAndEnergyQuestions } from "@/data/physics/work-and-energy";

export default function WorkAndEnergyTest1Page() {
  return (
    <TestEngine
      questions={workAndEnergyQuestions}
      title="Work and Energy — Test 2"
      subject="Physics"
      chapter="Work and Energy"
      timeLimit={15}
      questionCount={15}
    />
  );
}