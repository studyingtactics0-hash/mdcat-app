"use client";

import TestEngine from "@/components/testengine";

import { atomicSpectraQuestions } from "@/data/physics/atomic-spectra";

export default function AtomicSpectraTest2Page() {
  return (
    <TestEngine
      questions={atomicSpectraQuestions}
      title="Atomic Spectra — Test 2"
      subject="Physics"
      chapter="Atomic Spectra"
      timeLimit={35}
      questionCount={35}
    />
  );
}