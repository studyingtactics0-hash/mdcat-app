"use client";

import TestEngine from "@/components/testengine";
import { alcohol-and-phenolQuestions } from "@/data/chemistry/alcohol-and-phenol";

export default function Test4Page() {
  return (
    <TestEngine
      questions={alcohol-and-phenolQuestions}
      title="Alcohol And Phenol Test 4"
      subject="Chemistry"
      chapter="Alcohol And Phenol"
    />
  );
}
