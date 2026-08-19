"use client";

import TestEngine from "@/components/testengine";
import { inheritanceQuestions } from "@/data/biology/inheritance";

export default function InheritanceTest2Page() {
  return (
    <TestEngine
      questions={inheritanceQuestions}
      title="Inheritance Test 2"
      subject="Biology"
      chapter="Inheritance"
      timeLimit={20}
      questionCount={20}
    />
  );
}