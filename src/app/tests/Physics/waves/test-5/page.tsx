"use client";

import TestEngine from "@/components/testengine";

import { wavesQuestions } from "@/data/physics/waves";

export default function WavesTest5Page() {
  return (
    <TestEngine
      questions={wavesQuestions}
      title="Waves — Test 5"
      subject="Physics"
      chapter="Waves"
      timeLimit={50}
      questionCount={50}
    />
  );
}