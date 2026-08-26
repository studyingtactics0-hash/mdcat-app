"use client";

import TestEngine from "@/components/testengine";
import { electrochemistryQuestions } from "@/data/chemistry/electrochemistry";

export default function Test5Page() {
  return (
    <TestEngine
      questions={electrochemistryQuestions}
      title="Electrochemistry Test 5"
      subject="Chemistry"
      chapter="Electrochemistry"
      timeLimit={20}
      questionCount={20}
    />
  );
}
