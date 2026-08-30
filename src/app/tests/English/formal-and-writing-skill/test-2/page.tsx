"use client";

import TestEngine from "@/components/testengine";

import { formalAndWritingSkillQuestions } from "@/data/english/formal-and-writing-skill";

export default function FormalAndWritingSkillTest2Page() {
  return (
    <TestEngine
      questions={formalAndWritingSkillQuestions}
      title="Formal and Writing Skill — Test 2"
      subject="English"
      chapter="Formal and Writing Skill"
      timeLimit={35}
      questionCount={35}
    />
  );
}