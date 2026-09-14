import TestEngine from "@/components/testengine";
import { circulationQuestions } from "@/data/biology/circulation";

export default function Page() {
  return (
    <TestEngine
      questions={circulationQuestions}
      title="Circulation Test 5"
      subject="Biology"
      chapter="circulation"
      timeLimit={72}
      questionCount={72}
    />
  );
}