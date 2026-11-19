import TestEngine from "@/components/testengine";

import { bumhs2026Questions } from "@/data/mock tests/past papers/bumhs-26";

export default function BUMHS2026Page() {
  return (
    <TestEngine
      questions={bumhs2026Questions}
      title="BUMHS 2026 Past Paper"
      subject="BUMHS"
      chapter="BUMHS 2026"
      timeLimit={180}
    />
  );
}