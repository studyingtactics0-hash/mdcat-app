"use client";

import TestEngine from "@/components/testengine";
import { alkylHalidesQuestions } from "@/data/chemistry/alkyl-halide";

export default function Test2Page() {
  return (
    <TestEngine
      questions={alkylHalidesQuestions}
      title="Alkyl Halides Test 2"
      subject="Chemistry"
      chapter="Alkyl Halides"
      timeLimit={15}
      questionCount={15}
    />
  );
}
