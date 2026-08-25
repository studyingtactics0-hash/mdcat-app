"use client";

import TestEngine from "@/components/testengine";

import { wavesQuestions } from "@/data/physics/waves";

export default function WavesTest1Page() {
  return (
    <TestEngine
      questions={wavesQuestions}
      title="Waves — Test 1"
      subject="Physics"
      chapter="Waves"
      timeLimit={20}
      questionCount={20}
    />
  );
}