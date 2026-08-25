"use client";

import TestEngine from "@/components/testengine";

import { wavesQuestions } from "@/data/physics/waves";

export default function WavesTest3Page() {
  return (
    <TestEngine
      questions={wavesQuestions}
      title="Waves — Test 3"
      subject="Physics"
      chapter="Waves"
      timeLimit={50}
      questionCount={50}
    />
  );
}