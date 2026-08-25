"use client";

import TestEngine from "@/components/testengine";

import { wavesQuestions } from "@/data/physics/waves";

export default function WavesTest2Page() {
  return (
    <TestEngine
      questions={wavesQuestions}
      title="Waves — Test 2"
      subject="Physics"
      chapter="Waves"
      timeLimit={35}
      questionCount={35}
    />
  );
}