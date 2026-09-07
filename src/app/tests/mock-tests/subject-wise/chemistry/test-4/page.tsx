"use client";

import TestEngine from "@/components/testengine";

import { chemistryquestions } from "@/data/chemistry/subject";

export default function ChemistryTest1Page() {
  return (
    <TestEngine
      questions={chemistryquestions}
      title="Chemistry Test 4"
      subject="Chemistry"
      chapter="Subject-Wise"
      timeLimit={135}
      questionCount={135}
    />
  );
}