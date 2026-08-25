"use client";

import TestEngine from "@/components/testengine";

import { atomicSpectraQuestions } from "@/data/physics/atomic-spectra";

export default function AtomicSpectraTest1Page() {
  return (
    <TestEngine
      questions={atomicSpectraQuestions}
      title="Atomic Spectra — Test 1"
      subject="Physics"
      chapter="Atomic Spectra"
      timeLimit={20}
      questionCount={20}
    />
  );
}