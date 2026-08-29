"use client";

import TestEngine from "@/components/testengine";

import { nums2025Questions } from "@/data/mock tests/nums/nums-25";

function shuffleArray<T>(array: T[]): T[] {
const shuffled = [...array];

for (let i = shuffled.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}

return shuffled;
}

export default function NUMS2025Page() {
const questions = shuffleArray(nums2025Questions);

return ( <TestEngine
   questions={questions}
   title="NUMS 2025"
   subject="NUMS"
   chapter="NUMS 2025"
   timeLimit={150}
   questionCount={questions.length}
 />
);
}
