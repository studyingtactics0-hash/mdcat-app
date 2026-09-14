"use client";

import TestEngine from "@/components/testengine";
import { enzymesQuestions } from "@/data/biology/enzymes";

export default function EnzymesTest2Page() {
  return (
    <TestEngine
      questions={enzymesQuestions}
      title="Enzymes Test 2"
      subject="Biology"
      chapter="Enzymes"
      timeLimit={15}
      questionCount={15}
    />
  );
}