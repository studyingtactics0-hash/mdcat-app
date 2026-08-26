"use client";

import TestEngine from "@/components/testengine";
import { macromoleculesQuestions } from "@/data/chemistry/macromolecules";

export default function Test2Page() {
  return (
    <TestEngine
      questions={macromoleculesQuestions}
      title="Macromolecules Test 2"
      subject="Chemistry"
      chapter="Macromolecules"
      timeLimit={20}
      questionCount={20}
    />
  );
}
