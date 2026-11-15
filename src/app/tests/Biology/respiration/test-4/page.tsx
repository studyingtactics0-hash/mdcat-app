"use client";

import TestEngine from "@/components/testengine";
import { respirationQuestions } from "@/data/biology/respiration";

export default function RespirationTest4Page() {
  return (
    <TestEngine
      questions={respirationQuestions}
      title="Respiration Test 4"
      subject="Biology"
      chapter="respiration"
      timeLimit={5}
      questionCount={5}
    />
  );
}