"use client";

import TestEngine from "@/components/testengine";

import { alternatingCurrentQuestions } from "@/data/physics/alternating-current";

export default function AlternatingCurrentTest5Page() {
  return (
    <TestEngine
      questions={alternatingCurrentQuestions}
      title="Alternating Current — Test 5"
      subject="Physics"
      chapter="Alternating Current"
      timeLimit={200}
      questionCount={200}
    />
  );
}