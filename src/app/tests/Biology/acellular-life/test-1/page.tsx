"use client";

import TestEngine from "@/components/testengine";
import { acellularLifeQuestions } from "@/data/biology/acellular-life";

export default function AcellularLifeTest1Page() {
  return (
    <TestEngine
      questions={acellularLifeQuestions}
      title="Acellular Life — Test 1"
      subject="Biology"
      chapter="Acellular Life"
      timeLimit={20}
      questionCount={20}
    />
  );
}