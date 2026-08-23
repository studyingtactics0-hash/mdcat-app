import TestEngine from "@/components/testengine";
import { siba24Questions } from "@/data/mock tests/past papers/siba-24";

export default function Siba24Page() {
  return (
    <TestEngine
      questions={siba24Questions}
      title="SIBA 2024 Past Paper"
      subject="SIBA"
      chapter="Past Papers"
      timeLimit={180}
    />
  );
}