import TestEngine from "@/components/testengine";
import { inheritanceQuestions } from "@/data/biology/inheritance";

export default function Page() {
  return (
    <TestEngine
      questions={inheritanceQuestions}
      title="Inheritance Test 5"
      subject="Biology"
      chapter="inheritance"
      timeLimit={20}
      questionCount={20}
    />
  );
}