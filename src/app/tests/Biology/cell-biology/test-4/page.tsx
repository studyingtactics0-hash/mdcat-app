import TestEngine from "@/components/testengine";
import { biologyQuestions } from "@/data/biology/cell structure and function";

export default function TestOnePage() {
  return (
    <TestEngine
      questions={biologyQuestions}
      title="Cell Structure and Function — Test 4"
      subject="Biology"
      chapter="Cell Biology"
      timeLimit={50}
      questionCount={50}
    />
  );
}