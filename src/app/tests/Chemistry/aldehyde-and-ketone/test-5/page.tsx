"use client";

import TestEngine from "@/components/testengine";
import { aldehydeAndKetoneQuestions } from "@/data/chemistry/aldehyde-and-ketone";

export default function Test5Page() {
  return (
    <TestEngine
      questions={aldehydeAndKetoneQuestions}
      title="Aldehyde And Ketone Test 5"
      subject="Chemistry"
      chapter="Aldehyde And Ketone"
      timeLimit={20}
      questionCount={20}
    />
  );
}
