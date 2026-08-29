"use client";

import TestEngine from "@/components/testengine";

import { nums2024Questions } from "@/data/mock tests/nums/nums-24";

function shuffleArray<T>(array: T[]): T[] {
const shuffled = [...array];

for (let i = shuffled.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}

return shuffled;
}

export default function NUMS2024Page() {
const questions = shuffleArray(nums2024Questions);

return ( <TestEngine
   questions={questions}
   title="NUMS 2024"
   subject="NUMS"
   chapter="NUMS 2024"
   timeLimit={150}
   questionCount={questions.length}
 />
);
}
