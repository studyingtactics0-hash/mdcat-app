import TestEngine from "@/components/testengine";
import { kmu2026Questions } from "@/data/mock tests/past papers/kmu-26";

export default function KMU2026Page() {
  return (
    <TestEngine
      questions={kmu2026Questions}
      title="KMU 2026 Past Paper"
      subject="KMU"
      chapter="KMU 2026"
      timeLimit={180}
    />
  );
}