"use client";

import TestEngine from "@/components/testengine";
import { uhs2025Questions } from "@/data/mock tests/past papers/uhs-25";

export default function UHS2025Page() {
  return (
    <TestEngine
      questions={uhs2025Questions}
      title="UHS 2025 Past Paper"
      subject="UHS"
      chapter="UHS 2025"
      timeLimit={180}
      questionCount={180}
    />
  );
}