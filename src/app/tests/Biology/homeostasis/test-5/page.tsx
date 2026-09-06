"use client";

import TestEngine from "@/components/testengine";
import { homeostasisQuestions } from "@/data/biology/homeostasis";

export default function HomeostasisTest1Page() {
  return (
    <TestEngine
      questions={homeostasisQuestions}
      title="Homeostasis Test 5"
      subject="Biology"
      chapter="Homeostasis"
      timeLimit={20}
      questionCount={20}
    />
  );
}