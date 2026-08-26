"use client";

import TestEngine from "@/components/testengine";
import { alcohol-and-phenolQuestions } from "@/data/chemistry/alcohol-and-phenol";

export default function Test3Page() {
  return (
    <TestEngine
      questions={alcohol-and-phenolQuestions}
      title="Alcohol And Phenol Test 3"
      subject="Chemistry"
      chapter="Alcohol And Phenol"
    />
  );
}
