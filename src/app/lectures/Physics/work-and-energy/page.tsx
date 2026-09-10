"use client";

import { useState } from "react";
import Link from "next/link";

const lectures = [
  {
    number: 1,
    title: "Work and Energy — Lecture 1",
    shortTitle: "Work & Its Applications",
    description:
      "Understanding work, conditions for work to be done, work by constant and variable forces, and applications.",
    videoId: "YOUR_VIDEO_ID_1",
  },
  {
    number: 2,
    title: "Work and Energy — Lecture 2",
    shortTitle: "Kinetic & Potential Energy",
    description:
      "Kinetic energy, potential energy, gravitational potential energy and the relationship between work and energy.",
    videoId: "YOUR_VIDEO_ID_2",
  },
  {
    number: 3,
    title: "Work and Energy — Lecture 3",
    shortTitle: "Power & Conservation of Energy",
    description:
      "Power, efficiency and the law of conservation of energy with important MDCAT applications.",
    videoId: "YOUR_VIDEO_ID_3",
  },
];

export default function WorkAndEnergyPage() {
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

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-gray-900">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <header className="bg-[#0b1e39] text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="/lectures/Physics"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            ← Physics Lectures
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-3xl shadow-sm">
              ⚡
            </div>

            <div className="min-w-0">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                  Physics
                </span>

                <span className="text-slate-500">•</span>

                <span className="text-xs font-medium text-slate-300">
                  Chapter 03
                </span>
              </div>

              <h1 className="truncate text-2xl font-bold sm:text-3xl">
                Work and Energy
              </h1>

              <p className="mt-1 text-sm text-slate-300">
                Work, energy, power and conservation of energy
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_350px]">

          {/* ================================================= */}
          {/* CENTER — VIDEO */}
          {/* ================================================= */}

          <section className="min-w-0">

            {/* Video */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-xl">
              <div className="aspect-video w-full">
                <iframe
                  key={currentLecture.videoId}
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${currentLecture.videoId}`}
                  title={currentLecture.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Lecture Details */}
            <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                      Lecture {currentLecture.number}
                    </span>

                    <span className="text-sm text-gray-400">
                      {currentLecture.number} / {lectures.length}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#0b1e39] sm:text-2xl">
                    {currentLecture.shortTitle}
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                    {currentLecture.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="shrink-0">
                  <div className="text-right text-xs font-semibold text-gray-500">
                    Chapter Progress
                  </div>

                  <div className="mt-2 h-2 w-32 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-orange-500 transition-all duration-300"
                      style={{
                        width: `${
                          ((selectedLecture + 1) / lectures.length) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <p className="mt-1 text-right text-xs text-gray-400">
                    {Math.round(
                      ((selectedLecture + 1) / lectures.length) * 100
                    )}
                    % viewed
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                <button
                  onClick={goToPrevious}
                  disabled={selectedLecture === 0}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    selectedLecture === 0
                      ? "cursor-not-allowed bg-gray-100 text-gray-400"
                      : "bg-gray-100 text-[#0b1e39] hover:bg-gray-200"
                  }`}
                >
                  ← Previous
                </button>

                <span className="hidden text-xs font-medium text-gray-400 sm:block">
                  Lecture {selectedLecture + 1} of {lectures.length}
                </span>

                <button
                  onClick={goToNext}
                  disabled={selectedLecture === lectures.length - 1}
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                    selectedLecture === lectures.length - 1
                      ? "cursor-not-allowed bg-gray-100 text-gray-400"
                      : "bg-[#ff9800] text-white shadow-sm hover:bg-orange-600"
                  }`}
                >
                  Next Lecture →
                </button>
              </div>
            </div>

            {/* Study Tip */}
            <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex gap-4">
                <div className="text-2xl">💡</div>

                <div>
                  <h3 className="font-bold text-[#0b1e39]">
                    Study Tip
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Make sure you understand the relationship between work,
                    force, displacement and energy. Then practice numerical
                    and conceptual MDCAT questions from this chapter.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================= */}
          {/* RIGHT — PLAYLIST */}
          {/* ================================================= */}

          <aside className="h-fit overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:sticky lg:top-6">

            {/* Sidebar Header */}
            <div className="bg-[#0b1e39] p-5 text-white">
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                    Chapter 03
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    Work & Energy
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">
                  🎥
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <span>{lectures.length} Lectures</span>

                <span>
                  {selectedLecture + 1} of {lectures.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-orange-500 transition-all duration-300"
                  style={{
                    width: `${
                      ((selectedLecture + 1) / lectures.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Lecture Playlist */}
            <div className="p-3">
              {lectures.map((lecture, index) => {
                const isActive = index === selectedLecture;

                return (
                  <button
                    key={lecture.number}
                    onClick={() => setSelectedLecture(index)}
                    className={`group mb-2 w-full rounded-xl p-3 text-left transition-all ${
                      isActive
                        ? "bg-orange-50 ring-1 ring-orange-200"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex gap-3">

                      {/* Number */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-orange-500 text-white shadow-sm"
                            : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                        }`}
                      >
                        {lecture.number}
                      </div>

                      {/* Lecture Info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">

                          <p
                            className={`text-sm font-bold ${
                              isActive
                                ? "text-[#0b1e39]"
                                : "text-gray-700"
                            }`}
                          >
                            Lecture {lecture.number}
                          </p>

                          {isActive && (
                            <span className="shrink-0 text-xs font-bold text-orange-500">
                              ▶
                            </span>
                          )}
                        </div>

                        <p
                          className={`mt-1 line-clamp-2 text-xs leading-5 ${
                            isActive
                              ? "text-gray-600"
                              : "text-gray-500"
                          }`}
                        >
                          {lecture.shortTitle}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sidebar Footer */}
            <div className="border-t border-gray-100 bg-gray-50 p-4">
              <Link
                href="/tests/Physics"
                className="flex w-full items-center justify-center rounded-xl bg-[#0b1e39] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#10294d]"
              >
                Practice Physics MCQs →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}