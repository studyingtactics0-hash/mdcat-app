"use client";

import TestEngine from "@/components/testengine";
import { enzymesQuestions } from "@/data/biology/enzymes";

export default function EnzymesTest3Page() {
  return (
    <TestEngine
      questions={enzymesQuestions}
      title="Enzymes Test 3"
      subject="Biology"
      chapter="Enzymes"
      timeLimit={20}
      questionCount={20}
    />
  );
}