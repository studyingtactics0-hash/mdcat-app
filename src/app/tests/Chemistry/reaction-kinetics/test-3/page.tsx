"use client";

import TestEngine from "@/components/testengine";
import { reactionKineticsQuestions } from "@/data/chemistry/reaction-kinetics";

export default function Test3Page() {
  return (
    <TestEngine
      questions={reactionKineticsQuestions}
      title="Reaction Kinetics Test 3"
      subject="Chemistry"
      chapter="Reaction Kinetics"
    />
  );
}
