"use client";

import TestEngine from "@/components/testengine";
import { bioenergeticsQuestions } from "@/data/biology/bioenergetics";

export default function BioenergeticsTest1Page() {
  return (
    <TestEngine
      questions={bioenergeticsQuestions}
      title="Bioenergetics — Test 1"
      subject="Biology"
      chapter="Bioenergetics"
      timeLimit={20}
      questionCount={20}
    />
  );
}