"use client";

import TestEngine from "@/components/testengine";
import { bioenergeticsQuestions } from "@/data/biology/bioenergetics";

export default function BioenergeticsTest5Page() {
  return (
    <TestEngine
      questions={bioenergeticsQuestions}
      title="Bioenergetics — Test 5"
      subject="Biology"
      chapter="Bioenergetics"
      timeLimit={50}
      questionCount={50}
    />
  );
}