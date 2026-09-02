"use client";

import TestEngine from "@/components/testengine";
import { reproductionQuestions } from "@/data/biology/reproduction";

export default function ReproductionTest2Page() {
  return (
    <TestEngine
      questions={reproductionQuestions}
      title="Reproduction Test 5"
      subject="Biology"
      chapter="reproduction"
      timeLimit={200}
      questionCount={200}
    />
  );
}