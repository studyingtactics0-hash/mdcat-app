"use client";

import TestEngine from "@/components/testengine";

import { immunityQuestions } from "@/data/biology/immunity";

export default function ImmunityTest1Page() {
  return (
    <TestEngine
      questions={immunityQuestions}
      title="Immunity Test 3"
      subject="Biology"
      chapter="Immunity"
      timeLimit={20}
      questionCount={20}
    />
  );
}