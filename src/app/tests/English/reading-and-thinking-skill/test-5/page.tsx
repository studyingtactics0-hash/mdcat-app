"use client";

import TestEngine from "@/components/testengine";

import { readingAndThinkingSkillQuestions } from "@/data/english/reading-and-thinking-skill";

export default function ReadingAndThinkingSkillTest5Page() {
  return (
    <TestEngine
      questions={readingAndThinkingSkillQuestions}
      title="Reading and Thinking Skill — Test 5"
      subject="English"
      chapter="Reading and Thinking Skill"
      timeLimit={50}
      questionCount={50}
    />
  );
}