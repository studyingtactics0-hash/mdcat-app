"use client";

import TestEngine from "@/components/testengine";

import { atomicSpectraQuestions } from "@/data/physics/atomic-spectra";

export default function AtomicSpectraTest4Page() {
  return (
    <TestEngine
      questions={atomicSpectraQuestions}
      title="Atomic Spectra — Test 4"
      subject="Physics"
      chapter="Atomic Spectra"
      timeLimit={50}
      questionCount={50}
    />
  );
}