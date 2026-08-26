"use client";

import TestEngine from "@/components/testengine";
import { carboxylicAcidsQuestions } from "@/data/chemistry/carboxylic-acid";

export default function Test4Page() {
  return (
    <TestEngine
      questions={carboxylicAcidsQuestions}
      title="Carboxylic Acids Test 4"
      subject="Chemistry"
      chapter="Carboxylic Acids"
      timeLimit={20}
      questionCount={20}
    />
  );
}
