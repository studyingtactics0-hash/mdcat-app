"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type QuestionOption = {
  text?: string;
  image?: string;
};

type Question = {
  question: string;
  image?: string;
  options: (string | QuestionOption)[];
  answer: number;
};

type SavedTestProgress = {
  version: 2;
  title: string;
  subject: string;
  chapter: string;
  questions: Question[];
  selectedAnswers: (number | null)[];
  firstAnswers: (number | null)[];
  wrongAttempts: number[][];
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
  questionCount?: number;
};

/* =========================================================
   SHUFFLE
   ========================================================= */

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

/* =========================================================
   NORMALIZE OPTION
   ========================================================= */

function normalizeOption(
  option: string | QuestionOption
): QuestionOption {
  if (typeof option === "string") {
    return {
      text: option,
    };
  }

  return option;
}

/* =========================================================
   PREPARE QUESTIONS
   ========================================================= */

function prepareQuestions(
  questionBank: Question[],
  questionCount?: number,
  shuffleBySubject = false
): Question[] {
  let selectedQuestions: Question[];

  if (shuffleBySubject) {
    /*
      MDCAT structure:

      Biology = 81
      Chemistry = 45
      Physics = 36
      English = 9
      Logical Reasoning = 9
    */

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

    if (
      questionCount !== undefined &&
      questionCount > 0 &&
      questionCount < selectedQuestions.length
    ) {
      selectedQuestions = selectedQuestions.slice(
        0,
        questionCount
      );
    }
  } else {
    if (
      questionCount !== undefined &&
      questionCount > 0 &&
      questionCount < questionBank.length
    ) {
      selectedQuestions = shuffleArray(questionBank).slice(
        0,
        questionCount
      );
    } else {
      selectedQuestions = shuffleArray(questionBank);
    }
  }

  /*
    Shuffle options while preserving the correct answer.
  */

  return selectedQuestions.map((question) => {
    const optionsWithAnswers = question.options.map(
      (option, index) => ({
        option: normalizeOption(option),
        isCorrect: index === question.answer,
      })
    );

    const shuffledOptions = shuffleArray(
      optionsWithAnswers
    );

    return {
      question: question.question,
      image: question.image,
      options: shuffledOptions.map(
        (item) => item.option
      ),
      answer: shuffledOptions.findIndex(
        (item) => item.isCorrect
      ),
    };
  });
}

