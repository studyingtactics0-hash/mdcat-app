"use client";

import TestEngine from "@/components/testengine";
import { reproductionQuestions } from "@/data/biology/reproduction";

export default function ReproductionTest4Page() {
  return (
    <TestEngine
      questions={reproductionQuestions}
      title="Reproduction Test 4"
      subject="Biology"
      chapter="Reproduction"
      timeLimit={50}
      questionCount={50}
    />
  );
}