import TestEngine from "@/components/testengine";
import { bumhs2024Questions } from "@/data/mock tests/past papers/bumhs-24"; // Adjust path/import name as needed

export default function KMU2024Page() {
  return (
    <TestEngine
      questions={bumhs2024Questions}
      title="KMU 2024 Past Paper"
      subject="KMU"
      chapter="KMU 2024"
      timeLimit={180}
    />
  );
}