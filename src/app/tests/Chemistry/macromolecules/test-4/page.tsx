"use client";

import TestEngine from "@/components/testengine";
import { macromoleculesQuestions } from "@/data/chemistry/macromolecules";

export default function Test4Page() {
  return (
    <TestEngine
      questions={macromoleculesQuestions}
      title="Macromolecules Test 4"
      subject="Chemistry"
      chapter="Macromolecules"
    />
  );
}
