"use client";

import TestEngine from "@/components/testengine";
import { electrochemistryQuestions } from "@/data/chemistry/electrochemistry";

export default function Test1Page() {
  return (
    <TestEngine
      questions={electrochemistryQuestions}
      title="Electrochemistry Test 1"
      subject="Chemistry"
      chapter="Electrochemistry"
      timeLimit={20}
      questionCount={20}
    />
  );
}
