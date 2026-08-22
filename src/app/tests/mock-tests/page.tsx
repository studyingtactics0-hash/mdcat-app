"use client";

import { useRouter } from "next/navigation";

export default function MockTestsPage() {
  const router = useRouter();

  const mockTests = [
    {
      id: 1,
      title: "Full Mock Test 1",
      questions: 180,
      time: 180,
      difficulty: "MDCAT",
    },
    {
      id: 2,
      title: "Second year Full syllabus",
      questions: 180,
      time: 180,
      difficulty: "MDCAT",
    },
    {
      id: 3,
      title: "Full Mock Test 3",
      questions: 180,
      time: 180,
      difficulty: "MDCAT",
    },
    {
      id: 4,
      title: "Full Mock Test 4",
      questions: 180,
      time: 180,
      difficulty: "MDCAT",
    },
    {
      id: 5,
      title: "Full Mock Test 5",
      questions: 180,
      time: 180,
      difficulty: "MDCAT",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b1e39] px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <button
            onClick={() => router.push("/")}
            className="text-[#ff9800] hover:text-[#e38000] font-semibold mb-5"
          >
            ← Back to Home
          </button>

          <h1 className="text-3xl md:text-4xl font-black text-white">
            Mock Tests
          </h1>

          <p className="text-[#cdd6e6] mt-2">
            Practice full-length MDCAT mock tests and evaluate your preparation.
          </p>
        </div>

        {/* MOCK TESTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#ff9800]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#0b1e39]">
                    {test.title}
                  </h2>

                  <p className="text-zinc-600 text-sm mt-1">
                    Full MDCAT Mock Test
                  </p>
                </div>

                <span className="text-2xl">
                  📝
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5 text-sm">
                <span className="bg-[#e9ecef] text-[#0b1e39] px-3 py-1 rounded-full">
                  {test.questions} Questions
                </span>

                <span className="bg-[#e9ecef] text-[#0b1e39] px-3 py-1 rounded-full">
                  {test.time} Minutes
                </span>

                <span className="bg-[#e9ecef] text-[#0b1e39] px-3 py-1 rounded-full">
                  {test.difficulty}
                </span>
              </div>

              <button
                onClick={() =>
                  router.push(`/tests/mock-tests/mock-test-${test.id}`)
                }
                className="w-full mt-6 bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-semibold px-6 py-3 rounded-full shadow transition"
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