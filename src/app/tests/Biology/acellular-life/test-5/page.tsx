"use client";

import TestEngine from "@/components/testengine";
import { acellularLifeQuestions } from "@/data/biology/acellular-life";

export default function AcellularLifeTest5Page() {
  return (
    <TestEngine
      questions={acellularLifeQuestions}
      title="Acellular Life — Test 5"
      subject="Biology"
      chapter="Acellular Life"
      timeLimit={200}
      questionCount={200}
    />
  );
}