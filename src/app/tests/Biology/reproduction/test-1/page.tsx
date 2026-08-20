"use client";

import TestEngine from "@/components/testengine";
import { reproductionQuestions } from "@/data/biology/reproduction";

export default function ReproductionTest2Page() {
  return (
    <TestEngine
      questions={reproductionQuestions}
      title="Reproduction Test 1"
      subject="Biology"
      chapter="Reproduction"
      timeLimit={35}
      questionCount={35}
    />
  );
}