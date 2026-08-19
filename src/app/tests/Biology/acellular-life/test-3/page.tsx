"use client";

import TestEngine from "@/components/testengine";
import { acellularLifeQuestions } from "@/data/biology/acellular-life";

export default function AcellularLifeTest3Page() {
  return (
    <TestEngine
      questions={acellularLifeQuestions}
      title="Acellular Life — Test 3"
      subject="Biology"
      chapter="Acellular Life"
      timeLimit={20}
      questionCount={20}
    />
  );
}