"use client";

import TestEngine from "@/components/testengine";
import { alkyl-halidesQuestions } from "@/data/chemistry/alkyl-halides";

export default function Test2Page() {
  return (
    <TestEngine
      questions={alkyl-halidesQuestions}
      title="Alkyl Halides Test 2"
      subject="Chemistry"
      chapter="Alkyl Halides"
    />
  );
}
