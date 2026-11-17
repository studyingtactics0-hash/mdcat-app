import TestEngine from "@/components/testengine";
import { szambu2026Mcqs } from "@/data/mock tests/past papers/szambu-26";

export default function SZABMU2026Page() {
  return (
    <TestEngine
      questions={szambu2026Mcqs}
      title="SZABMU 2026 Past Paper"
      subject="SZABMU"
      chapter="SZABMU 2026"
      timeLimit={180}
    />
  );
}