"use client";

import TestEngine from "@/components/testengine";

import { readingAndThinkingSkillQuestions } from "@/data/english/reading-and-thinking-skill";

export default function ReadingAndThinkingSkillTest2Page() {
  return (
    <TestEngine
      questions={readingAndThinkingSkillQuestions}
      title="Reading and Thinking Skill — Test 2"
      subject="English"
      chapter="Reading and Thinking Skill"
      timeLimit={35}
      questionCount={35}
    />
  );
}