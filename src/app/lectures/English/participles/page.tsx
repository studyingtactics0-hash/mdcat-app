"use client";

import { useState } from "react";

const lectures = [
  {
    id: 1,
    title: "Participles",
    description:
      "Understand present and past participles, their functions and how they are used correctly in sentences",
    videoId: "SEbnrLFdp9E",
  },
];

export default function ParticiplesPage() {
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0b1e39] text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Back Button */}
          <a
            href="/lectures/English"
            className="mb-4 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
          >
            ← Back to English
          </a>

          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-3xl">
              ✍️
            </div>

            <div>
              <p className="text-sm font-medium text-emerald-400">
                ENGLISH • CHAPTER 04
              </p>

              <h1 className="text-2xl font-bold sm:text-3xl">
                Participles
              </h1>

              <p className="mt-1 text-sm text-gray-300">
                Understand and use participles correctly in sentences
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_350px]">
          {/* Main Content */}
          <section>
            {/* Video */}
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

            {/* Lecture Information */}
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-emerald-500">
                    LECTURE {selectedLecture + 1} OF {lectures.length}
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-[#0b1e39]">
                    {currentLecture.title}
                  </h2>
                </div>

                <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                  ✍️ English
                </div>
              </div>

              <p className="mt-3 text-gray-600">
                {currentLecture.description}
              </p>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-gray-700">
                    Chapter Progress
                  </span>

                  <span className="font-semibold text-emerald-500">
                    {Math.round(
                      ((selectedLecture + 1) / lectures.length) * 100
                    )}
                    %
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                    style={{
                      width: `${
                        ((selectedLecture + 1) / lectures.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* Navigation */}
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

            {/* Study Tip */}
            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex gap-3">
                <div className="text-2xl">💡</div>

                <div>
                  <h3 className="font-bold text-[#0b1e39]">Study Tip</h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Remember that a present participle usually ends in
                    <span className="font-semibold"> -ing</span>, while a past
                    participle often ends in
                    <span className="font-semibold"> -ed</span> for regular
                    verbs. Pay attention to how participles function in a
                    sentence, especially when they act as adjectives or form
                    part of a verb phrase.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="h-fit lg:sticky lg:top-6">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* Sidebar Header */}
              <div className="bg-[#0b1e39] p-5 text-white">
                <p className="text-xs font-semibold tracking-wider text-emerald-400">
                  ENGLISH • CHAPTER 04
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Participles
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  {lectures.length} lecture
                </p>
              </div>

              {/* Lecture List */}
              <div className="divide-y divide-gray-100">
                {lectures.map((lecture, index) => {
                  const isActive = selectedLecture === index;

                  return (
                    <button
                      key={lecture.id}
                      onClick={() => setSelectedLecture(index)}
                      className={`w-full p-4 text-left transition ${
                        isActive ? "bg-emerald-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                            isActive
                              ? "bg-emerald-500 text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {lecture.id}
                        </div>

                        <div className="min-w-0">
                          <h3
                            className={`text-sm font-bold ${
                              isActive
                                ? "text-emerald-600"
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

              {/* Practice Tests */}
              <div className="border-t border-gray-100 p-4">
                <a
                  href="/tests/English"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#0b1e39] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#142d50]"
                >
                  📝 Practice English Tests
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}