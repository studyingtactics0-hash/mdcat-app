"use client";

import TestEngine from "@/components/testengine";
import { carboxylic-acidsQuestions } from "@/data/chemistry/carboxylic-acids";

export default function Test1Page() {
  return (
    <TestEngine
      questions={carboxylic-acidsQuestions}
      title="Carboxylic Acids Test 1"
      subject="Chemistry"
      chapter="Carboxylic Acids"
    />
  );
}
