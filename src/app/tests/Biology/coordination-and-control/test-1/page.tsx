import TestEngine from "@/components/testengine";
import { coordinationQuestions } from "@/data/biology/coordination";

export default function TestOnePage() {
  return (
    <TestEngine
      questions={coordinationQuestions}
      title="Coordination and Control — Test 1"
      subject="Biology"
      chapter="coordination-and-control"
      timeLimit={20}
      questionCount={20}
    />
  );
}