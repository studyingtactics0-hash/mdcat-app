"use client";

import TestEngine from "@/components/testengine";
import { numsTest2 } from "@/data/nums/generated-tests";

export default function NUMSMock2Page() {
  return (
    <TestEngine
      questions={numsTest2}
      title="NUMS MOCK 2"
      subject="NUMS"
      chapter="NUMS MOCK 2"
      timeLimit={150}
    />
  );
}