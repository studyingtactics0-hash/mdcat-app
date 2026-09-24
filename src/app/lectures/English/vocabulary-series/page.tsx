"use client";

import { useState } from "react";

const lectures = [
  {
    id: 1,
    title: "Introduction to Vocabulary",
    description:
      "Build a strong vocabulary by understanding word meanings, context, synonyms, antonyms, and common word usage",
    videoId: "siCIZeh2gIU",
  },
  {
    id: 2,
    title: "Vocabulary Practice",
    description:
      "Practice vocabulary questions using context clues, synonyms, antonyms, and commonly tested English words",
    videoId: "xnxBfdDqaHU",
  },
];

export default function VocabularyPage() {
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

  const progress =
    ((selectedLecture + 1) / lectures.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0b1e39] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <a
            href="/lectures/English"
            className="mb-6 inline-flex items-center text-sm font-medium text-orange-300 transition hover:text-orange-200"
          >
            ← Back to English
          </a>

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg">
              📚
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                English • Chapter 08
              </p>

              <h1 className="mt-1 text-3xl font-bold sm:text-4xl">
                Vocabulary
              </h1>

              <p className="mt-2 text-gray-300">
                Build your vocabulary and improve your understanding of English words
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_350px]">
          {/* Main Lecture Area */}
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
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-orange-600">
                    LECTURE {selectedLecture + 1} OF {lectures.length}
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-[#0b1e39]">
                    {currentLecture.title}
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    {currentLecture.description}
                  </p>
                </div>

                <div className="shrink-0 rounded-xl bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                  2 Lectures
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm text-gray-500">
                  <span>Lecture Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-orange-500 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  onClick={goToPrevious}
                  disabled={selectedLecture === 0}
                  className="rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← Previous
                </button>

                <button
                  onClick={goToNext}
                  disabled={selectedLecture === lectures.length - 1}
                  className="rounded-xl bg-[#0b1e39] px-5 py-3 font-semibold text-white transition hover:bg-[#142d50] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Study Tip */}
            <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <div className="flex gap-4">
                <div className="text-2xl">💡</div>

                <div>
                  <h3 className="font-bold text-[#0b1e39]">
                    Study Tip
                  </h3>

                  <p className="mt-2 leading-7 text-gray-700">
                    Do not memorize vocabulary words in isolation. Learn their
                    meanings through sentences and context. Pay attention to
                    synonyms, antonyms, and the way a word is used in a sentence.
                    Regular revision and practice will help you remember new words.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="h-fit lg:sticky lg:top-6">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="bg-[#0b1e39] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-300">
                  English • Chapter 08
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Vocabulary
                </h3>

                <p className="mt-1 text-sm text-gray-300">
                  2 lectures
                </p>
              </div>

              <div className="p-3">
                {lectures.map((lecture, index) => (
                  <button
                    key={lecture.id}
                    onClick={() => setSelectedLecture(index)}
                    className={`mb-2 w-full rounded-xl p-4 text-left transition ${
                      selectedLecture === index
                        ? "bg-orange-50 text-orange-700 ring-1 ring-orange-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                          selectedLecture === index
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {lecture.id}
                      </div>

                      <div>
                        <p className="font-semibold">
                          {lecture.title}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Lecture {lecture.id}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Practice Tests */}
              <div className="border-t border-gray-100 p-4">
                <a
                  href="/tests/English"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b1e39] px-4 py-3 font-semibold text-white transition hover:bg-[#142d50]"
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