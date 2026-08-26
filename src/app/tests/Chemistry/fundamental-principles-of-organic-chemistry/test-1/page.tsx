"use client";

import TestEngine from "@/components/testengine";
import { fundamentalPrinciplesOfOrganicChemistryQuestions } from "@/data/chemistry/fundamental-principles-of-organic-chemistry";

export default function Test1Page() {
  return (
    <TestEngine
      questions={fundamentalPrinciplesOfOrganicChemistryQuestions}
      title="Fundamental Principles of Organic Chemistry Test 1"
      subject="Chemistry"
      chapter="Fundamental Principles of Organic Chemistry"
    />
  );
}
