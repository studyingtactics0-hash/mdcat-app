"use client";

import TestEngine from "@/components/testengine";

import { formalAndWritingSkillQuestions } from "@/data/english/formal-and-writing-skill";

export default function FormalAndWritingSkillTest3Page() {
  return (
    <TestEngine
      questions={formalAndWritingSkillQuestions}
      title="Formal and Writing Skill — Test 3"
      subject="English"
      chapter="Formal and Writing Skill"
      timeLimit={50}
      questionCount={50}
    />
  );
}