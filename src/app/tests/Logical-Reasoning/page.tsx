"use client";

import { useRouter } from "next/navigation";

export default function LogicalReasoningPage() {
  const router = useRouter();

  const tests = [
    {
      title: "Critical Thinking",
      description: "Analyze arguments, ideas and information using logical reasoning.",
      questions: 20,
      time: 20,
      link: "/tests/Logical-Reasoning/critical-thinking",
    },
    {
      title: "Letter and Number Series",
      description: "Identify patterns and determine the next letter or number in a series.",
      questions: 20,
      time: 20,
      link: "/tests/Logical-Reasoning/letter-number-series",
    },
    {
      title: "Logical Deduction",
      description: "Use given information to draw valid and logical conclusions.",
      questions: 20,
      time: 20,
      link: "/tests/Logical-Reasoning/logical-deduction",
    },
    {
      title: "Logical Problem",
      description: "Solve structured problems using logical thinking and reasoning skills.",
      questions: 20,
      time: 20,
      link: "/tests/Logical-Reasoning/logical-problem",
    },
    {
      title: "Cause and Effect",
      description: "Identify logical relationships between causes and their effects.",
      questions: 20,
      time: 20,
      link: "/tests/Logical-Reasoning/cause-and-effect",
    },
    {
      title: "Course of Action",
      description: "Select the most appropriate and logical course of action for a situation.",
      questions: 20,
      time: 20,
      link: "/tests/Logical-Reasoning/course-of-action",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b1e39] text-white">
      {/* HEADER */}
      <header className="border-b border-[#172d4f]">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            STUDYING{" "}
            <span className="text-[#ff9800]">TACTICS</span>
          </a>

          <button
            onClick={() => router.push("/tests")}
            className="text-sm font-semibold text-[#cdd6e6] hover:text-[#ff9800] transition"
          >
            ← Back to Tests
          </button>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#ff9800] font-semibold uppercase tracking-wider text-sm">
            MDCAT Preparation
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-2">
            Logical Reasoning
          </h1>

          <p className="text-[#cdd6e6] mt-4 text-base md:text-lg">
            Strengthen your logical thinking and problem-solving skills
            through focused MDCAT reasoning tests.
          </p>
        </div>

        {/* TEST CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {tests.map((test, index) => (
            <div
              key={test.title}
              className="bg-white rounded-2xl p-7 text-[#0b1e39] shadow-lg flex flex-col"
            >
              {/* ICON */}
              <div className="text-4xl mb-4">
                🧠
              </div>

              {/* TEST NUMBER */}
              <p className="text-[#ff9800] font-bold text-sm uppercase tracking-wide">
                Test {index + 1}
              </p>

              {/* TITLE */}
              <h2 className="text-2xl font-bold mt-1">
                {test.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-zinc-600 mt-3 text-sm leading-relaxed flex-1">
                {test.description}
              </p>

              {/* TEST INFO */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-[#e9ecef] text-[#0b1e39] px-3 py-1 rounded-full text-sm font-medium">
                  {test.questions} Questions
                </span>

                <span className="bg-[#e9ecef] text-[#0b1e39] px-3 py-1 rounded-full text-sm font-medium">
                  {test.time} Minutes
                </span>
              </div>

              {/* START BUTTON */}
              <button
                onClick={() => router.push(test.link)}
                className="mt-6 w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-bold py-3 rounded-xl transition"
              >
                Start Test
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}