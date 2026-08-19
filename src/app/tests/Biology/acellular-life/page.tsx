"use client";

import Link from "next/link";

export default function AcellularLifePage() {
  const tests = [
    {
      title: "Acellular Life — Test 1",
      questions: 20,
      time: 20,
      difficulty: "Basic",
      link: "/tests/Biology/acellular-life/test-1",
    },
    {
      title: "Acellular Life — Test 2",
      questions: 35,
      time: 35,
      difficulty: "Moderate",
      link: "/tests/Biology/acellular-life/test-2",
    },
    {
      title: "Acellular Life — Test 3",
      questions: 40,
      time: 40,
      difficulty: "MDCAT",
      link: "/tests/Biology/acellular-life/test-3",
    },
    {
      title: "Acellular Life — Test 4",
      questions: 40,
      time: 40,
      difficulty: "MDCAT",
      link: "/tests/Biology/acellular-life/test-4",
    },
    {
      title: "Acellular Life — Test 5",
      questions: 40,
      time: 40,
      difficulty: "MDCAT",
      link: "/tests/Biology/acellular-life/test-5",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">
          Acellular Life
        </h1>

        <p className="mb-8 text-gray-600">
          Select a test to begin.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <div
              key={test.title}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <h2 className="mb-3 text-xl font-semibold">
                {test.title}
              </h2>

              <div className="mb-5 space-y-1 text-sm text-gray-600">
                <p>Questions: {test.questions}</p>
                <p>Time: {test.time} minutes</p>
                <p>Difficulty: {test.difficulty}</p>
              </div>

              <Link
                href={test.link}
                className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Start Test
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}