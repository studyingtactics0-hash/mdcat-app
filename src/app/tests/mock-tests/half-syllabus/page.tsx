"use client";

import { useRouter } from "next/navigation";

export default function HalfSyllabusMockTestsPage() {
  const router = useRouter();

  const mockTests = [
    {
      id: 1,
      title: "Half-Syllabus Mock Test 1",
      questions: 90,
      time: 90,
      difficulty: "MDCAT",
    },
    {
      id: 2,
      title: "Half-Syllabus Mock Test 2",
      questions: 90,
      time: 90,
      difficulty: "MDCAT",
    },
    {
      id: 3,
      title: "Half-Syllabus Mock Test 3",
      questions: 90,
      time: 90,
      difficulty: "MDCAT",
    },
    {
      id: 4,
      title: "Half-Syllabus Mock Test 4",
      questions: 90,
      time: 90,
      difficulty: "MDCAT",
    },
    {
      id: 5,
      title: "Half-Syllabus Mock Test 5",
      questions: 90,
      time: 90,
      difficulty: "MDCAT",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b1e39] px-4 py-10">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-10">
          <button
            onClick={() => router.push("/tests/mock-tests")}
            className="mb-5 font-semibold text-[#ff9800] hover:text-[#e38000]"
          >
            ← Back to Mock Tests
          </button>

          <h1 className="text-3xl font-black text-white md:text-4xl">
            Half-Syllabus Mock Tests
          </h1>

          <p className="mt-2 text-[#cdd6e6]">
            Test your preparation with mock tests covering half of the MDCAT
            syllabus.
          </p>
        </div>

        {/* MOCK TESTS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {mockTests.map((test) => (
            <div
              key={test.id}
              className="rounded-2xl border-l-4 border-[#ff9800] bg-white p-6 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#0b1e39]">
                    {test.title}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-600">
                    Half-Syllabus MDCAT Mock Test
                  </p>
                </div>

                <span className="text-2xl">📝</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-[#e9ecef] px-3 py-1 text-[#0b1e39]">
                  {test.questions} Questions
                </span>

                <span className="rounded-full bg-[#e9ecef] px-3 py-1 text-[#0b1e39]">
                  {test.time} Minutes
                </span>

                <span className="rounded-full bg-[#e9ecef] px-3 py-1 text-[#0b1e39]">
                  {test.difficulty}
                </span>
              </div>

              <button
                onClick={() =>
                  router.push(
                    `/tests/mock-tests/half-syllabus/half-test-${test.id}`
                  )
                }
                className="mt-6 w-full rounded-full bg-[#ff9800] px-6 py-3 font-semibold text-[#0b1e39] shadow transition hover:bg-[#e38000]"
              >
                Start Test
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}