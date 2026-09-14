"use client";

import TestEngine from "@/components/testengine";
import { inheritanceQuestions } from "@/data/biology/inheritance";

export default function InheritanceTest4Page() {
  return (
    <TestEngine
      questions={inheritanceQuestions}
      title="Inheritance Test 4"
      subject="Biology"
      chapter="Inheritance"
      timeLimit={50}
      questionCount={50}
    />
  );
}