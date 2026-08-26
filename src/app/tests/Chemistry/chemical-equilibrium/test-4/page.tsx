"use client";

import TestEngine from "@/components/testengine";
import { chemical-equilibriumQuestions } from "@/data/chemistry/chemical-equilibrium";

export default function Test4Page() {
  return (
    <TestEngine
      questions={chemical-equilibriumQuestions}
      title="Chemical Equilibrium Test 4"
      subject="Chemistry"
      chapter="Chemical Equilibrium"
    />
  );
}
