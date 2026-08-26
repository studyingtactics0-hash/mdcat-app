"use client";

import TestEngine from "@/components/testengine";
import { reactionKineticsQuestions } from "@/data/chemistry/reaction-kinetics";

export default function Test1Page() {
  return (
    <TestEngine
      questions={reactionKineticsQuestions}
      title="Reaction Kinetics Test 1"
      subject="Chemistry"
      chapter="Reaction Kinetics"
    />
  );
}
