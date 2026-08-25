"use client";

import TestEngine from "@/components/testengine";

import { alternatingCurrentQuestions } from "@/data/physics/alternating-current";

export default function AlternatingCurrentTest3Page() {
  return (
    <TestEngine
      questions={alternatingCurrentQuestions}
      title="Alternating Current — Test 3"
      subject="Physics"
      chapter="Alternating Current"
      timeLimit={50}
      questionCount={50}
    />
  );
}