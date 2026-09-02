import TestEngine from "@/components/testengine";
import { coordinationQuestions } from "@/data/biology/coordination";

export default function TestFivePage() {
  return (
    <TestEngine
      questions={coordinationQuestions}
      title="Coordination and Control — Test 5"
      subject="Biology"
      chapter="coordination-and-control"
      timeLimit={200}
      questionCount={200}
    />
  );
}