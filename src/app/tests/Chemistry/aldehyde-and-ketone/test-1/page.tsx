"use client";

import TestEngine from "@/components/testengine";
import { aldehyde-and-ketoneQuestions } from "@/data/chemistry/aldehyde-and-ketone";

export default function Test1Page() {
  return (
    <TestEngine
      questions={aldehyde-and-ketoneQuestions}
      title="Aldehyde And Ketone Test 1"
      subject="Chemistry"
      chapter="Aldehyde And Ketone"
    />
  );
}
