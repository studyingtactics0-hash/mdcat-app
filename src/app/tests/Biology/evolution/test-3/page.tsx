"use client";

import TestEngine from "@/components/testengine";

import { evolutionQuestions } from "@/data/biology/evolution";

export default function EvolutionTest1Page() {
  return (
    <TestEngine
      questions={evolutionQuestions}
      title="Evolution Test 3"
      subject="Biology"
      chapter="Evolution"
      timeLimit={20}
      questionCount={20}
    />
  );
}