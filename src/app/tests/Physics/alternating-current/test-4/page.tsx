"use client";

import TestEngine from "@/components/testengine";

import { alternatingCurrentQuestions } from "@/data/physics/alternating-current";

export default function AlternatingCurrentTest4Page() {
  return (
    <TestEngine
      questions={alternatingCurrentQuestions}
      title="Alternating Current — Test 4"
      subject="Physics"
      chapter="Alternating Current"
      timeLimit={50}
      questionCount={50}
    />
  );
}