import TestEngine from "@/components/testengine";
import { kmu2025Questions } from "@/data/mock tests/past papers/kmu-25";

export default function KMU2025Page() {
  return (
    <TestEngine
      questions={kmu2025Questions}
      title="KMU 2025 Past Paper"
      subject="KMU"
      chapter="KMU 2025"
      timeLimit={180}
    />
  );
}