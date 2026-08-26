"use client";

import TestEngine from "@/components/testengine";
import { carboxylic-acidsQuestions } from "@/data/chemistry/carboxylic-acids";

export default function Test4Page() {
  return (
    <TestEngine
      questions={carboxylic-acidsQuestions}
      title="Carboxylic Acids Test 4"
      subject="Chemistry"
      chapter="Carboxylic Acids"
    />
  );
}
