"use client";

import TestEngine from "@/components/testengine";

import { formalAndWritingSkillQuestions } from "@/data/english/formal-and-writing-skill";

export default function FormalAndWritingSkillTest1Page() {
  return (
    <TestEngine
      questions={formalAndWritingSkillQuestions}
      title="Formal and Writing Skill — Test 1"
      subject="English"
      chapter="Formal and Writing Skill"
      timeLimit={20}
      questionCount={20}
    />
  );
}