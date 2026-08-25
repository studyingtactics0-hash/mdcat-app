"use client";

import TestEngine from "@/components/testengine";

import { alternatingCurrentQuestions } from "@/data/physics/alternating-current";

export default function AlternatingCurrentTest2Page() {
  return (
    <TestEngine
      questions={alternatingCurrentQuestions}
      title="Alternating Current — Test 2"
      subject="Physics"
      chapter="Alternating Current"
      timeLimit={35}
      questionCount={35}
    />
  );
}