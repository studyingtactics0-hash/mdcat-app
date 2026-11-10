
import { biologyquestions } from "@/data/biology/subject";
import { chemistryquestions } from "@/data/chemistry/subject";
import { physicsquestions } from "@/data/physics/subject";
import { formalAndWritingSkillQuestions } from "@/data/english/subject";
import { logicalReasoningQuestions } from "@/data/Logical Reasoning/logical reasoning";

export type DailyQuestionSubject =
  | "Biology"
  | "Chemistry"
  | "Physics"
  | "English"
  | "Logical Reasoning";

export type DailyQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
};

export const questionBanks: Record<
  DailyQuestionSubject,
  DailyQuestion[]
> = {
  Biology: biologyquestions,
  Chemistry: chemistryquestions,
  Physics: physicsquestions,
  English: formalAndWritingSkillQuestions,
  "Logical Reasoning": logicalReasoningQuestions,
};

export const subjectRotation: DailyQuestionSubject[] = [
  "Biology",
  "Chemistry",
  "Physics",
  "English",
  "Logical Reasoning",
];
