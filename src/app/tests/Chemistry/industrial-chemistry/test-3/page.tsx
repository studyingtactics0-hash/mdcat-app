"use client";

import TestEngine from "@/components/testengine";
import { industrialChemistryQuestions } from "@/data/chemistry/industrial-chemistry";

export default function Test3Page() {
  return (
    <TestEngine
      questions={industrialChemistryQuestions}
      title="Industrial Chemistry Test 3"
      subject="Chemistry"
      chapter="Industrial Chemistry"
      timeLimit={20}
      questionCount={20}
    />
  );
}
