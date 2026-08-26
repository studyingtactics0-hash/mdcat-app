"use client";

import TestEngine from "@/components/testengine";
import { alcoholAndPhenolQuestions } from "@/data/chemistry/alcohol-and-phenol";

export default function Test3Page() {
  return (
    <TestEngine
      questions={alcoholAndPhenolQuestions}
      title="Alcohol And Phenol Test 3"
      subject="Chemistry"
      chapter="Alcohol And Phenol"
      timeLimit={20}
      questionCount={20}
    />
  );
}
