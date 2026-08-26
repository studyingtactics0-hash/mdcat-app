"use client";

import TestEngine from "@/components/testengine";
import { alkylHalidesQuestions } from "@/data/chemistry/alkyl-halide";

export default function Test4Page() {
  return (
    <TestEngine
      questions={alkylHalidesQuestions}
      title="Alkyl Halides Test 4"
      subject="Chemistry"
      chapter="Alkyl Halides"
      timeLimit={20}
      questionCount={20}
    />
  );
}
