"use client";

import TestEngine from "@/components/testengine";
import { alcoholAndPhenolQuestions } from "@/data/chemistry/alcohol-and-phenol";

export default function Test4Page() {
  return (
    <TestEngine
      questions={alcoholAndPhenolQuestions}
      title="Alcohol And Phenol Test 4"
      subject="Chemistry"
      chapter="Alcohol And Phenol"
      timeLimit={50}
      questionCount={50}
    />
  );
}
