"use client";

import TestEngine from "@/components/testengine";
import { reactionKineticsQuestions } from "@/data/chemistry/reaction-kinetics";

export default function Test5Page() {
  return (
    <TestEngine
      questions={reactionKineticsQuestions}
      title="Reaction Kinetics Test 5"
      subject="Chemistry"
      chapter="Reaction Kinetics"
      timeLimit={200}
      questionCount={200}
    />
  );
}
