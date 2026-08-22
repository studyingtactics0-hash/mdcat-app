"use client";

import TestEngine from "@/components/testengine";
import { fullMockTest2Questions } from "@/data/mock tests/second-year-mock";

export default function FullMockTest2Page() {
  return (
    <TestEngine
      questions={fullMockTest2Questions}
      title="Full Mock Test 2nd Year Syllabus"
      subject="Full Mock"
      chapter="2nd Year Syllabus"
      timeLimit={180}
      questionCount={180}
    />
  );
}