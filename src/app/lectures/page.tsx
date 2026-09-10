"use client";

import { useRouter } from "next/navigation";

const subjects = [
  {
    name: "Biology",
    icon: "🧬",
    path: "/lectures/Biology",
  },
  {
    name: "Physics",
    icon: "⚛️",
    path: "/lectures/Physics",
  },
  {
    name: "Chemistry",
    icon: "🧪",
    path: "/lectures/Chemistry",
  },
  {
    name: "English",
    icon: "📖",
    path: "/lectures/English",
  },
  {
    name: "Logical Reasoning",
    icon: "🧠",
    path: "/lectures/Logical-Reasoning",
  },
];

export default function LecturesPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0b1e39] px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Studying Tactics Lectures
          </h1>

          <p className="mt-3 text-gray-300">
            Choose a subject to start learning
          </p>
        </div>

        {/* Subject Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <button
              key={subject.name}
              onClick={() => router.push(subject.path)}
              className="group rounded-2xl border border-white/10 bg-white/10 p-7 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl"
            >
              <div className="text-5xl">
                {subject.icon}
              </div>

              <h2 className="mt-4 text-xl font-bold group-hover:text-[#ff9800]">
                {subject.name}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                View {subject.name} lectures
              </p>
            </button>
          ))}
        </div>

      </div>
    </main>
  );
}