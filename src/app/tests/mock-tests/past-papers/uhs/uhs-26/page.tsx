"use client";

import TestEngine from "@/components/testengine";
import { uhs2026Questions } from "@/data/mock tests/past papers/uhs-26";

export default function UHS2026Page() {
  return (
    <TestEngine
      questions={uhs2026Questions}
      title="UHS 2026 Past Paper"
      subject="UHS"
      chapter="UHS 2026"
      timeLimit={180}
      questionCount={180}
    />
  );
}