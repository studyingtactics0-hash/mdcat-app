"use client";

import TestEngine from "@/components/testengine";
import { reactionKineticsQuestions } from "@/data/chemistry/reaction-kinetics";

export default function Test2Page() {
  return (
    <TestEngine
      questions={reactionKineticsQuestions}
      title="Reaction Kinetics Test 2"
      subject="Chemistry"
      chapter="Reaction Kinetics"
      timeLimit={20}
      questionCount={20}
    />
  );
}
