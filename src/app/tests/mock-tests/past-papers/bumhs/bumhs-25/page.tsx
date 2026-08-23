import TestEngine from "@/components/testengine";

import { bumhs2025Questions } from "@/data/mock tests/past papers/bumhs-25";

export default function BUMHS2025Page() {
  return (
    <TestEngine
      questions={bumhs2025Questions}
      title="BUMHS 2025 Past Paper"
      subject="BUMHS"
      chapter="BUMHS 2025"
      timeLimit={180}
    />
  );
}