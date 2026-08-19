import TestEngine from "@/components/testengine";
import { circulationQuestions } from "@/data/biology/circulation";

export default function Page() {
  return (
    <TestEngine
      questions={circulationQuestions}
      title="Circulation Test 3"
      subject="Biology"
      chapter="circulation"
      timeLimit={20}
      questionCount={20}
    />
  );
}