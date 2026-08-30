"use client";

import TestEngine from "@/components/testengine";

import { readingAndThinkingSkillQuestions } from "@/data/english/reading-and-thinking-skill";

export default function ReadingAndThinkingSkillTest1Page() {
  return (
    <TestEngine
      questions={readingAndThinkingSkillQuestions}
      title="Reading and Thinking Skill — Test 1"
      subject="English"
      chapter="Reading and Thinking Skill"
      timeLimit={20}
      questionCount={20}
    />
  );
}