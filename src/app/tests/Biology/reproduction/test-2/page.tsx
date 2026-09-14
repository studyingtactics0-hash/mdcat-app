"use client";

import TestEngine from "@/components/testengine";

import { reproductionQuestions } from "@/data/biology/reproduction";

export default function ReproductionTest2Page() {
  return (
    <TestEngine
      questions={reproductionQuestions}
      title="Reproduction Test 2"
      subject="Biology"
      chapter="reproduction"
      timeLimit={15}
      questionCount={15}
    />
  );
}