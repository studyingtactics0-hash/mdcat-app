"use client";

import TestEngine from "@/components/testengine";
import { industrialChemistryQuestions } from "@/data/chemistry/industrial-chemistry";

export default function Test5Page() {
  return (
    <TestEngine
      questions={industrialChemistryQuestions}
      title="Industrial Chemistry Test 5"
      subject="Chemistry"
      chapter="Industrial Chemistry"
      timeLimit={200}
      questionCount={200}
    />
  );
}
