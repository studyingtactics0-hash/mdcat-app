import TestEngine from "@/components/testengine";
import { szambu2024Questions } from "@/data/mock tests/past papers/szambu-24";

export default function SZABMU2024Page() {
  return (
    <TestEngine
      questions={szambu2024Questions}
      title="SZABMU 2024 Past Paper"
      subject="SZABMU"
      chapter="SZABMU 2024"
      timeLimit={180}
    />
  );
}