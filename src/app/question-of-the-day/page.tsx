
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type QuestionData = {
  id: string;
  date: string;
  subject: string;
  question: string;
  options: string[];
};

type ResultData = {
  selectedAnswer: number;
  isCorrect: boolean;
  correctAnswer: number;
  explanation?: string | null;
};

export default function QuestionOfTheDayPage() {
  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);
  const [attempted, setAttempted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadQuestion() {
      try {
        const response = await fetch("/api/daily-question");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to load question.");
        }

        setQuestion(data.question);
        setAttempted(data.attempted);
        setResult(data.result);

      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    }

    loadQuestion();
  }, []);

  async function submitAnswer() {
    if (selectedAnswer === null || submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/daily-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedAnswer }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.result) {
          setResult(data.result);
          setAttempted(true);
          setSelectedAnswer(data.result.selectedAnswer);
        }

        throw new Error(data.error || "Unable to submit answer.");
      }

      setResult(data.result);
      setAttempted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-[#0b1e39] font-medium">
          Loading Question of the Day...
        </p>
      </main>
    );
  }

  if (error && !question) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
        <p className="text-red-600">{error}</p>
      </main>
    );
  }

  if (!question) return null;

  const displayedAnswer = result?.selectedAnswer ?? selectedAnswer;

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Page heading */}
        <div className="bg-[#0b1e39] rounded-xl p-6 text-white mb-6">
          <p className="text-[#ff9800] text-sm font-semibold tracking-wider">
            STUDYING TACTICS
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold mt-2">
            Question of the Day
          </h1>

          <p className="text-gray-300 text-sm mt-2">
            One question every day. Keep improving!
          </p>
        </div>

        {/* Main question card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-7">
          <div className="flex justify-between items-center mb-5 gap-3">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
              {question.subject}
            </span>

            <span className="text-gray-500 text-xs">
              {question.date}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-semibold text-[#0b1e39] leading-relaxed mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = displayedAnswer === index;
              const isCorrect = result?.correctAnswer === index;

              let optionStyle =
  "border-gray-300 bg-white text-[#0b1e39] hover:border-[#ff9800] hover:bg-orange-50";

if (result && isCorrect) {
  optionStyle =
    "border-green-500 bg-green-50 text-green-900";
} else if (result && isSelected && !result.isCorrect) {
  optionStyle =
    "border-red-500 bg-red-50 text-red-900";
} else if (!result && isSelected) {
  optionStyle =
    "border-[#ff9800] bg-orange-100 text-[#0b1e39]";
}

              return (
                <button
                  key={index}
                  type="button"
                  disabled={attempted || submitting}
                  onClick={() => setSelectedAnswer(index)}
                  className={`w-full text-left border rounded-lg p-4 transition-colors ${optionStyle} ${
                    !attempted ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <span className="font-semibold mr-2">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                  {result && isCorrect && (
                    <span className="float-right text-green-700 font-semibold">
                      ✓
                    </span>
                  )}
                  {result && isSelected && !result.isCorrect && (
                    <span className="float-right text-red-600 font-semibold">
                      ✗
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {!attempted && (
            <button
              onClick={submitAnswer}
              disabled={selectedAnswer === null || submitting}
              className="w-full mt-6 bg-[#ff9800] hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-[#0b1e39] font-bold py-3 rounded-lg transition"
            >
              {submitting ? "Submitting..." : "Submit Answer"}
            </button>
          )}

          {result && (
            <div className={`mt-6 p-4 rounded-lg ${
              result.isCorrect
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}>
              <h3 className={`font-bold ${
                result.isCorrect ? "text-green-700" : "text-red-700"
              }`}>
                {result.isCorrect ? "Correct Answer! 🎉" : "Incorrect Answer"}
              </h3>

              <p className="text-sm text-gray-700 mt-2">
                Correct answer:{" "}
                <strong>
                  {String.fromCharCode(65 + result.correctAnswer)}.{" "}
                  {question.options[result.correctAnswer]}
                </strong>
              </p>

              {result.explanation && (
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                  <strong>Explanation:</strong> {result.explanation}
                </p>
              )}
              <Link
  href="/"
  className="block w-full mt-5 text-center bg-[#0b1e39] hover:bg-[#172d4f] text-white font-bold py-3 rounded-lg transition"
>
  ← Back to App
</Link>
            </div>
          )}

          {error && (
            <p className="text-red-600 text-sm mt-4">{error}</p>
          )}
        </div>
      </div>
    </main>
  );
}
