"use client";

import TestEngine from "@/components/testengine";
import { respirationQuestions } from "@/data/biology/respiration";

export default function RespirationTest1Page() {
  return (
    <TestEngine
      questions={respirationQuestions}
      title="Respiration Test 1"
      subject="Biology"
      chapter="respiration"
      timeLimit={5}
      questionCount={5}
    />
  );
}