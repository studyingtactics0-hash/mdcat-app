"use client";

import TestEngine from "@/components/testengine";
import { carboxylic-acidsQuestions } from "@/data/chemistry/carboxylic-acids";

export default function Test3Page() {
  return (
    <TestEngine
      questions={carboxylic-acidsQuestions}
      title="Carboxylic Acids Test 3"
      subject="Chemistry"
      chapter="Carboxylic Acids"
    />
  );
}
