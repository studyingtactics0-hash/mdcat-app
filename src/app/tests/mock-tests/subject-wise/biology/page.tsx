"use client";

import { useRouter } from "next/navigation";

const tests = [
  {
    id: 1,
    title: "Biology Test 1",
    questions: 20,
    time: 20,
    description: "Practice important MDCAT Biology MCQs.",
  },
  {
    id: 2,
    title: "Biology Test 2",
    questions: 45,
    time: 45,
    description: "Test your Biology concepts with another set of MCQs.",
  },
  {
    id: 3,
    title: "Biology Test 3",
    questions: 90,
    time: 90,
    description: "Strengthen your Biology preparation with focused practice.",
  },
  {
    id: 4,
    title: "Biology Test 4",
    questions: 135,
    time: 135,
    description: "Challenge yourself with another Biology mock test.",
  },
  {
    id: 5,
    title: "Biology Test 5",
    questions: 180,
    time: 180,
    description: "Final Biology practice test covering important concepts.",
  },
];

export default function BiologySubjectWisePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0b1e39] text-white">
      {/* HEADER */}
      <header className="border-b border-[#172d4f]">
        <div className="container mx-auto flex items-center justify-between px-4 py-5">
          <a
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            STUDYING <span className="text-[#ff9800]">TACTICS</span>
          </a>

          <button
            onClick={() =>
              router.push("/tests/mock-tests/subject-wise")
            }
            className="text-sm font-semibold text-[#cdd6e6] transition hover:text-[#ff9800]"
          >
            ← Back to Subjects
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-4 pb-8 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff9800]">
            Subject-Wise Mock Tests
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Biology
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#cdd6e6] md:text-lg">
            Practice Biology with dedicated MDCAT-style mock tests.
            Choose a test below and challenge your preparation.
          </p>
        </div>
      </section>

      {/* TESTS */}
      <section className="container mx-auto px-4 py-8 pb-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {tests.map((test) => (
            <button
              key={test.id}
              onClick={() =>
                router.push(
                  `/tests/mock-tests/subject-wise/biology/test-${test.id}`
                )
              }
              className="group relative overflow-hidden rounded-3xl bg-white p-7 text-left text-[#0b1e39] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#fff3df] transition duration-300 group-hover:scale-110" />

              <div className="relative">
                {/* Number */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1e39] text-2xl font-black text-white">
                  {test.id}
                </div>

                <h2 className="text-2xl font-black">
                  {test.title}
                </h2>

                <p className="mt-3 leading-7 text-zinc-600">
                  {test.description}
                </p>

                <div className="mt-6 flex gap-3">
                  <span className="rounded-lg bg-[#eef2f7] px-3 py-2 text-sm font-semibold">
                    {test.questions} Questions
                  </span>

                  <span className="rounded-lg bg-[#eef2f7] px-3 py-2 text-sm font-semibold">
                    {test.time} Minutes
                  </span>
                </div>

                <div className="mt-7 w-full rounded-xl bg-[#ff9800] py-3.5 text-center font-bold text-[#0b1e39] transition group-hover:bg-[#e38000]">
                  Start Test →
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section className="border-t border-[#172d4f]">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-sm text-[#8fa0b8]">
            Practice consistently. Master Biology. Improve your MDCAT score.
          </p>

          <p className="mt-2 font-semibold text-[#cdd6e6]">
            STUDYING <span className="text-[#ff9800]">TACTICS</span>
          </p>
        </div>
      </section>
    </main>
  );
}