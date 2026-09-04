"use client";

import TestEngine from "@/components/testengine";
import { numsTest3 } from "@/data/nums/generated-tests";

export default function NUMSMock3Page() {
  return (
    <TestEngine
      questions={numsTest3}
      title="NUMS MOCK 3"
      subject="NUMS"
      chapter="NUMS MOCK 3"
      timeLimit={150}
    />
  );
}