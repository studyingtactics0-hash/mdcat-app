"use client";

import TestEngine from "@/components/testengine";
import { electrochemistryQuestions } from "@/data/chemistry/electrochemistry";

export default function Test2Page() {
  return (
    <TestEngine
      questions={electrochemistryQuestions}
      title="Electrochemistry Test 2"
      subject="Chemistry"
      chapter="Electrochemistry"
    />
  );
}
