import TestEngine from "@/components/testengine";
import { siba25Questions } from "@/data/mock tests/past papers/siba-25";

export default function Siba25Page() {
  return (
    <TestEngine
      questions={siba25Questions}
      title="SIBA 2025 Past Paper"
      subject="SIBA"
      chapter="Past Papers"
      timeLimit={180}
    />
  );
}