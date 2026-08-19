"use client";

import { useEffect, useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

type TestEngineProps = {
  questions: Question[];
  title: string;
  subject: string;
  chapter: string;
  timeLimit: number;
};

export default function TestEngine({
  questions,
  title,
  subject,
  chapter,
  timeLimit,
}: TestEngineProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<
    (number | null)[]
  >(Array(questions.length).fill(null));

  const [timeLeft, setTimeLeft] = useState(timeLimit * 60);

  const [submitted, setSubmitted] = useState(false);

  const [showSubmitWarning, setShowSubmitWarning] =
    useState(false);

  const [showReview, setShowReview] = useState(false);

  /* =========================
     TIMER
  ========================= */

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  /* =========================
     SELECT ANSWER
  ========================= */

  const selectAnswer = (optionIndex: number) => {
    const updatedAnswers = [...selectedAnswers];

    updatedAnswers[currentQuestion] = optionIndex;

    setSelectedAnswers(updatedAnswers);
  };

  /* =========================
     RESULTS
  ========================= */

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return (
        score +
        (selectedAnswers[index] === question.answer ? 1 : 0)
      );
    }, 0);
  };

  const calculateUnanswered = () => {
    return selectedAnswers.filter(
      (answer) => answer === null
    ).length;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const question = questions[currentQuestion];

  const unanswered = calculateUnanswered();

  /* =========================
     RESULT SCREEN
  ========================= */

  if (submitted) {
    const score = calculateScore();

    const incorrect =
      questions.length - score - unanswered;

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <main className="min-h-screen bg-[#0b1e39] text-white">

        {/* HEADER */}
        <header className="border-b border-[#172d4f]">
          <div className="container mx-auto px-4 py-5">

            <div className="text-2xl font-black">
              STUDYING{" "}
              <span className="text-[#ff9800]">
                TACTICS
              </span>
            </div>

          </div>
        </header>

        <section className="container mx-auto px-4 py-12">

          <div className="max-w-3xl mx-auto">

            {!showReview ? (

              /* =========================
                 RESULT
              ========================= */

              <div className="bg-white text-[#0b1e39] rounded-3xl shadow-xl p-8 text-center">

                <div className="text-6xl">
                  🏆
                </div>

                <h1 className="text-3xl font-black mt-5">
                  Test Completed!
                </h1>

                <p className="text-zinc-600 mt-2">
                  {title}
                </p>

                {/* SCORE */}
                <div className="mt-8">

                  <div className="text-6xl font-black text-[#ff9800]">
                    {score}/{questions.length}
                  </div>

                  <p className="text-xl font-bold mt-2">
                    {percentage}%
                  </p>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-3 mt-8">

                  <div className="bg-green-100 rounded-xl p-4">
                    <div className="font-black text-xl text-green-700">
                      {score}
                    </div>

                    <div className="text-sm text-green-700">
                      Correct
                    </div>
                  </div>

                  <div className="bg-red-100 rounded-xl p-4">
                    <div className="font-black text-xl text-red-700">
                      {incorrect}
                    </div>

                    <div className="text-sm text-red-700">
                      Incorrect
                    </div>
                  </div>

                  <div className="bg-yellow-100 rounded-xl p-4">
                    <div className="font-black text-xl text-yellow-700">
                      {unanswered}
                    </div>

                    <div className="text-sm text-yellow-700">
                      Unanswered
                    </div>
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex flex-col md:flex-row gap-3 mt-8">

                  <button
                    onClick={() =>
                      setShowReview(true)
                    }
                    className="flex-1 bg-[#0b1e39] text-white font-bold py-3 rounded-xl hover:bg-[#142b4d]"
                  >
                    Review Answers
                  </button>

                  <button
                    onClick={() =>
                      window.location.reload()
                    }
                    className="flex-1 bg-[#ff9800] hover:bg-[#e38000] font-bold py-3 rounded-xl"
                  >
                    Retake Test
                  </button>

                </div>

                <a
                  href={`/tests/${subject}/${chapter}`}
                  className="block mt-3 bg-[#e9ecef] text-[#0b1e39] font-bold py-3 rounded-xl"
                >
                  Back to Tests
                </a>

              </div>

            ) : (

              /* =========================
                 REVIEW
              ========================= */

              <div>

                <div className="flex items-center justify-between mb-6">

                  <div>

                    <p className="text-[#ff9800] text-sm font-bold uppercase">
                      {subject} • {chapter}
                    </p>

                    <h1 className="text-3xl font-black mt-1">
                      Review Answers
                    </h1>

                  </div>

                  <button
                    onClick={() =>
                      setShowReview(false)
                    }
                    className="bg-white text-[#0b1e39] px-4 py-2 rounded-xl font-bold"
                  >
                    Results
                  </button>

                </div>

                <div className="space-y-5">

                  {questions.map(
                    (question, index) => {

                      const selected =
                        selectedAnswers[index];

                      const isCorrect =
                        selected === question.answer;

                      const isUnanswered =
                        selected === null;

                      return (

                        <div
                          key={index}
                          className="bg-white text-[#0b1e39] rounded-2xl p-6"
                        >

                          <div className="flex justify-between items-start gap-4">

                            <h2 className="font-bold text-lg">
                              Q{index + 1}.{" "}
                              {question.question}
                            </h2>

                            <span
                              className={`text-xs font-black px-3 py-1 rounded-full whitespace-nowrap ${
                                isUnanswered
                                  ? "bg-yellow-100 text-yellow-700"
                                  : isCorrect
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {isUnanswered
                                ? "Unanswered"
                                : isCorrect
                                ? "Correct"
                                : "Incorrect"}
                            </span>

                          </div>

                          <div className="mt-5 space-y-2">

                            {question.options.map(
                              (
                                option,
                                optionIndex
                              ) => {

                                const isSelected =
                                  selected ===
                                  optionIndex;

                                const isAnswer =
                                  question.answer ===
                                  optionIndex;

                                return (

                                  <div
                                    key={
                                      optionIndex
                                    }
                                    className={`p-3 rounded-lg border-2 ${
                                      isAnswer
                                        ? "border-green-500 bg-green-50"
                                        : isSelected
                                        ? "border-red-500 bg-red-50"
                                        : "border-zinc-200"
                                    }`}
                                  >

                                    <span className="font-bold mr-2">
                                      {String.fromCharCode(
                                        65 +
                                          optionIndex
                                      )}
                                      .
                                    </span>

                                    {option}

                                    {isAnswer && (
                                      <span className="ml-2 text-green-700 font-bold">
                                        ✓ Correct Answer
                                      </span>
                                    )}

                                    {isSelected &&
                                      !isAnswer && (
                                        <span className="ml-2 text-red-700 font-bold">
                                          ✗ Your Answer
                                        </span>
                                      )}

                                  </div>
                                );
                              }
                            )}

                          </div>

                        </div>

                      );
                    }
                  )}

                </div>

              </div>

            )}

          </div>

        </section>

      </main>
    );
  }

  /* =========================
     TEST SCREEN
  ========================= */

  return (
    <main className="min-h-screen bg-[#0b1e39] text-white">

      {/* HEADER */}
      <header className="border-b border-[#172d4f]">

        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          <div className="text-xl md:text-2xl font-black">

            STUDYING{" "}
            <span className="text-[#ff9800]">
              TACTICS
            </span>

          </div>

          <div
            className={`font-black px-4 py-2 rounded-xl ${
              timeLeft <= 60
                ? "bg-red-500 text-white"
                : "bg-[#ff9800] text-[#0b1e39]"
            }`}
          >
            ⏱️ {formatTime(timeLeft)}
          </div>

        </div>

      </header>

      {/* TEST */}
      <section className="container mx-auto px-4 py-8">

        <div className="max-w-4xl mx-auto">

          {/* TEST INFO */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">

            <div>

              <p className="text-[#ff9800] text-sm font-bold uppercase">
                {subject} • {chapter}
              </p>

              <h1 className="text-2xl md:text-3xl font-black mt-1">
                {title}
              </h1>

            </div>

            <div className="text-[#cdd6e6] text-sm">
              Question{" "}
              {currentQuestion + 1} of{" "}
              {questions.length}
            </div>

          </div>

          {/* PROGRESS */}
          <div className="w-full bg-[#243b60] rounded-full h-2 mb-8">

            <div
              className="bg-[#ff9800] h-2 rounded-full transition-all"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            />

          </div>

          {/* QUESTION CARD */}
          <div className="bg-white text-[#0b1e39] rounded-3xl shadow-xl p-6 md:p-10">

            <div className="text-sm font-bold text-[#ff9800] mb-3">
              QUESTION{" "}
              {currentQuestion + 1}
            </div>

            <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
              {question.question}
            </h2>

            {/* OPTIONS */}
            <div className="mt-8 space-y-4">

              {question.options.map(
                (option, index) => {

                  const isSelected =
                    selectedAnswers[
                      currentQuestion
                    ] === index;

                  return (

                    <button
                      key={option}
                      onClick={() =>
                        selectAnswer(index)
                      }
                      className={`w-full text-left border-2 rounded-xl p-4 transition ${
                        isSelected
                          ? "border-[#ff9800] bg-[#fff3e0]"
                          : "border-zinc-200 hover:border-[#ff9800]"
                      }`}
                    >

                      <span
                        className={`inline-flex items-center justify-center w-9 h-9 rounded-full mr-3 font-bold ${
                          isSelected
                            ? "bg-[#ff9800] text-[#0b1e39]"
                            : "bg-[#e9ecef]"
                        }`}
                      >
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <span className="font-medium">
                        {option}
                      </span>

                    </button>

                  );
                }
              )}

            </div>

            {/* NAVIGATION */}
            <div className="flex justify-between gap-4 mt-10">

              <button
                onClick={() =>
                  setCurrentQuestion((q) =>
                    Math.max(0, q - 1)
                  )
                }
                disabled={
                  currentQuestion === 0
                }
                className="px-6 py-3 rounded-xl font-bold bg-[#e9ecef] disabled:opacity-40"
              >
                ← Previous
              </button>

              {currentQuestion <
              questions.length - 1 ? (

                <button
                  onClick={() =>
                    setCurrentQuestion(
                      (q) => q + 1
                    )
                  }
                  className="px-7 py-3 rounded-xl font-bold bg-[#ff9800] text-[#0b1e39]"
                >
                  Next →
                </button>

              ) : (

                <button
                  onClick={() => {

                    if (unanswered > 0) {
                      setShowSubmitWarning(
                        true
                      );
                    } else {
                      setSubmitted(true);
                    }

                  }}
                  className="px-7 py-3 rounded-xl font-bold bg-[#ff9800] text-[#0b1e39]"
                >
                  Submit Test
                </button>

              )}

            </div>

          </div>

          {/* QUESTION NAVIGATOR */}
          <div className="mt-6 bg-[#142542] rounded-2xl p-5">

            <div className="flex justify-between items-center mb-4">

              <p className="font-bold">
                Questions
              </p>

              <p className="text-sm text-[#cdd6e6]">
                {questions.length -
                  unanswered}
                /{questions.length} answered
              </p>

            </div>

            <div className="flex flex-wrap gap-2">

              {questions.map((_, index) => {

                const answered =
                  selectedAnswers[index] !==
                  null;

                return (

                  <button
                    key={index}
                    onClick={() =>
                      setCurrentQuestion(index)
                    }
                    className={`w-10 h-10 rounded-lg font-bold text-sm ${
                      index === currentQuestion
                        ? "bg-[#ff9800] text-[#0b1e39]"
                        : answered
                        ? "bg-white text-[#0b1e39]"
                        : "bg-[#243b60] text-white"
                    }`}
                  >
                    {index + 1}
                  </button>

                );

              })}

            </div>

          </div>

        </div>

      </section>

      {/* SUBMIT WARNING */}
      {showSubmitWarning && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">

          <div className="bg-white text-[#0b1e39] rounded-2xl p-7 max-w-md w-full shadow-2xl">

            <h2 className="text-2xl font-black">
              Submit Test?
            </h2>

            <p className="text-zinc-600 mt-3">
              You still have{" "}
              <strong>{unanswered}</strong>{" "}
              unanswered question
              {unanswered !== 1
                ? "s"
                : ""}.
            </p>

            <p className="text-zinc-600 mt-2">
              Are you sure you want to
              submit?
            </p>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() =>
                  setShowSubmitWarning(false)
                }
                className="flex-1 bg-[#e9ecef] py-3 rounded-xl font-bold"
              >
                Go Back
              </button>

              <button
                onClick={() => {
                  setShowSubmitWarning(
                    false
                  );
                  setSubmitted(true);
                }}
                className="flex-1 bg-[#ff9800] py-3 rounded-xl font-bold"
              >
                Submit
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}