"use client";

import { useRouter } from "next/navigation";

const chapters = [
{
number: 1,
name: "Critical Thinking",
emoji: "🧠",
description: "Analyze information, evaluate arguments and think logically",
lectures: 2,
color: "bg-purple-50 border-purple-200",
iconColor: "bg-purple-100",
numberColor: "bg-purple-600",
textColor: "text-purple-700",
},
{
number: 2,
name: "Letter and Symbol Series",
emoji: "🔤",
description: "Identify patterns and relationships in letters and symbols",
lectures: 2,
color: "bg-blue-50 border-blue-200",
iconColor: "bg-blue-100",
numberColor: "bg-blue-600",
textColor: "text-blue-700",
},
{
number: 3,
name: "Logical Deductions",
emoji: "💡",
description: "Draw valid conclusions from given information",
lectures: 2,
color: "bg-yellow-50 border-yellow-200",
iconColor: "bg-yellow-100",
numberColor: "bg-yellow-500",
textColor: "text-yellow-700",
},
{
number: 4,
name: "Logical Problems",
emoji: "🧩",
description: "Solve complex problems using reasoning and deduction",
lectures: 2,
color: "bg-emerald-50 border-emerald-200",
iconColor: "bg-emerald-100",
numberColor: "bg-emerald-600",
textColor: "text-emerald-700",
},
{
number: 5,
name: "Course of Action",
emoji: "🎯",
description: "Evaluate situations and choose the most logical action",
lectures: 2,
color: "bg-orange-50 border-orange-200",
iconColor: "bg-orange-100",
numberColor: "bg-orange-600",
textColor: "text-orange-700",
},
{
number: 6,
name: "Cause and Effect",
emoji: "🔗",
description: "Understand relationships between causes and their effects",
lectures: 2,
color: "bg-rose-50 border-rose-200",
iconColor: "bg-rose-100",
numberColor: "bg-rose-600",
textColor: "text-rose-700",
},
];

export default function LogicalReasoningLecturesPage() {
const router = useRouter();

return ( <main className="min-h-screen bg-[#0b1e39] px-4 py-8 sm:px-6 lg:px-8"> <div className="mx-auto max-w-6xl">

```
    {/* Back Button */}
    <button
      onClick={() => router.push("/lectures")}
      className="mb-8 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/20"
    >
      <span>←</span>
      Back to Subjects
    </button>

    {/* Header */}
    <div className="mb-10 text-center">
      <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-5xl shadow-lg">
        🧠
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Logical Reasoning Lectures
      </h1>

      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#ff9800]" />

      <p className="mx-auto mt-4 max-w-xl text-gray-300">
        Build your logical thinking and problem-solving skills for MDCAT
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ff9800] px-5 py-2 text-sm font-bold text-white shadow-lg">
        📚 6 Chapters • 12 Lectures
      </div>
    </div>

    {/* Section Heading */}
    <div className="mb-5 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Logical Reasoning Chapters
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Select a chapter to access its lectures
        </p>
      </div>
    </div>

    {/* Chapter Grid */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {chapters.map((chapter) => (
        <button
          key={chapter.number}
          onClick={() =>
            router.push(
              `/lectures/Logical-Reasoning/${chapter.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")}`
            )
          }
          className={`group relative overflow-hidden rounded-3xl border p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${chapter.color}`}
        >
          {/* Top Row */}
          <div className="flex items-start justify-between">

            {/* Emoji */}
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl text-4xl shadow-sm transition-transform duration-300 group-hover:scale-110 ${chapter.iconColor}`}
            >
              {chapter.emoji}
            </div>

            {/* Chapter Number */}
            <div
              className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-sm font-bold text-white shadow-sm ${chapter.numberColor}`}
            >
              {chapter.number}
            </div>
          </div>

          {/* Text */}
          <div className="mt-5">
            <p
              className={`text-xs font-bold uppercase tracking-wider ${chapter.textColor}`}
            >
              Chapter {chapter.number}
            </p>

            <h3 className="mt-1 text-lg font-extrabold leading-snug text-gray-900">
              {chapter.name}
            </h3>

            <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-gray-600">
              {chapter.description}
            </p>
          </div>

          {/* Bottom */}
          <div
            className={`mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-sm font-semibold ${chapter.textColor}`}
          >
            <span>
              View {chapter.lectures} Lectures
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </button>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-12 pb-6 text-center">
      <div className="mx-auto mb-3 h-px max-w-xs bg-white/10" />

      <p className="text-sm text-gray-500">
        🧠 Think • Analyze • Solve • Succeed
      </p>

      <p className="mt-1 text-xs text-gray-600">
        Studying Tactics
      </p>
    </div>

  </div>
</main>

);
}