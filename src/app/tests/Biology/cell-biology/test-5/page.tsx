import TestEngine from "@/components/testengine";
import { biologyQuestions } from "@/data/biology/cell structure and function";

export default function TestOnePage() {
  return (
    <TestEngine
      questions={biologyQuestions}
      title="Cell Structure and Function — Test 5"
      subject="Biology"
      chapter="Cell Biology"
      timeLimit={103}
      questionCount={103}
    />
  );
}