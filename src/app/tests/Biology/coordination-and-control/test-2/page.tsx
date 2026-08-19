import TestEngine from "@/components/testengine";
import { coordinationQuestions } from "@/data/biology/coordination";

export default function TestTwoPage() {
  return (
    <TestEngine
      questions={coordinationQuestions}
      title="Coordination and Control — Test 2"
      subject="Biology"
      chapter="coordination-and-control"
      timeLimit={35}
      questionCount={35}
    />
  );
}