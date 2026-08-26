"use client";

import TestEngine from "@/components/testengine";
import { chemical-equilibriumQuestions } from "@/data/chemistry/chemical-equilibrium";

export default function Test2Page() {
  return (
    <TestEngine
      questions={chemical-equilibriumQuestions}
      title="Chemical Equilibrium Test 2"
      subject="Chemistry"
      chapter="Chemical Equilibrium"
    />
  );
}