/* =========================================================
   TEST ENGINE
   ========================================================= */

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
  const initializedTestKey = useRef<string | null>(null);

  const [mounted, setMounted] = useState(false);

  const [resumeDecision, setResumeDecision] = useState<
    "pending" | "new" | "resume"
  >("pending");

  const [savedProgress, setSavedProgress] =
    useState<SavedTestProgress | null>(null);

  const [questions, setQuestions] =
    useState<Question[]>([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  /*
    selectedAnswers:
    The student's CURRENT/latest selection.

    firstAnswers:
    The FIRST answer the student gave.
    This is what determines the score.
  */

  const [selectedAnswers, setSelectedAnswers] =
    useState<(number | null)[]>([]);

  const [firstAnswers, setFirstAnswers] =
    useState<(number | null)[]>([]);

  /*
    wrongAttempts[index] contains every option index
    that the student clicked incorrectly for that question.

    These remain red permanently during the attempt.
  */

  const [wrongAttempts, setWrongAttempts] =
    useState<number[][]>([]);

  const [timeLeft, setTimeLeft] =
    useState(timeLimit * 60);

  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
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

  const [saveReady, setSaveReady] =
    useState(false);

  const [showFireworks, setShowFireworks] =
    useState(false);

  /* =========================================================
     PROGRESS KEY
     ========================================================= */

  const progressKey =
    `studying_tactics_test_progress_${encodeURIComponent(
      `${subject}_${chapter}_${title}_${questionCount || "all"}`
    )}`;

  /* =========================================================
     MOUNT
     ========================================================= */

  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================================================
     PREPARE TEST
     ========================================================= */

  useEffect(() => {
    const testKey =
      `${subject}|${chapter}|${title}|${
        questionCount || "all"
      }|${timeLimit}`;

    if (initializedTestKey.current === testKey) {
      return;
    }

    initializedTestKey.current = testKey;

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

    setFirstAnswers(
      Array(preparedQuestions.length).fill(null)
    );

    setWrongAttempts(
      Array.from(
        { length: preparedQuestions.length },
        () => []
      )
    );

    setTimeLeft(timeLimit * 60);

    setSaveReady(false);

    setResumeDecision("pending");

    setSavedProgress(null);

    setSubmitted(false);

    setSubmitting(false);

    setShowSubmitWarning(false);

    setShowReview(false);

    setShowFireworks(false);

    resultSaved.current = false;
  }, [
    subject,
    chapter,
    title,
    questionCount,
    timeLimit,
    questionBank,
    shuffleBySubject,
  ]);

  /* =========================================================
     CHECK SAVED PROGRESS
     ========================================================= */

  useEffect(() => {
    if (!mounted) return;
    if (questions.length === 0) return;
    if (resumeDecision !== "pending") return;

    try {
      const saved =
        localStorage.getItem(progressKey);

      if (!saved) {
        setResumeDecision("new");
        setSaveReady(true);
        return;
      }

      const parsed = JSON.parse(saved);

      const basicValid =
        parsed &&
        (parsed.version === 1 ||
          parsed.version === 2) &&
        parsed.title === title &&
        parsed.subject === subject &&
        parsed.chapter === chapter &&
        Array.isArray(parsed.questions) &&
        Array.isArray(parsed.selectedAnswers) &&
        parsed.questions.length ===
          questions.length &&
        parsed.selectedAnswers.length ===
          questions.length &&
        typeof parsed.currentQuestion ===
          "number" &&
        typeof parsed.timeLeft ===
          "number";

      if (!basicValid) {
        localStorage.removeItem(progressKey);

        setResumeDecision("new");
        setSaveReady(true);

        return;
      }

      /* =====================================================
         CLEAN CURRENT ANSWERS
         ===================================================== */

      const cleanedAnswers =
        parsed.selectedAnswers.map(
          (
            answer: number | null,
            index: number
          ) => {
            if (answer === null) {
              return null;
            }

            const optionCount =
              parsed.questions[index]?.options
                ?.length ?? 0;

            if (
              typeof answer !== "number" ||
              answer < 0 ||
              answer >= optionCount
            ) {
              return null;
            }

            return answer;
          }
        );

      parsed.selectedAnswers =
        cleanedAnswers;

      /* =====================================================
         FIRST ANSWERS

         Version 1 did not have firstAnswers.

         For old saved attempts, we treat the old selected
         answer as the first answer.
         ===================================================== */

      let cleanedFirstAnswers:
        (number | null)[];

      if (
        parsed.version === 2 &&
        Array.isArray(parsed.firstAnswers) &&
        parsed.firstAnswers.length ===
          questions.length
      ) {
        cleanedFirstAnswers =
          parsed.firstAnswers.map(
            (
              answer: number | null,
              index: number
            ) => {
              if (answer === null) {
                return null;
              }

              const optionCount =
                parsed.questions[index]?.options
                  ?.length ?? 0;

              if (
                typeof answer !== "number" ||
                answer < 0 ||
                answer >= optionCount
              ) {
                return null;
              }

              return answer;
            }
          );
      } else {
        cleanedFirstAnswers =
          parsed.selectedAnswers.map(
            (
              answer: number | null,
              index: number
            ) => {
              if (answer === null) {
                return null;
              }

              const optionCount =
                parsed.questions[index]?.options
                  ?.length ?? 0;

              if (
                typeof answer !== "number" ||
                answer < 0 ||
                answer >= optionCount
              ) {
                return null;
              }

              return answer;
            }
          );
      }

      parsed.firstAnswers =
        cleanedFirstAnswers;

      /* =====================================================
         WRONG ATTEMPTS
         ===================================================== */

      let cleanedWrongAttempts:
        number[][];

      if (
        parsed.version === 2 &&
        Array.isArray(parsed.wrongAttempts) &&
        parsed.wrongAttempts.length ===
          questions.length
      ) {
        cleanedWrongAttempts =
          parsed.wrongAttempts.map(
            (
              attempts: unknown,
              index: number
            ) => {
              if (!Array.isArray(attempts)) {
                return [];
              }

              const optionCount =
                parsed.questions[index]?.options
                  ?.length ?? 0;

              return attempts.filter(
                (optionIndex) =>
                  typeof optionIndex ===
                    "number" &&
                  optionIndex >= 0 &&
                  optionIndex < optionCount
              );
            }
          );
      } else {
        cleanedWrongAttempts =
          Array.from(
            {
              length: questions.length,
            },
            () => []
          );
      }

      parsed.wrongAttempts =
        cleanedWrongAttempts;

      /* =====================================================
         EXPIRED ATTEMPT
         ===================================================== */

      if (parsed.timeLeft <= 0) {
        localStorage.removeItem(progressKey);

        setResumeDecision("new");
        setSaveReady(true);

        return;
      }

      setSavedProgress({
        version: 2,
        title: parsed.title,
        subject: parsed.subject,
        chapter: parsed.chapter,
        questions: parsed.questions,
        selectedAnswers:
          parsed.selectedAnswers,
        firstAnswers:
          parsed.firstAnswers,
        wrongAttempts:
          parsed.wrongAttempts,
        currentQuestion:
          parsed.currentQuestion,
        timeLeft: parsed.timeLeft,
        savedAt:
          typeof parsed.savedAt ===
          "number"
            ? parsed.savedAt
            : Date.now(),
      });
    } catch (error) {
      console.error(
        "Unable to read saved test progress:",
        error
      );

      try {
        localStorage.removeItem(
          progressKey
        );
      } catch {
        // Ignore storage errors.
      }

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

  /* =========================================================
     RESUME SAVED TEST
     ========================================================= */

  const resumeSavedTest = () => {
    if (!savedProgress) return;

    setQuestions(
      savedProgress.questions
    );

    setSelectedAnswers(
      savedProgress.selectedAnswers
    );

    setFirstAnswers(
      savedProgress.firstAnswers
    );

    setWrongAttempts(
      savedProgress.wrongAttempts
    );

    setCurrentQuestion(
      Math.min(
        Math.max(
          savedProgress.currentQuestion,
          0
        ),
        Math.max(
          savedProgress.questions.length - 1,
          0
        )
      )
    );

    setTimeLeft(
      Math.max(
        0,
        savedProgress.timeLeft
      )
    );

    setResumeDecision("resume");

    setSaveReady(true);

    setSavedProgress(null);
  };

  /* =========================================================
     START NEW TEST
     ========================================================= */

  const startNewTest = () => {
    try {
      localStorage.removeItem(
        progressKey
      );
    } catch (error) {
      console.error(
        "Unable to clear old test progress:",
        error
      );
    }

    setCurrentQuestion(0);

    setSelectedAnswers(
      Array(questions.length).fill(null)
    );

    setFirstAnswers(
      Array(questions.length).fill(null)
    );

    setWrongAttempts(
      Array.from(
        {
          length: questions.length,
        },
        () => []
      )
    );

    setTimeLeft(
      timeLimit * 60
    );

    setSavedProgress(null);

    setResumeDecision("new");

    setSaveReady(true);

    setSubmitted(false);

    setSubmitting(false);

    setShowReview(false);

    resultSaved.current = false;
  };

  /* =========================================================
     SAVE TEST PROGRESS
     ========================================================= */

  const saveTestProgress = () => {
    if (submitted) return;
    if (!saveReady) return;
    if (resumeDecision === "pending") return;
    if (questions.length === 0) return;
    if (timeLeft <= 0) return;

    const cleanSelectedAnswers =
      selectedAnswers.map(
        (answer, index) => {
          if (answer === null) {
            return null;
          }

          const optionCount =
            questions[index]?.options
              ?.length ?? 0;

          if (
            typeof answer !== "number" ||
            answer < 0 ||
            answer >= optionCount
          ) {
            return null;
          }

          return answer;
        }
      );

    const cleanFirstAnswers =
      firstAnswers.map(
        (answer, index) => {
          if (answer === null) {
            return null;
          }

          const optionCount =
            questions[index]?.options
              ?.length ?? 0;

          if (
            typeof answer !== "number" ||
            answer < 0 ||
            answer >= optionCount
          ) {
            return null;
          }

          return answer;
        }
      );

    const cleanWrongAttempts =
      wrongAttempts.map(
        (attempts, index) => {
          const optionCount =
            questions[index]?.options
              ?.length ?? 0;

          return attempts.filter(
            (optionIndex) =>
              typeof optionIndex ===
                "number" &&
              optionIndex >= 0 &&
              optionIndex < optionCount
          );
        }
      );

    const progress: SavedTestProgress = {
      version: 2,
      title,
      subject,
      chapter,
      questions,
      selectedAnswers:
        cleanSelectedAnswers,
      firstAnswers:
        cleanFirstAnswers,
      wrongAttempts:
        cleanWrongAttempts,
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
      console.error(
        "Unable to save test progress:",
        error
      );
    }
  };

  /* =========================================================
     AUTO SAVE
     ========================================================= */

  useEffect(() => {
    if (!saveReady) return;
    if (submitted) return;
    if (resumeDecision === "pending") return;
    if (questions.length === 0) return;
    if (timeLeft <= 0) return;

    saveTestProgress();
  }, [
    selectedAnswers,
    firstAnswers,
    wrongAttempts,
    currentQuestion,
    timeLeft,
    questions,
    saveReady,
    submitted,
    resumeDecision,
  ]);

  /* =========================================================
     PERIODIC BACKUP
     ========================================================= */

  useEffect(() => {
    if (!saveReady) return;
    if (submitted) return;
    if (resumeDecision === "pending") return;
    if (questions.length === 0) return;

    const backupTimer =
      setInterval(() => {
        saveTestProgress();
      }, 10000);

    return () => {
      clearInterval(
        backupTimer
      );
    };
  }, [
    saveReady,
    submitted,
    resumeDecision,
    questions,
    selectedAnswers,
    firstAnswers,
    wrongAttempts,
    currentQuestion,
    timeLeft,
  ]);

  /* =========================================================
     SAVE WHEN LEAVING PAGE
     ========================================================= */

  useEffect(() => {
    if (!saveReady) return;
    if (submitted) return;
    if (resumeDecision === "pending") return;
    if (questions.length === 0) return;

    const handleBeforeUnload =
      () => {
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
    firstAnswers,
    wrongAttempts,
    currentQuestion,
    timeLeft,
  ]);

  /* =========================================================
     TIMER
     ========================================================= */

  useEffect(() => {
    if (resumeDecision === "pending") {
      return;
    }

    if (submitted) {
      return;
    }

    if (!saveReady) {
      return;
    }

    if (timeLeft <= 0) {
      const saveAndSubmit =
        async () => {
          /*
            IMPORTANT:
            Save result FIRST.

            Only remove localStorage after Supabase
            successfully saves the result.
          */

          const success =
            await saveTestResult();

          if (!success) {
            return;
          }

          try {
            localStorage.removeItem(
              progressKey
            );
          } catch (error) {
            console.error(
              "Unable to clear test progress:",
              error
            );
          }

          setSubmitted(true);
        };

      saveAndSubmit();

      return;
    }

    const timer =
      setInterval(() => {
        setTimeLeft(
          (time) => {
            if (time <= 1) {
              return 0;
            }

            return time - 1;
          }
        );
      }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [
    timeLeft,
    submitted,
    resumeDecision,
    saveReady,
    progressKey,
  ]);

  /* =========================================================
     SELECT ANSWER
     ========================================================= */

  const selectAnswer = (
    optionIndex: number
  ) => {
    if (submitted) return;

    const current =
      questions[currentQuestion];

    if (!current) return;

    const optionCount =
      current.options.length;

    if (
      optionIndex < 0 ||
      optionIndex >= optionCount
    ) {
      return;
    }

    const isCorrect =
      optionIndex === current.answer;

    /*
      FIRST ANSWER

      We only set firstAnswers if this question
      has never been answered before.
    */

    setFirstAnswers(
      (previous) => {
        const updated = [...previous];

        if (
          updated[currentQuestion] ===
          null ||
          updated[currentQuestion] ===
            undefined
        ) {
          updated[currentQuestion] =
            optionIndex;
        }

        return updated;
      }
    );

    /*
      CURRENT/LATEST ANSWER

      This can change whenever the student clicks
      another option.
    */

    setSelectedAnswers(
      (previous) => {
        const updated = [...previous];

        updated[currentQuestion] =
          optionIndex;

        return updated;
      }
    );

    /*
      WRONG ATTEMPT

      Every wrong option clicked gets permanently
      recorded.

      Example:

      Student clicks B -> B becomes red.
      Student clicks C -> C becomes red too.
      Student clicks A -> A is green.

      B and C remain red.
    */

    if (!isCorrect) {
      setWrongAttempts(
        (previous) => {
          const updated =
            previous.map(
              (attempts) => [
                ...attempts,
              ]
            );

          if (
            !updated[currentQuestion]
          ) {
            updated[currentQuestion] =
              [];
          }

          if (
            !updated[
              currentQuestion
            ].includes(optionIndex)
          ) {
            updated[
              currentQuestion
            ].push(optionIndex);
          }

          return updated;
        }
      );

      return;
    }

    /*
      Correct answer selected.

      Show fireworks.
    */

    setShowFireworks(true);

    window.setTimeout(() => {
      setShowFireworks(false);
    }, 900);
  };

  /* =========================================================
     SCORE
     ========================================================= */

  const calculateScore = () => {
    return questions.reduce(
      (
        score,
        question,
        index
      ) => {
        /*
          CRITICAL:

          Score is based ONLY on firstAnswers.

          Changing the answer later does NOT change
          the score.
        */

        return (
          score +
          (firstAnswers[index] ===
          question.answer
            ? 1
            : 0)
        );
      },
      0
    );
  };

  /* =========================================================
     SAVE TEST RESULT
     ========================================================= */

  const saveTestResult =
    async (): Promise<boolean> => {
      if (resultSaved.current) {
        return true;
      }

      resultSaved.current = true;

      try {
        const {
          data: { user },
        } =
          await supabase.auth.getUser();

        if (!user) {
          console.error(
            "No logged-in user. Test result not saved."
          );

          resultSaved.current =
            false;

          alert(
            "Please log in before submitting the test."
          );

          return false;
        }

        const correctAnswers =
          calculateScore();

        const totalQuestions =
          questions.length;

        const scorePercentage =
          totalQuestions > 0
            ? Math.round(
                (correctAnswers /
                  totalQuestions) *
                  100
              )
            : 0;

        const { error } =
          await supabase
            .from("test_results")
            .insert({
              user_id: user.id,
              student_name:
                user.user_metadata
                  ?.full_name ||
                "Unknown Student",
              test_title: title,
              subject,
              chapter,
              total_questions:
                totalQuestions,
              correct_answers:
                correctAnswers,
              score_percentage:
                scorePercentage,
            });

        if (error) {
          console.error(
            "SUPABASE TEST RESULT ERROR:",
            error
          );

          resultSaved.current =
            false;

          alert(
            `Unable to save test result: ${error.message}`
          );

          return false;
        }

        console.log(
          "Test result saved successfully."
        );

        return true;
      } catch (error) {
        console.error(
          "Unexpected error while saving test result:",
          error
        );

        resultSaved.current =
          false;

        alert(
          "Unable to save the test result. Please try again."
        );

        return false;
      }
    };

  /* =========================================================
     CLEAR SAVED PROGRESS
     ========================================================= */

  const clearSavedProgress =
    () => {
      try {
        localStorage.removeItem(
          progressKey
        );
      } catch (error) {
        console.error(
          "Unable to clear test progress:",
          error
        );
      }
    };

  /* =========================================================
     SUBMIT TEST
     ========================================================= */

  const submitTest = async () => {
    if (submitting) return;
    if (submitted) return;

    setSubmitting(true);

    const success =
      await saveTestResult();

    if (!success) {
      setSubmitting(false);
      return;
    }

    clearSavedProgress();

    setSubmitted(true);

    setSubmitting(false);
  };

  /* =========================================================
     REPORT QUESTION
     ========================================================= */

  const submitQuestionReport =
    async () => {
      if (!reportType) {
        alert(
          "Please select a reason for reporting this question."
        );

        return;
      }

      if (
        reportSubmitting
      ) {
        return;
      }

      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      if (!user) {
        alert(
          "Please log in to report a question."
        );

        return;
      }

      setReportSubmitting(true);

      try {
        const { error } =
          await supabase
            .from("question_reports")
            .insert({
              user_id: user.id,
              student_name:
                user.user_metadata
                  ?.full_name ||
                "Unknown Student",
              question_number:
                currentQuestion + 1,
              question_text:
                questions[
                  currentQuestion
                ]?.question || "",
              subject,
              chapter,
              test_title: title,
              report_type: reportType,
              comment:
                reportComment.trim() ||
                null,
            });

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

        setReportedQuestions(
          (previous) => {
            if (
              previous.includes(
                currentQuestion
              )
            ) {
              return previous;
            }

            return [
              ...previous,
              currentQuestion,
            ];
          }
        );

        setShowReport(false);
        setReportType("");
        setReportComment("");

        alert(
          "Thank you. Your report has been submitted."
        );
      } finally {
        setReportSubmitting(false);
      }
    };

  /* =========================================================
     HELPERS
     ========================================================= */

  const calculateUnanswered =
    () => {
      /*
        Unanswered is based on CURRENT answer.

        This is only for navigation/submission UI.

        Score itself uses firstAnswers.
      */

      return selectedAnswers.filter(
        (answer) => answer === null
      ).length;
    };

  const formatTime = (
    seconds: number
  ) => {
    const minutes =
      Math.floor(seconds / 60);

    const remainingSeconds =
      seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const question =
    questions[currentQuestion];

  const selectedOption =
    selectedAnswers[currentQuestion];

  const unanswered =
    calculateUnanswered();

  /* =========================================================
     LOADING
     ========================================================= */

  if (
    !mounted ||
    questions.length === 0 ||
    !question
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

  /* =========================================================
     RESUME SCREEN
     ========================================================= */

  if (
    resumeDecision === "pending" &&
    savedProgress
  ) {
    const answeredCount =
      savedProgress.selectedAnswers.filter(
        (answer) =>
          answer !== null
      ).length;

    const savedAtText =
      savedProgress.savedAt
        ? new Date(
            savedProgress.savedAt
          ).toLocaleString()
        : "";

    return (
      <main className="min-h-screen bg-[#0b1e39] text-white">
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
                You have an unfinished
                test. Your answers and
                remaining time have been
                saved.
              </p>

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

              <div className="flex flex-col gap-3 mt-7">
                <button
                  type="button"
                  onClick={
                    resumeSavedTest
                  }
                  className="w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-black py-4 rounded-xl transition"
                >
                  Resume Test
                </button>

                <button
                  type="button"
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

  /* =========================================================
     RESULT SCREEN
     ========================================================= */

  if (submitted) {
    const score =
      calculateScore();

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

                <div className="mt-8">
                  <div className="text-6xl font-black text-[#ff9800]">
                    {score}/
                    {questions.length}
                  </div>

                  <p className="text-xl font-bold mt-2">
                    {percentage}%
                  </p>
                </div>

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

                <div className="mt-6 rounded-xl bg-[#fff8e8] border border-[#ff9800]/30 px-4 py-3 text-sm text-[#7a4b00] text-left">
                  <strong>
                    Important:
                  </strong>{" "}
                  Your score is based on
                  your first answer to each
                  question. Changing an answer
                  later does not change your
                  score.
                </div>

                <div className="flex flex-col md:flex-row gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() =>
                      setShowReview(true)
                    }
                    className="flex-1 bg-[#0b1e39] text-white font-bold py-3 rounded-xl hover:bg-[#142b4d]"
                  >
                    Review Answers
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      window.location.reload()
                    }
                    className="flex-1 bg-[#ff9800] hover:bg-[#e68900] font-bold py-3 rounded-xl"
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
                    type="button"
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
                      reviewQuestion,
                      index
                    ) => {
                      /*
                        Review uses FIRST ANSWER,
                        because that is what was graded.
                      */

                      const selected =
                        firstAnswers[index];

                      const isCorrect =
                        selected ===
                        reviewQuestion.answer;

                      const isUnanswered =
                        selected === null;

                      return (
                        <div
                          key={`review-question-${index}`}
                          className="bg-white text-[#0b1e39] rounded-2xl p-6"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <h2 className="font-bold text-lg">
                              Q{index + 1}.{" "}
                              {
                                reviewQuestion.question
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

                          {reviewQuestion.image && (
                            <div className="mt-5 flex justify-center">
                              <img
                                src={
                                  reviewQuestion.image
                                }
                                alt="Question diagram"
                                className="max-w-full max-h-96 object-contain rounded-xl"
                              />
                            </div>
                          )}

                          <div className="mt-5 space-y-2">
                            {reviewQuestion.options.map(
                              (
                                option,
                                optionIndex
                              ) => {
                                const isFirstAnswer =
                                  selected ===
                                  optionIndex;

                                const isAnswer =
                                  reviewQuestion.answer ===
                                  optionIndex;

                                const normalizedOption =
                                  normalizeOption(
                                    option
                                  );

                                return (
                                  <div
                                    key={`review-option-${index}-${optionIndex}`}
                                    className={`p-3 rounded-lg border-2 ${
                                      isAnswer
                                        ? "border-green-500 bg-green-50"
                                        : isFirstAnswer
                                        ? "border-red-500 bg-red-50"
                                        : "border-zinc-200"
                                    }`}
                                  >
                                    <div className="flex items-start gap-3">
                                      <span className="font-bold">
                                        {String.fromCharCode(
                                          65 +
                                            optionIndex
                                        )}
                                        .
                                      </span>

                                      <div className="flex-1 flex flex-col gap-3">
                                        {normalizedOption.image && (
                                          <img
                                            src={
                                              normalizedOption.image
                                            }
                                            alt={`Option ${String.fromCharCode(
                                              65 +
                                                optionIndex
                                            )}`}
                                            className="max-w-full max-h-64 object-contain rounded-lg"
                                          />
                                        )}

                                        {normalizedOption.text && (
                                          <span>
                                            {
                                              normalizedOption.text
                                            }
                                          </span>
                                        )}

                                        {isAnswer && (
                                          <span className="text-green-700 font-bold">
                                            ✓ Correct Answer
                                          </span>
                                        )}

                                        {isFirstAnswer &&
                                          !isAnswer && (
                                            <span className="text-red-700 font-bold">
                                              ✗ Your First Answer
                                            </span>
                                          )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>

                          /*
                            Show later answer changes if the
                            student changed their answer.
                          */

                          {selectedAnswers[
                            index
                          ] !==
                            firstAnswers[
                              index
                            ] &&
                            selectedAnswers[
                              index
                            ] !== null && (
                              <div className="mt-4 text-sm text-zinc-500 bg-zinc-50 rounded-lg p-3">
                                Your final
                                selection was{" "}
                                <strong>
                                  {String.fromCharCode(
                                    65 +
                                      (selectedAnswers[
                                        index
                                      ] as number)
                                  )}
                                </strong>
                                , but your
                                first answer was
                                used for scoring.
                              </div>
                            )}
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

  /* =========================================================
     TEST SCREEN
     ========================================================= */

  return (
    <main className="min-h-screen bg-[#0b1e39] text-white">
      {/* =====================================================
          HEADER
          ===================================================== */}

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

      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* =================================================
              TEST INFO
              ================================================= */}

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

          {/* =================================================
              PROGRESS
              ================================================= */}

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

          {/* =================================================
              QUESTION CARD
              ================================================= */}

          <div className="bg-white text-[#0b1e39] rounded-3xl shadow-xl p-6 md:p-10">
            <div className="text-sm font-bold text-[#ff9800] mb-3">
              QUESTION{" "}
              {currentQuestion + 1}
            </div>

            <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
              {question.question}
            </h2>

            {question.image && (
              <div className="mt-6 flex justify-center">
                <img
                  src={question.image}
                  alt="Question diagram"
                  className="max-w-full max-h-96 object-contain rounded-xl"
                />
              </div>
            )}

            {/* =================================================
                OPTIONS
                ================================================= */}

            <div className="mt-8 space-y-4">
              {question.options.map(
                (
                  option,
                  optionIndex
                ) => {
                  const normalizedOption =
                    normalizeOption(
                      option
                    );

                  const isSelected =
                    selectedOption ===
                    optionIndex;

                  const isCorrect =
                    question.answer ===
                    optionIndex;

                  const wasWrong =
                    wrongAttempts[
                      currentQuestion
                    ]?.includes(
                      optionIndex
                    ) ?? false;

                  /*
                    Priority:

                    1. Wrong attempt = RED
                    2. Correct answer currently selected = GREEN
                    3. Current selection = ORANGE
                    4. Normal = white
                  */

                  let optionClass =
                    "border-zinc-200 hover:border-[#ff9800]";

                  let letterClass =
                    "bg-[#e9ecef] text-[#0b1e39]";

                  if (wasWrong) {
                    optionClass =
                      "border-red-500 bg-red-50";

                    letterClass =
                      "bg-red-500 text-white";
                  } else if (
                    isCorrect &&
                    isSelected
                  ) {
                    optionClass =
                      "border-green-500 bg-green-50";

                    letterClass =
                      "bg-green-500 text-white";
                  } else if (isSelected) {
                    optionClass =
                      "border-[#ff9800] bg-[#fff3e0]";

                    letterClass =
                      "bg-[#ff9800] text-[#0b1e39]";
                  }

                  return (
                    <button
                      type="button"
                      key={`question-${currentQuestion}-option-${optionIndex}`}
                      onClick={() =>
                        selectAnswer(
                          optionIndex
                        )
                      }
                      aria-pressed={
                        isSelected
                      }
                      className={`w-full text-left border-2 rounded-xl p-4 transition flex items-start gap-3 ${optionClass}`}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-9 h-9 rounded-full mr-3 font-bold shrink-0 ${letterClass}`}
                      >
                        {String.fromCharCode(
                          65 +
                            optionIndex
                        )}
                      </span>

                      <div className="flex-1 flex flex-col gap-3">
                        {normalizedOption.image && (
                          <img
                            src={
                              normalizedOption.image
                            }
                            alt={`Option ${String.fromCharCode(
                              65 +
                                optionIndex
                            )}`}
                            className="max-w-full max-h-64 object-contain rounded-lg"
                          />
                        )}

                        {normalizedOption.text && (
                          <span className="font-medium">
                            {
                              normalizedOption.text
                            }
                          </span>
                        )}

                        {wasWrong && (
                          <span className="text-red-700 font-bold">
                            ✗ Wrong
                          </span>
                        )}

                        {isCorrect &&
                          isSelected &&
                          !wasWrong && (
                            <span className="text-green-700 font-bold">
                              ✓ Correct
                            </span>
                          )}
                      </div>
                    </button>
                  );
                }
              )}
            </div>

            {/* =================================================
                FIRST ANSWER NOTICE
                ================================================= */}

            {firstAnswers[
              currentQuestion
            ] !== null &&
              selectedAnswers[
                currentQuestion
              ] !==
                firstAnswers[
                  currentQuestion
                ] && (
                <div className="mt-5 rounded-xl bg-[#fff8e8] border border-[#ff9800]/30 px-4 py-3 text-sm text-[#7a4b00]">
                  <strong>
                    First answer recorded.
                  </strong>{" "}
                  Your score will be based on
                  your first answer, even if you
                  change your selection.
                </div>
              )}

            {/* =================================================
                SAVE STATUS
                ================================================= */}

            <div className="mt-5 text-xs text-zinc-400 text-right">
              ✓ Progress saved automatically
            </div>

            {/* =================================================
                REPORT QUESTION
                ================================================= */}

            <div className="mt-6 pt-5 border-t border-zinc-200">
              {!reportedQuestions.includes(
                currentQuestion
              ) ? (
                <button
                  type="button"
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

            {/* =================================================
                NAVIGATION
                ================================================= */}

            <div className="flex justify-between gap-4 mt-10">
              <button
                type="button"
                onClick={() =>
                  setCurrentQuestion(
                    (q) =>
                      Math.max(
                        0,
                        q - 1
                      )
                  )
                }
                disabled={
                  currentQuestion ===
                  0
                }
                className="px-6 py-3 rounded-xl font-bold bg-[#e9ecef] text-[#0b1e39] disabled:opacity-40"
              >
                ← Previous
              </button>

              {currentQuestion <
              questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentQuestion(
                      (q) =>
                        Math.min(
                          questions.length -
                            1,
                          q + 1
                        )
                    )
                  }
                  className="px-7 py-3 rounded-xl font-bold bg-[#ff9800] text-[#0b1e39]"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  disabled={
                    submitting
                  }
                  onClick={() => {
                    if (
                      unanswered >
                      0
                    ) {
                      setShowSubmitWarning(
                        true
                      );
                    } else {
                      submitTest();
                    }
                  }}
                  className="px-7 py-3 rounded-xl font-bold bg-[#ff9800] text-[#0b1e39] disabled:opacity-50"
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit Test"}
                </button>
              )}
            </div>
          </div>

          {/* =================================================
              QUESTION NAVIGATOR
              ================================================= */}

          <div className="mt-6 bg-[#142542] rounded-2xl p-5">
            <div className="flex justify-between items-center mb-4">
              <p className="font-bold">
                Questions
              </p>

              <p className="text-sm text-[#cdd6e6]">
                {questions.length -
                  unanswered}
                /
                {questions.length}{" "}
                answered
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {questions.map(
                (
                  navQuestion,
                  index
                ) => {
                  const firstAnswer =
                    firstAnswers[index];

                  const firstWasCorrect =
                    firstAnswer !==
                      null &&
                    firstAnswer ===
                      navQuestion.answer;

                  return (
                    <button
                      type="button"
                      key={`question-nav-${index}`}
                      onClick={() =>
                        setCurrentQuestion(
                          index
                        )
                      }
                      className={`w-10 h-10 rounded-lg font-bold text-sm ${
                        index ===
                        currentQuestion
                          ? "bg-[#ff9800] text-[#0b1e39]"
                          : firstAnswer ===
                            null
                          ? "bg-[#243b60] text-white"
                          : firstWasCorrect
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                }
              )}
            </div>

            <div className="flex flex-wrap gap-4 mt-5 text-xs text-[#cdd6e6]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-[#243b60]" />
                Unanswered
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-green-500" />
                First answer correct
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-red-500" />
                First answer incorrect
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FIREWORKS
          ===================================================== */}

      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center">
          <div className="relative w-40 h-40">
            {Array.from({
              length: 20,
            }).map(
              (_, index) => {
                const angle =
                  (index / 20) *
                  360;

                const distance =
                  55 +
                  (index % 3) *
                    18;

                return (
                  <span
                    key={`firework-${index}`}
                    className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-green-500 animate-ping"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-${distance}px)`,
                      animationDelay: `${
                        index * 15
                      }ms`,
                    }}
                  />
                );
              }
            )}

            <div className="absolute inset-0 flex items-center justify-center text-5xl">
              ✓
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          SUBMIT WARNING
          ===================================================== */}

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
              <button
                type="button"
                onClick={() =>
                  setShowSubmitWarning(
                    false
                  )
                }
                className="flex-1 bg-[#e9ecef] py-3 rounded-xl font-bold"
              >
                Go Back
              </button>

              <button
                type="button"
                disabled={
                  submitting
                }
                onClick={async () => {
                  setShowSubmitWarning(
                    false
                  );

                  await submitTest();
                }}
                className="flex-1 bg-[#ff9800] py-3 rounded-xl font-bold disabled:opacity-50"
              >
                {submitting
                  ? "Submitting..."
                  : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          REPORT QUESTION POPUP
          ===================================================== */}

      {showReport && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">
          <div className="bg-white text-[#0b1e39] rounded-2xl p-7 max-w-lg w-full shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">
                  Report Question
                </h2>

                <p className="text-zinc-600 mt-2 text-sm">
                  Tell us what seems wrong
                  with this question.
                </p>
              </div>

              <button
                type="button"
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
                    reportType ===
                    "Other"
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
                value={
                  reportComment
                }
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
                type="button"
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
                type="button"
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