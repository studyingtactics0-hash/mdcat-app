import TestEngine from "@/components/testengine";

import { bumhs2024Questions } from "@/data/mock tests/past papers/bumhs-24";

export default function BUMHS2024Page() {
  return (
    <TestEngine
      questions={bumhs2024Questions}
      title="BUMHS 2024 Past Paper"
      subject="BUMHS"
      chapter="BUMHS 2024"
      timeLimit={180}
    />
  );
}