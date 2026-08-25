"use client";

import TestEngine from "@/components/testengine";

import { alternatingCurrentQuestions } from "@/data/physics/alternating-current";

export default function AlternatingCurrentTest1Page() {
  return (
    <TestEngine
      questions={alternatingCurrentQuestions}
      title="Alternating Current — Test 1"
      subject="Physics"
      chapter="Alternating Current"
      timeLimit={20}
      questionCount={20}
    />
  );
}