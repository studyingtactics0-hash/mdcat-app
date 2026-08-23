"use client";

import TestEngine from "@/components/testengine";

import { uhs2024Questions } from "@/data/mock tests/past papers/uhs-24";

export default function UHS2024Page() {
  return (
    <TestEngine
      questions={uhs2024Questions}
      title="UHS 2024 Past Paper"
      subject="UHS"
      chapter="UHS 2024"
      timeLimit={180}
      questionCount={180}
    />
  );
}