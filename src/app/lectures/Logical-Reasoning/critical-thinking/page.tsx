"use client";

import { useState } from "react";

const lectures = [
{
id: 1,
title: "Introduction to Critical Thinking",
description:
"Understanding critical thinking, reasoning, assumptions, facts and logical analysis",
videoId: "2wSgK_TbNbg",
},
{
id: 2,
title: "Analyzing Arguments & Conclusions",
description:
"Evaluate arguments, identify conclusions and distinguish strong reasoning from weak reasoning",
videoId: "bN3ThhP2aJ8",
},
];

export default function CriticalThinkingPage() {
const [selectedLecture, setSelectedLecture] = useState(0);
const currentLecture = lectures[selectedLecture];

const goToPrevious = () => {
if (selectedLecture > 0) {
setSelectedLecture(selectedLecture - 1);
}
};

const goToNext = () => {
if (selectedLecture < lectures.length - 1) {
setSelectedLecture(selectedLecture + 1);
}
};

return ( <div className="min-h-screen bg-gray-50"> <header className="bg-[#0b1e39] text-white"> <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> <a
         href="/lectures/Logical-Reasoning"
         className="mb-4 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
       >
← Back to Logical Reasoning </a>

```
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-3xl">
          🧠
        </div>

        <div>
          <p className="text-sm font-medium text-purple-400">
            LOGICAL REASONING • CHAPTER 01
          </p>

          <h1 className="text-2xl font-bold sm:text-3xl">
            Critical Thinking
          </h1>

          <p className="mt-1 text-sm text-gray-300">
            Analyze information, evaluate arguments and think logically
          </p>
        </div>
      </div>
    </div>
  </header>

  <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_350px]">
      <section>
        <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
          <div className="aspect-video">
            <iframe
              key={currentLecture.videoId}
              src={`https://www.youtube.com/embed/${currentLecture.videoId}`}
              title={currentLecture.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-purple-500">
                LECTURE {selectedLecture + 1} OF {lectures.length}
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#0b1e39]">
                {currentLecture.title}
              </h2>
            </div>

            <div className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              🧠 Logical Reasoning
            </div>
          </div>

          <p className="mt-3 text-gray-600">
            {currentLecture.description}
          </p>

          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-gray-700">
                Chapter Progress
              </span>

              <span className="font-semibold text-purple-500">
                {Math.round(
                  ((selectedLecture + 1) / lectures.length) * 100
                )}
                %
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-purple-500 transition-all duration-300"
                style={{
                  width: `${
                    ((selectedLecture + 1) / lectures.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              onClick={goToPrevious}
              disabled={selectedLecture === 0}
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>

            <span className="text-sm font-medium text-gray-500">
              {selectedLecture + 1} / {lectures.length}
            </span>

            <button
              onClick={goToNext}
              disabled={selectedLecture === lectures.length - 1}
              className="rounded-xl bg-[#0b1e39] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#142d50] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-purple-100 bg-purple-50 p-5">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>

            <div>
              <h3 className="font-bold text-[#0b1e39]">
                Study Tip
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Do not rush through Logical Reasoning. Focus on
                understanding why an answer is correct rather than simply
                memorizing patterns. Practice identifying assumptions,
                conclusions and relationships in every question.
              </p>
            </div>
          </div>
        </div>
      </section>

      <aside className="h-fit lg:sticky lg:top-6">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="bg-[#0b1e39] p-5 text-white">
            <p className="text-xs font-semibold tracking-wider text-purple-400">
              LOGICAL REASONING • CHAPTER 01
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Critical Thinking
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              {lectures.length} lectures
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {lectures.map((lecture, index) => {
              const isActive = selectedLecture === index;

              return (
                <button
                  key={lecture.id}
                  onClick={() => setSelectedLecture(index)}
                  className={`w-full p-4 text-left transition ${
                    isActive ? "bg-purple-50" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                        isActive
                          ? "bg-purple-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {lecture.id}
                    </div>

                    <div className="min-w-0">
                      <h3
                        className={`text-sm font-bold ${
                          isActive
                            ? "text-purple-600"
                            : "text-[#0b1e39]"
                        }`}
                      >
                        {lecture.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {lecture.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border-t border-gray-100 p-4">
            <a
              href="/tests/Logical-Reasoning"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#0b1e39] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#142d50]"
            >
              📝 Practice Logical Reasoning Tests
            </a>
          </div>
        </div>
      </aside>
    </div>
  </main>
</div>

);
}
