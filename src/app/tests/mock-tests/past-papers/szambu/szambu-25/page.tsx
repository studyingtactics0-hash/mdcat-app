import TestEngine from "@/components/testengine";
import { szambu2025Questions } from "@/data/mock tests/past papers/szambu-25";

export default function SZABMU2025Page() {
  return (
    <TestEngine
      questions={szambu2025Questions}
      title="SZABMU 2025 Past Paper"
      subject="SZABMU"
      chapter="SZABMU 2025"
      timeLimit={180}
    />
  );
}