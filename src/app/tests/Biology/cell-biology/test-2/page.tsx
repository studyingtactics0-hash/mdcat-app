import TestEngine from "@/components/testengine";
import { biologyQuestions } from "@/data/biology/cell structure and function";

export default function TestTwoPage() {
  return (
    <TestEngine
      questions={biologyQuestions}
      title="Cell Structure and Function — Test 2"
      subject="Biology"
      chapter="Cell Biology"
      timeLimit={200}
      questionCount={200}
    />
  );
}