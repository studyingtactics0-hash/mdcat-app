"use client";

import { useState } from "react";

export default function Header() {
  const [testsOpen, setTestsOpen] = useState(false);

  return (
    <header className="bg-[#0b1e39] border-b border-[#172d4f] text-white relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          STUDYING <span className="text-[#ff9800]">TACTICS</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-7">

          {/* TESTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setTestsOpen(true)}
            onMouseLeave={() => setTestsOpen(false)}
          >
            <button
              onClick={() => setTestsOpen(!testsOpen)}
              className="flex items-center gap-1 font-semibold text-[#cdd6e6] hover:text-[#ff9800] transition"
            >
              Tests
              <span className="text-xs">▼</span>
            </button>

            {testsOpen && (
              <div className="absolute right-0 top-full pt-3">
                <div className="w-[560px] bg-white text-[#0b1e39] rounded-2xl shadow-2xl border border-gray-200 p-6">

                  <div className="grid grid-cols-2 gap-6">

                    {/* SUBJECTS */}
                    <div>
                      <h3 className="text-[#ff9800] font-black text-sm uppercase tracking-wide mb-3">
                        📚 Subjects
                      </h3>

                      <div className="space-y-1">
                        <a
                          href="/tests/Biology"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          🧬 Biology
                        </a>

                        <a
                          href="/tests/Chemistry"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          ⚗️ Chemistry
                        </a>

                        <a
                          href="/tests/Physics"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          ⚡ Physics
                        </a>

                        <a
                          href="/tests/English"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          📖 English
                        </a>

                        <a
                          href="/tests/Logical-Reasoning"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          🧠 Logical Reasoning
                        </a>
                      </div>
                    </div>

                    {/* MOCK TESTS */}
                    <div>
                      <h3 className="text-[#ff9800] font-black text-sm uppercase tracking-wide mb-3">
                        📝 Mock Tests
                      </h3>

                      <div className="space-y-1">
                        <a
                          href="/tests/mock-tests"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          🎯 Full MDCAT + NUMS
                        </a>

                        <a
                          href="/tests/mock-tests/half-syllabus"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          📚 Half Syllabus
                        </a>

                        <a
                          href="/tests/mock-tests/full-book"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          📖 Full Book Mock
                        </a>

                        <a
                          href="/tests/mock-tests/subject-wise"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          🧪 Subject-wise Mock
                        </a>

                        <a
                          href="/tests/mock-tests/nums"
                          className="block px-3 py-2 rounded-lg hover:bg-[#fff3e0] font-semibold transition"
                        >
                          🏆 NUMS
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* PAST PAPERS */}
                  <div className="mt-6 pt-5 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-[#fff3e0] to-[#fff8ef] border-2 border-[#ff9800] rounded-xl p-4 shadow-md">

                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-[#0b1e39] font-black text-sm uppercase tracking-wide">
                          📄 Past Papers
                        </h3>

                        <span className="bg-[#ff9800] text-[#0b1e39] text-[10px] font-black px-2 py-1 rounded-full uppercase">
                          ⭐ Important
                        </span>
                      </div>

                      <p className="text-xs text-zinc-600 mb-3">
                        Practice previous MDCAT papers from major examination boards.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">

                        <a
                          href="/tests/mock-tests/past-papers/siba"
                          className="px-3 py-2.5 rounded-lg bg-white border border-[#ffd08a] hover:bg-[#ff9800] hover:text-[#0b1e39] text-sm font-bold text-center transition shadow-sm"
                        >
                          SIBA
                        </a>

                        <a
                          href="/tests/mock-tests/past-papers/kmu"
                          className="px-3 py-2.5 rounded-lg bg-white border border-[#ffd08a] hover:bg-[#ff9800] hover:text-[#0b1e39] text-sm font-bold text-center transition shadow-sm"
                        >
                          KMU
                        </a>

                        <a
                          href="/tests/mock-tests/past-papers/uhs"
                          className="px-3 py-2.5 rounded-lg bg-white border border-[#ffd08a] hover:bg-[#ff9800] hover:text-[#0b1e39] text-sm font-bold text-center transition shadow-sm"
                        >
                          UHS
                        </a>

                        <a
                          href="/tests/mock-tests/past-papers/szambu"
                          className="px-3 py-2.5 rounded-lg bg-white border border-[#ffd08a] hover:bg-[#ff9800] hover:text-[#0b1e39] text-sm font-bold text-center transition shadow-sm"
                        >
                          SZABMU
                        </a>

                        <a
                          href="/tests/mock-tests/past-papers/bumhs"
                          className="px-3 py-2.5 rounded-lg bg-white border border-[#ffd08a] hover:bg-[#ff9800] hover:text-[#0b1e39] text-sm font-bold text-center transition shadow-sm"
                        >
                          BUMHS
                        </a>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* OTHER NAV ITEMS */}
          <a
            href="/lectures"
            className="font-semibold text-[#cdd6e6] hover:text-[#ff9800] transition"
          >
            Lectures
          </a>

          <a
            href="/score-predictor"
            className="font-semibold text-[#cdd6e6] hover:text-[#ff9800] transition"
          >
            Score Predictor
          </a>

          <a
            href="/mdcat-updates"
            className="font-semibold text-[#cdd6e6] hover:text-[#ff9800] transition"
          >
            MDCAT Updates
          </a>

        </nav>

        {/* MOBILE TEST BUTTON */}
        <button
          onClick={() => setTestsOpen(!testsOpen)}
          className="md:hidden bg-[#ff9800] text-[#0b1e39] px-4 py-2 rounded-lg font-bold"
        >
          Tests ▾
        </button>

      </div>

      {/* MOBILE MENU */}
      {testsOpen && (
        <div className="md:hidden bg-[#102747] border-t border-[#172d4f] px-4 py-5">

          <p className="text-[#ff9800] font-bold text-sm uppercase mb-3">
            Subjects
          </p>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="/tests/Biology"
              className="bg-[#173355] p-3 rounded-lg"
            >
              🧬 Biology
            </a>

            <a
              href="/tests/Chemistry"
              className="bg-[#173355] p-3 rounded-lg"
            >
              ⚗️ Chemistry
            </a>

            <a
              href="/tests/Physics"
              className="bg-[#173355] p-3 rounded-lg"
            >
              ⚡ Physics
            </a>

            <a
              href="/tests/English"
              className="bg-[#173355] p-3 rounded-lg"
            >
              📖 English
            </a>

            <a
              href="/tests/Logical-Reasoning"
              className="bg-[#173355] p-3 rounded-lg"
            >
              🧠 Logical Reasoning
            </a>
          </div>

          <p className="text-[#ff9800] font-bold text-sm uppercase mt-5 mb-3">
            Mock Tests
          </p>

          <div className="space-y-2">
            <a
              href="/tests/mock-tests"
              className="block bg-[#173355] p-3 rounded-lg"
            >
              🎯 Full MDCAT + NUMS
            </a>

            <a
              href="/tests/mock-tests/half-syllabus"
              className="block bg-[#173355] p-3 rounded-lg"
            >
              📚 Half Syllabus
            </a>

            <a
              href="/tests/mock-tests/full-book"
              className="block bg-[#173355] p-3 rounded-lg"
            >
              📖 Full Book Mock
            </a>

            <a
              href="/tests/mock-tests/subject-wise"
              className="block bg-[#173355] p-3 rounded-lg"
            >
              🧪 Subject-wise Mock
            </a>

            <a
              href="/tests/mock-tests/nums"
              className="block bg-[#173355] p-3 rounded-lg"
            >
              🏆 NUMS
            </a>
          </div>

          <p className="text-[#ff9800] font-bold text-sm uppercase mt-5 mb-3">
            ⭐ Important — Past Papers
          </p>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="/tests/mock-tests/past-papers/siba"
              className="bg-[#ff9800] text-[#0b1e39] p-3 rounded-lg font-bold text-center"
            >
              SIBA
            </a>

            <a
              href="/tests/mock-tests/past-papers/kmu"
              className="bg-[#ff9800] text-[#0b1e39] p-3 rounded-lg font-bold text-center"
            >
              KMU
            </a>

            <a
              href="/tests/mock-tests/past-papers/uhs"
              className="bg-[#ff9800] text-[#0b1e39] p-3 rounded-lg font-bold text-center"
            >
              UHS
            </a>

            <a
              href="/tests/mock-tests/past-papers/szambu"
              className="bg-[#ff9800] text-[#0b1e39] p-3 rounded-lg font-bold text-center"
            >
              SZABMU
            </a>

            <a
              href="/tests/mock-tests/past-papers/bumhs"
              className="bg-[#ff9800] text-[#0b1e39] p-3 rounded-lg font-bold text-center"
            >
              BUMHS
            </a>
          </div>

        </div>
      )}
    </header>
  );
}