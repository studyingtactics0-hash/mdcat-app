"use client";

import TestEngine from "@/components/testengine";
import { carboxylicAcidsQuestions } from "@/data/chemistry/carboxylic-acid";

export default function Test1Page() {
  return (
    <TestEngine
      questions={carboxylicAcidsQuestions}
      title="Carboxylic Acids Test 1"
      subject="Chemistry"
      chapter="Carboxylic Acids"
      timeLimit={20}
      questionCount={20}
    />
  );
}
