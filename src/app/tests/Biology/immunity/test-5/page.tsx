"use client";

import TestEngine from "@/components/testengine";

import { immunityQuestions } from "@/data/biology/immunity";

export default function ImmunityTest1Page() {
  return (
    <TestEngine
      questions={immunityQuestions}
      title="Immunity Test 5"
      subject="Biology"
      chapter="Immunity"
      timeLimit={200}
      questionCount={200}
    />
  );
}