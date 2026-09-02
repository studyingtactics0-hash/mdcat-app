"use client";

import TestEngine from "@/components/testengine";
import { carboxylicAcidsQuestions } from "@/data/chemistry/carboxylic-acid";

export default function Test5Page() {
  return (
    <TestEngine
      questions={carboxylicAcidsQuestions}
      title="Carboxylic Acids Test 5"
      subject="Chemistry"
      chapter="Carboxylic Acids"
      timeLimit={200}
      questionCount={200}
    />
  );
}
