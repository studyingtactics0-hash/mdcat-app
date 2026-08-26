"use client";

import TestEngine from "@/components/testengine";
import { alcoholAndPhenolQuestions } from "@/data/chemistry/alcohol-and-phenol";

export default function Test2Page() {
  return (
    <TestEngine
      questions={alcoholAndPhenolQuestions}
      title="Alcohol And Phenol Test 2"
      subject="Chemistry"
      chapter="Alcohol And Phenol"
      timeLimit={20}
      questionCount={20}
    />
  );
}
