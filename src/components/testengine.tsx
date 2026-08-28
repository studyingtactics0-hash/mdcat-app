"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

type SavedTestProgress = {
  version: number;
  title: string;
  subject: string;
  chapter: string;
  questions: Question[];
  selectedAnswers: (number | null)[];
  currentQuestion: number;
  timeLeft: number;
  savedAt: number;
};

type TestEngineProps = {
  questions: Question[];
  title: string;
  subject: string;
  chapter: string;
  timeLimit: number;
  shuffleBySubject?: boolean;

  // Optional:
  // If provided, a random selection of this many questions
  // will be taken from the question bank.
  questionCount?: number;
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

function prepareQuestions(
  questionBank: Question[],
  questionCount?: number,
  shuffleBySubject: boolean = false
): Question[] {
  let selectedQuestions: Question[];

  if (shuffleBySubject) {
    // Keep subjects in their original order,
    // but shuffle questions within each subject.

    // For the 180-question MDCAT mock test:
    // Biology = 81
    // Chemistry = 45
    // Physics = 36
    // English = 9
    // Logical Reasoning = 9

    const biology = questionBank.slice(0, 81);
    const chemistry = questionBank.slice(81, 126);
    const physics = questionBank.slice(126, 162);
    const english = questionBank.slice(162, 171);
    const logicalReasoning = questionBank.slice(171, 180);

    selectedQuestions = [
      ...shuffleArray(biology),
      ...shuffleArray(chemistry),
      ...shuffleArray(physics),
      ...shuffleArray(english),
      ...shuffleArray(logicalReasoning),
    ];

    // If questionCount is provided, take the requested number
    // without changing the subject order.
    if (
      questionCount &&
      questionCount < selectedQuestions.length
    ) {
      selectedQuestions = selectedQuestions.slice(
        0,
        questionCount
      );
    }
  } else {
    // Existing behavior for all normal chapter tests.
    selectedQuestions =
      questionCount &&
      questionCount < questionBank.length
        ? shuffleArray(questionBank).slice(0, questionCount)
        : shuffleArray(questionBank);
  }

  return selectedQuestions.map((question) => {
    const optionsWithAnswers = question.options.map(
      (option, index) => ({
        option,
        isCorrect: index === question.answer,
      })
    );

    // Options are still shuffled for every test.
    const shuffledOptions =
      shuffleArray(optionsWithAnswers);

    return {
      question: question.question,
      options: shuffledOptions.map(
        (item) => item.option
      ),
      answer: shuffledOptions.findIndex(
        (item) => item.isCorrect
      ),
    };
  });
}

export default function TestEngine({
  questions: questionBank,
  title,
  subject,
  chapter,
  timeLimit,
  questionCount,
  shuffleBySubject = false,
}: TestEngineProps) {
  const supabase = createClient();

  const resultSaved = useRef(false);

  const [mounted, setMounted] = useState(false);

  /*
   * =========================================================
   * SAVE / RESUME SYSTEM
   * =========================================================
   */

  /*
   * This key identifies a specific test.
   *
   * We include:
   * - subject
   * - chapter
   * - title
   * - question count
   *
   * This prevents progress from one test being loaded
   * into another test.
   */
  const progressKey = `studying_tactics_test_progress_${encodeURIComponent(
    `${subject}_${chapter}_${title}_${questionCount || "all"}`
  )}`;

  /*
   * "pending" means we are checking whether an unfinished
   * attempt exists.
   *
   * "new" means start a fresh test.
   *
   * "resume" means continue the saved test.
   */
  const [resumeDecision, setResumeDecision] = useState<
    "pending" | "new" | "resume"
  >("pending");

  const [savedProgress, setSavedProgress] =
    useState<SavedTestProgress | null>(null);

  const [questions, setQuestions] = useState<Question[]>([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState<(number | null)[]>([]);

  const [timeLeft, setTimeLeft] =
    useState(timeLimit * 60);

  const [submitted, setSubmitted] =
    useState(false);

  const [showSubmitWarning, setShowSubmitWarning] =
    useState(false);

  const [showReview, setShowReview] =
    useState(false);

  const [showReport, setShowReport] =
    useState(false);

  const [reportType, setReportType] =
    useState("");

  const [reportComment, setReportComment] =
    useState("");

  const [reportSubmitting, setReportSubmitting] =
    useState(false);

  const [reportedQuestions, setReportedQuestions] =
    useState<number[]>([]);

  /*
   * Used to make sure we don't accidentally overwrite
   * saved progress while the resume system is initializing.
   */
  const [saveReady, setSaveReady] = useState(false);

  /*
   * =========================================================
   * MOUNT
   * =========================================================
   */

  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * =========================================================
   * PREPARE QUESTIONS
   * =========================================================
   *
   * IMPORTANT:
   *
   * Questions are only randomly prepared for a NEW attempt.
   *
   * If a saved attempt exists, we will replace these questions
   * with the exact questions saved in localStorage.
   */

  useEffect(() => {
    const preparedQuestions = prepareQuestions(
      questionBank,
      questionCount,
      shuffleBySubject
    );

    setQuestions(preparedQuestions);

    setCurrentQuestion(0);

    setSelectedAnswers(
      Array(preparedQuestions.length).fill(null)
    );

    setTimeLeft(timeLimit * 60);

    setSaveReady(false);
    setResumeDecision("pending");
    setSavedProgress(null);
  }, [
    questionBank,
    questionCount,
    shuffleBySubject,
    timeLimit,
  ]);

  /*
   * =========================================================
   * CHECK FOR SAVED PROGRESS
   * =========================================================
   */

  useEffect(() => {
    if (!mounted) return;

    if (questions.length === 0) return;

    if (resumeDecision !== "pending") return;

    try {
      const saved =
        localStorage.getItem(progressKey);

      if (!saved) {
        /*
         * No previous attempt.
         * Start normally.
         */
        setResumeDecision("new");
        setSaveReady(true);
        return;
      }

      const parsed: SavedTestProgress =
        JSON.parse(saved);

      /*
       * Validate the saved progress before using it.
       *
       * This protects against corrupted/old localStorage data.
       */
      const isValid =
        parsed &&
        parsed.version === 1 &&
        parsed.title === title &&
        parsed.subject === subject &&
        parsed.chapter === chapter &&
        Array.isArray(parsed.questions) &&
        Array.isArray(parsed.selectedAnswers) &&
        parsed.questions.length === questions.length &&
        parsed.selectedAnswers.length ===
          questions.length &&
        typeof parsed.currentQuestion === "number" &&
        typeof parsed.timeLeft === "number";

      if (!isValid) {
        localStorage.removeItem(progressKey);

        setResumeDecision("new");
        setSaveReady(true);

        return;
      }

      /*
       * If time has already expired, don't offer
       * a resume for an expired test.
       */
      if (parsed.timeLeft <= 0) {
        localStorage.removeItem(progressKey);

        setResumeDecision("new");
        setSaveReady(true);

        return;
      }

      /*
       * We found a valid unfinished attempt.
       */
      setSavedProgress(parsed);
    } catch (error) {
      console.error(
        "Unable to read saved test progress:",
        error
      );

      localStorage.removeItem(progressKey);

      setResumeDecision("new");
      setSaveReady(true);
    }
  }, [
    mounted,
    questions.length,
    resumeDecision,
    progressKey,
    title,
    subject,
    chapter,
  ]);

  /*
   * =========================================================
   * RESUME SAVED TEST
   * =========================================================
   */

  const resumeSavedTest = () => {
    if (!savedProgress) return;

    /*
     * Restore the exact shuffled questions.
     */
    setQuestions(savedProgress.questions);

    /*
     * Restore all selected answers.
     */
    setSelectedAnswers(
      savedProgress.selectedAnswers
    );

    /*
     * Restore the exact question the student was on.
     */
    setCurrentQuestion(
      Math.min(
        Math.max(
          savedProgress.currentQuestion,
          0
        ),
        savedProgress.questions.length - 1
      )
    );

    /*
     * Restore remaining time.
     */
    setTimeLeft(
      Math.max(0, savedProgress.timeLeft)
    );

    setResumeDecision("resume");
    setSaveReady(true);

    setSavedProgress(null);
  };

  /*
   * =========================================================
   * START NEW TEST
   * =========================================================
   */

  const startNewTest = () => {
    /*
     * Delete the previous attempt first.
     */
    try {
      localStorage.removeItem(progressKey);
    } catch (error) {
      console.error(
        "Unable to clear old test progress:",
        error
      );
    }

    /*
     * We already have freshly prepared questions
     * from the question preparation effect.
     */
    setCurrentQuestion(0);

    setSelectedAnswers(
      Array(questions.length).fill(null)
    );

    setTimeLeft(timeLimit * 60);

    setSavedProgress(null);

    setResumeDecision("new");

    setSaveReady(true);
  };

  /*
   * =========================================================
   * SAVE TEST PROGRESS
   * =========================================================
   */

  const saveTestProgress = () => {
    /*
     * Never save after submission.
     */
    if (submitted) return;

    /*
     * Don't save before initialization is complete.
     */
    if (!saveReady) return;

    /*
     * Don't save while waiting for the user to choose
     * Resume or Restart.
     */
    if (resumeDecision === "pending") return;

    /*
     * Don't save if questions aren't ready.
     */
    if (questions.length === 0) return;

    /*
     * Don't save an already-expired test.
     */
    if (timeLeft <= 0) return;

    const progress: SavedTestProgress = {
      version: 1,
      title,
      subject,
      chapter,
      questions,
      selectedAnswers,
      currentQuestion,
      timeLeft,
      savedAt: Date.now(),
    };

    try {
      localStorage.setItem(
        progressKey,
        JSON.stringify(progress)
      );
    } catch (error) {
      /*
       * localStorage can fail in rare situations,
       * such as storage being disabled/full.
       *
       * We don't want this to crash the test.
       */
      console.error(
        "Unable to save test progress:",
        error
      );
    }
  };

  /*
   * =========================================================
   * AUTO-SAVE
   * =========================================================
   *
   * Saves whenever:
   * - student selects an answer
   * - student moves to another question
   * - timer changes
   *
   * Because the data is small, localStorage is suitable here.
   */

  useEffect(() => {
    if (!saveReady) return;

    if (submitted) return;

    if (resumeDecision === "pending") return;

    if (questions.length === 0) return;

    if (timeLeft <= 0) return;

    saveTestProgress();
  }, [
    selectedAnswers,
    currentQuestion,
    timeLeft,
    questions,
    saveReady,
    submitted,
    resumeDecision,
  ]);

  /*
   * =========================================================
   * EXTRA PERIODIC BACKUP
   * =========================================================
   *
   * This runs every 10 seconds as an additional safety net.
   */

  useEffect(() => {
    if (!saveReady) return;

    if (submitted) return;

    if (resumeDecision === "pending") return;

    if (questions.length === 0) return;

    const backupTimer = setInterval(() => {
      saveTestProgress();
    }, 10000);

    return () =>
      clearInterval(backupTimer);
  }, [
    saveReady,
    submitted,
    resumeDecision,
    questions,
    selectedAnswers,
    currentQuestion,
    timeLeft,
  ]);

  /*
   * =========================================================
   * SAVE WHEN LEAVING / CLOSING PAGE
   * =========================================================
   *
   * If the student:
   * - closes the tab
   * - refreshes
   * - navigates away
   *
   * the latest state is stored before leaving.
   */

  useEffect(() => {
    if (!saveReady) return;

    if (submitted) return;

    if (resumeDecision === "pending") return;

    if (questions.length === 0) return;

    const handleBeforeUnload = () => {
      saveTestProgress();
    };

    window.addEventListener(
      "beforeunload",
      handleBeforeUnload
    );

    return () => {
      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );
    };
  }, [
    saveReady,
    submitted,
    resumeDecision,
    questions,
    selectedAnswers,
    currentQuestion,
    timeLeft,
  ]);

  /*
   * =========================================================
   * TIMER
   * =========================================================
   */

  useEffect(() => {
    /*
     * Don't start the timer while the Resume popup
     * is waiting for the student's decision.
     */
    if (resumeDecision === "pending") return;

    if (submitted) return;

    if (!saveReady) return;

    if (timeLeft <= 0) {
      const saveAndSubmit = async () => {
        /*
         * Delete saved progress before submitting.
         */
        try {
          localStorage.removeItem(progressKey);
        } catch (error) {
          console.error(
            "Unable to clear test progress:",
            error
          );
        }

        await saveTestResult();

        setSubmitted(true);
      };

      saveAndSubmit();

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [
    timeLeft,
    submitted,
    resumeDecision,
    saveReady,
    progressKey,
  ]);

  /*
   * =========================================================
   * SELECT ANSWER
   * =========================================================
   */

  const selectAnswer = (optionIndex: number) => {
    const updatedAnswers = [...selectedAnswers];

    updatedAnswers[currentQuestion] =
      optionIndex;

    setSelectedAnswers(updatedAnswers);
  };

  /*
   * =========================================================
   * RESULTS
   * =========================================================
   */

  const calculateScore = () => {
    return questions.reduce(
      (score, question, index) => {
        return (
          score +
          (selectedAnswers[index] ===
          question.answer
            ? 1
            : 0)
        );
      },
      0
    );
  };

  /*
   * =========================================================
   * SAVE TEST RESULT
   * =========================================================
   */

  const saveTestResult = async () => {
    if (resultSaved.current) return;

    resultSaved.current = true;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.error(
        "No logged-in user. Test result not saved."
      );

      resultSaved.current = false;

      return;
    }

    const correctAnswers = calculateScore();

    const totalQuestions = questions.length;

    const scorePercentage =
      totalQuestions > 0
        ? Math.round(
            (correctAnswers /
              totalQuestions) *
              100
          )
        : 0;

    const { error } = await supabase
      .from("test_results")
      .insert({
        user_id: user.id,
        student_name:
          user.user_metadata?.full_name ||
          "Unknown Student",
        test_title: title,
        subject: subject,
        chapter: chapter,
        total_questions: totalQuestions,
        correct_answers: correctAnswers,
        score_percentage: scorePercentage,
      });

    if (error) {
      console.error(
        "SUPABASE TEST RESULT ERROR:",
        error
      );

      alert(
        `Supabase error: ${error.message}`
      );

      resultSaved.current = false;
    } else {
      console.log(
        "Test result saved successfully."
      );

      alert(
        "Test result saved successfully!"
      );
    }
  };

  /*
   * =========================================================
   * CLEAR SAVED PROGRESS
   * =========================================================
   */

  const clearSavedProgress = () => {
    try {
      localStorage.removeItem(progressKey);
    } catch (error) {
      console.error(
        "Unable to clear saved test progress:",
        error
      );
    }
  };

  /*
   * =========================================================
   * SUBMIT TEST
   * =========================================================
   */

  const submitTest = async () => {
    /*
     * Remove the saved attempt immediately.
     *
     * The test is now considered completed.
     */
    clearSavedProgress();

    await saveTestResult();

    setSubmitted(true);
  };

  /*
   * =========================================================
   * QUESTION REPORT
   * =========================================================
   */

  const submitQuestionReport = async () => {
    if (!reportType) {
      alert(
        "Please select a reason for reporting this question."
      );

      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert(
        "Please log in to report a question."
      );

      return;
    }

    setReportSubmitting(true);

    const { error } = await supabase
      .from("question_reports")
      .insert({
        user_id: user.id,
        student_name:
          user.user_metadata?.full_name ||
          "Unknown Student",
        question_number:
          currentQuestion + 1,
        question_text:
          question.question,
        subject: subject,
        chapter: chapter,
        test_title: title,
        report_type: reportType,
        comment:
          reportComment.trim() || null,
      });

    setReportSubmitting(false);

    if (error) {
      console.error(
        "QUESTION REPORT ERROR:",
        error
      );

      alert(
        `Unable to submit report: ${error.message}`
      );

      return;
    }

    setReportedQuestions((previous) => [
      ...previous,
      currentQuestion,
    ]);

    setShowReport(false);

    setReportType("");

    setReportComment("");

    alert(
      "Thank you. Your report has been submitted."
    );
  };

  /*
   * =========================================================
   * HELPERS
   * =========================================================
   */

  const calculateUnanswered = () => {
    return selectedAnswers.filter(
      (answer) => answer === null
    ).length;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(
      seconds / 60
    );

    const remainingSeconds =
      seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const question =
    questions[currentQuestion];

  const unanswered =
    calculateUnanswered();

  /*
   * =========================================================
   * LOADING SCREEN
   * =========================================================
   */

  if (
    !mounted ||
    questions.length === 0
  ) {
    return (
      <main className="min-h-screen bg-[#0b1e39] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="text-3xl">
            📝
          </div>

          <p className="mt-3 font-bold">
            Preparing your test...
          </p>
        </div>
      </main>
    );
  }

  /*
   * =========================================================
   * RESUME TEST SCREEN
   * =========================================================
   */

  if (
    resumeDecision === "pending" &&
    savedProgress
  ) {
    const answeredCount =
      savedProgress.selectedAnswers.filter(
        (answer) => answer !== null
      ).length;

    const savedAtText =
      savedProgress.savedAt
        ? new Date(
            savedProgress.savedAt
          ).toLocaleString()
        : "";

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
          <div className="max-w-lg mx-auto">
            <div className="bg-white text-[#0b1e39] rounded-3xl shadow-2xl p-8 text-center">
              <div className="text-6xl">
                ⏸️
              </div>

              <h1 className="text-3xl font-black mt-5">
                Resume Test?
              </h1>

              <p className="text-zinc-600 mt-3">
                You have an unfinished test.
                Your answers and remaining
                time have been saved.
              </p>

              {/* TEST NAME */}

              <div className="bg-[#f4f6f8] rounded-2xl p-5 mt-6 text-left">
                <p className="text-xs font-black uppercase text-[#ff9800]">
                  {subject} • {chapter}
                </p>

                <h2 className="font-black text-xl mt-1">
                  {title}
                </h2>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-zinc-500">
                      Progress
                    </p>

                    <p className="font-black text-lg">
                      {answeredCount}/
                      {
                        savedProgress
                          .questions.length
                      }
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-zinc-500">
                      Time Left
                    </p>

                    <p className="font-black text-lg">
                      {formatTime(
                        savedProgress.timeLeft
                      )}
                    </p>
                  </div>
                </div>

                {savedAtText && (
                  <p className="text-xs text-zinc-500 mt-4">
                    Last saved:{" "}
                    {savedAtText}
                  </p>
                )}
              </div>

              {/* BUTTONS */}

              <div className="flex flex-col gap-3 mt-7">
                <button
                  onClick={
                    resumeSavedTest
                  }
                  className="w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-black py-4 rounded-xl transition"
                >
                  Resume Test
                </button>

                <button
                  onClick={
                    startNewTest
                  }
                  className="w-full bg-[#0b1e39] hover:bg-[#142b4d] text-white font-bold py-4 rounded-xl transition"
                >
                  Restart Test
                </button>
              </div>

              <p className="text-xs text-zinc-500 mt-5">
                Restarting will permanently
                delete your saved progress
                for this attempt.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /*
   * =========================================================
   * RESULT SCREEN
   * =========================================================
   */

  if (submitted) {
    const score = calculateScore();

    const incorrect =
      questions.length -
      score -
      unanswered;

    const percentage =
      questions.length > 0
        ? Math.round(
            (score /
              questions.length) *
              100
          )
        : 0;

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
                    {score}/
                    {questions.length}
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
                    (
                      question,
                      index
                    ) => {
                      const selected =
                        selectedAnswers[
                          index
                        ];

                      const isCorrect =
                        selected ===
                        question.answer;

                      const isUnanswered =
                        selected ===
                        null;

                      return (
                        <div
                          key={index}
                          className="bg-white text-[#0b1e39] rounded-2xl p-6"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <h2 className="font-bold text-lg">
                              Q{index + 1}.{" "}
                              {
                                question.question
                              }
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

  /*
   * =========================================================
   * TEST SCREEN
   * =========================================================
   */

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

            {/* SAVE STATUS */}

            <div className="mt-5 text-xs text-zinc-400 text-right">
              ✓ Progress saved automatically
            </div>

            {/* REPORT QUESTION */}

            <div className="mt-6 pt-5 border-t border-zinc-200">
              {!reportedQuestions.includes(
                currentQuestion
              ) ? (
                <button
                  onClick={() =>
                    setShowReport(true)
                  }
                  className="text-sm font-bold text-zinc-500 hover:text-red-600 transition"
                >
                  🚩 Report Question
                </button>
              ) : (
                <div className="text-sm font-bold text-green-600">
                  ✓ Question reported
                </div>
              )}
            </div>

            {/* NAVIGATION */}

            <div className="flex justify-between gap-4 mt-10">
              <button
                onClick={() =>
                  setCurrentQuestion(
                    (q) =>
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
                      submitTest();
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
              {questions.map(
                (_, index) => {
                  const answered =
                    selectedAnswers[
                      index
                    ] !== null;

                  return (
                    <button
                      key={index}
                      onClick={() =>
                        setCurrentQuestion(
                          index
                        )
                      }
                      className={`w-10 h-10 rounded-lg font-bold text-sm ${
                        index ===
                        currentQuestion
                          ? "bg-[#ff9800] text-[#0b1e39]"
                          : answered
                          ? "bg-white text-[#0b1e39]"
                          : "bg-[#243b60] text-white"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                }
              )}
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
              <strong>
                {unanswered}
              </strong>{" "}
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
              {/* GO BACK */}

              <button
                onClick={() =>
                  setShowSubmitWarning(
                    false
                  )
                }
                className="flex-1 bg-[#e9ecef] py-3 rounded-xl font-bold"
              >
                Go Back
              </button>

              {/* SUBMIT */}

              <button
                onClick={async () => {
                  setShowSubmitWarning(
                    false
                  );

                  await submitTest();
                }}
                className="flex-1 bg-[#ff9800] py-3 rounded-xl font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REPORT QUESTION POPUP */}

      {showReport && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">
          <div className="bg-white text-[#0b1e39] rounded-2xl p-7 max-w-lg w-full shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">
                  Report Question
                </h2>

                <p className="text-zinc-600 mt-2 text-sm">
                  Tell us what seems wrong with
                  this question.
                </p>
              </div>

              <button
                onClick={() => {
                  setShowReport(false);
                  setReportType("");
                  setReportComment("");
                }}
                className="text-zinc-400 hover:text-zinc-700 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* REPORT OPTIONS */}

            <div className="mt-6 space-y-3">
              <label className="flex items-center gap-3 border-2 border-zinc-200 rounded-xl p-4 cursor-pointer hover:border-[#ff9800]">
                <input
                  type="radio"
                  name="reportType"
                  value="Answer key is wrong"
                  checked={
                    reportType ===
                    "Answer key is wrong"
                  }
                  onChange={(e) =>
                    setReportType(
                      e.target.value
                    )
                  }
                  className="w-4 h-4"
                />

                <span className="font-medium">
                  Answer key is wrong
                </span>
              </label>

              <label className="flex items-center gap-3 border-2 border-zinc-200 rounded-xl p-4 cursor-pointer hover:border-[#ff9800]">
                <input
                  type="radio"
                  name="reportType"
                  value="Out of syllabus"
                  checked={
                    reportType ===
                    "Out of syllabus"
                  }
                  onChange={(e) =>
                    setReportType(
                      e.target.value
                    )
                  }
                  className="w-4 h-4"
                />

                <span className="font-medium">
                  Question is out of syllabus
                </span>
              </label>

              <label className="flex items-center gap-3 border-2 border-zinc-200 rounded-xl p-4 cursor-pointer hover:border-[#ff9800]">
                <input
                  type="radio"
                  name="reportType"
                  value="Wrong chapter"
                  checked={
                    reportType ===
                    "Wrong chapter"
                  }
                  onChange={(e) =>
                    setReportType(
                      e.target.value
                    )
                  }
                  className="w-4 h-4"
                />

                <span className="font-medium">
                  Question belongs to another
                  chapter
                </span>
              </label>

              <label className="flex items-center gap-3 border-2 border-zinc-200 rounded-xl p-4 cursor-pointer hover:border-[#ff9800]">
                <input
                  type="radio"
                  name="reportType"
                  value="Other"
                  checked={
                    reportType === "Other"
                  }
                  onChange={(e) =>
                    setReportType(
                      e.target.value
                    )
                  }
                  className="w-4 h-4"
                />

                <span className="font-medium">
                  Other issue
                </span>
              </label>
            </div>

            {/* COMMENT */}

            <div className="mt-5">
              <label className="block text-sm font-bold mb-2">
                Additional details{" "}
                <span className="text-zinc-400 font-normal">
                  (optional)
                </span>
              </label>

              <textarea
                value={reportComment}
                onChange={(e) =>
                  setReportComment(
                    e.target.value
                  )
                }
                placeholder="Explain the problem if needed..."
                rows={4}
                className="w-full border-2 border-zinc-200 rounded-xl p-3 outline-none focus:border-[#ff9800] resize-none"
              />
            </div>

            {/* BUTTONS */}

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowReport(false);
                  setReportType("");
                  setReportComment("");
                }}
                className="flex-1 bg-[#e9ecef] py-3 rounded-xl font-bold"
              >
                Cancel
              </button>

              <button
                onClick={
                  submitQuestionReport
                }
                disabled={
                  reportSubmitting
                }
                className="flex-1 bg-[#ff9800] py-3 rounded-xl font-bold disabled:opacity-50"
              >
                {reportSubmitting
                  ? "Submitting..."
                  : "Submit Report"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}