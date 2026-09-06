"use client";

import TestEngine from "@/components/testengine";
import { biologyquestions } from "@/data/biology/subject";

export default function BiologyTest1Page() {
  return (
    <TestEngine
      questions={biologyquestions}
      title="Biology Test 3"
      subject="Biology"
      chapter="Subject-Wise"
      timeLimit={90}
      questionCount={90}
    />
  );
}