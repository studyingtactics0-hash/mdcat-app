"use client";

import TestEngine from "@/components/testengine";
import { electrochemistryQuestions } from "@/data/chemistry/electrochemistry";

export default function Test4Page() {
  return (
    <TestEngine
      questions={electrochemistryQuestions}
      title="Electrochemistry Test 4"
      subject="Chemistry"
      chapter="Electrochemistry"
      timeLimit={20}
      questionCount={20}
    />
  );
}
