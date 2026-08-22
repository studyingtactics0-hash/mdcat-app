"use client";

import { useRouter } from "next/navigation";

const subjects = [
  {
    title: "Biology",
    description:
      "Practice subject-wise Biology mock tests covering important MDCAT concepts and MCQs.",
    icon: "🧬",
    href: "/tests/mock-tests/subject-wise/biology",
  },
  {
    title: "Chemistry",
    description:
      "Strengthen your Chemistry preparation with focused MDCAT-style mock tests.",
    icon: "⚗️",
    href: "/tests/mock-tests/subject-wise/chemistry",
  },
  {
    title: "Physics",
    description:
      "Practice Physics concepts, formulas and MDCAT-style questions through dedicated mocks.",
    icon: "⚡",
    href: "/tests/mock-tests/subject-wise/physics",
  },
  {
    title: "English",
    description:
      "Improve grammar, vocabulary and comprehension with dedicated English mock tests.",
    icon: "📖",
    href: "/tests/mock-tests/subject-wise/english",
  },
  {
    title: "Logical Reasoning",
    description:
      "Sharpen your analytical thinking, logical deduction and problem-solving skills with MDCAT-style reasoning mock tests.",
    icon: "🧠",
    href: "/tests/mock-tests/subject-wise/logical-reasoning",
  },
];

export default function SubjectWiseMockTestsPage() {
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
            onClick={() => router.push("/tests/mock-tests")}
            className="text-sm font-semibold text-[#cdd6e6] transition hover:text-[#ff9800]"
          >
            ← Back to Mock Tests
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-4 pb-6 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff9800]">
            Subject-Wise Preparation
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Choose Your Subject
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#cdd6e6] md:text-lg">
            Select a subject to practice dedicated MDCAT mock tests and
            strengthen your preparation.
          </p>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="container mx-auto px-4 py-10 pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {subjects.map((subject) => (
            <button
              key={subject.title}
              onClick={() => router.push(subject.href)}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 text-left text-[#0b1e39] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8"
            >
              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#fff3df] transition duration-300 group-hover:scale-110" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b1e39] text-4xl text-white">
                  {subject.icon}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-black md:text-3xl">
                  {subject.title}
                </h2>

                {/* Description */}
                <p className="mt-3 leading-7 text-zinc-600">
                  {subject.description}
                </p>

                {/* Button */}
                <div className="mt-7 w-full rounded-xl bg-[#ff9800] py-3.5 text-center font-bold text-[#0b1e39] transition group-hover:bg-[#e38000]">
                  View {subject.title} Tests →
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
            Focus on one subject. Master the concepts. Improve your score.
          </p>

          <p className="mt-2 font-semibold text-[#cdd6e6]">
            STUDYING <span className="text-[#ff9800]">TACTICS</span>
          </p>
        </div>
      </section>
    </main>
  );
}