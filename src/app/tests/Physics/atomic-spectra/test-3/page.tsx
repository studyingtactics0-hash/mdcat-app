"use client";

import TestEngine from "@/components/testengine";

import { atomicSpectraQuestions } from "@/data/physics/atomic-spectra";

export default function AtomicSpectraTest3Page() {
  return (
    <TestEngine
      questions={atomicSpectraQuestions}
      title="Atomic Spectra — Test 3"
      subject="Physics"
      chapter="Atomic Spectra"
      timeLimit={50}
      questionCount={50}
    />
  );
}