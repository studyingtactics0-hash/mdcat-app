"use client";

import TestEngine from "@/components/testengine";
import { numsTest1 } from "@/data/nums/generated-tests";

export default function NUMSMock1Page() {
  return (
    <TestEngine
      questions={numsTest1}
      title="NUMS MOCK 1"
      subject="NUMS"
      chapter="NUMS MOCK 1"
      timeLimit={150}
    />
  );
}