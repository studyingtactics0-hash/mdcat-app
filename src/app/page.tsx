"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Home() {
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#0b1e39] font-sans">
      {/* NAVIGATION */}
      <header className="w-full border-b border-[#172d4f] bg-[#0b1e39]">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 relative">
          <div className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-black tracking-tight text-white select-none">
              STUDYING <span className="text-[#ff9800]">TACTICS</span>
            </span>
          </div>
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8 text-white font-medium text-base">
            <li>
              <a
                href="#home"
                className="hover:text-[#ff9800] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tests"
                className="hover:text-[#ff9800] transition-colors"
              >
                Tests
              </a>
            </li>
            <li>
              <a
                href="#lectures"
                className="hover:text-[#ff9800] transition-colors"
              >
                Lectures
              </a>
            </li>
            <li>
              <a
                href="#score-predictor"
                className="hover:text-[#ff9800] transition-colors"
              >
                Score Predictor
              </a>
            </li>
            <li>
              <a
                href="#mdcat-updates"
                className="hover:text-[#ff9800] transition-colors"
              >
                MDCAT Updates
              </a>
            </li>
            <li>
  {user ? (
    <button
      onClick={async () => {
        await supabase.auth.signOut();
        setUser(null);
        router.refresh();
      }}
      className="ml-4 bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] transition-colors font-semibold px-5 py-2 rounded-full shadow"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => router.push("/login")}
      className="ml-4 bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] transition-colors font-semibold px-5 py-2 rounded-full shadow"
    >
      Login
    </button>
  )}
</li>
          </ul>
          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <input
              type="checkbox"
              id="mobile-menu-toggle"
              className="peer hidden"
              aria-label="Toggle navigation"
            />
            <label
              htmlFor="mobile-menu-toggle"
              className="flex flex-col justify-center cursor-pointer z-20"
              tabIndex={0}
            >
              <span className="block w-7 h-1 bg-white rounded mb-1 transition-all"></span>
              <span className="block w-7 h-1 bg-white rounded mb-1 transition-all"></span>
              <span className="block w-7 h-1 bg-white rounded transition-all"></span>
            </label>
            {/* Mobile Drawer */}
            <div className="fixed inset-0 z-10 bg-black/40 hidden peer-checked:block" />
            <ul className="fixed top-0 right-0 w-64 h-full bg-[#0b1e39] z-30 transform translate-x-full peer-checked:translate-x-0 peer-checked:shadow-xl transition-transform duration-300 flex flex-col space-y-6 px-8 pt-20">
              <li>
                <a
                  href="#home"
                  className="block text-white text-lg font-semibold hover:text-[#ff9800] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#tests"
                  className="block text-white text-lg font-semibold hover:text-[#ff9800] transition-colors"
                >
                  Tests
                </a>
              </li>
              <li>
                <a
                  href="#lectures"
                  className="block text-white text-lg font-semibold hover:text-[#ff9800] transition-colors"
                >
                  Lectures
                </a>
              </li>
              <li>
                <a
                  href="#score-predictor"
                  className="block text-white text-lg font-semibold hover:text-[#ff9800] transition-colors"
                >
                  Score Predictor
                </a>
              </li>
              <li>
                <a
                  href="#mdcat-updates"
                  className="block text-white text-lg font-semibold hover:text-[#ff9800] transition-colors"
                >
                  MDCAT Updates
                </a>
              </li>
              <li>
  {user ? (
    <button
      onClick={async () => {
        await supabase.auth.signOut();
        setUser(null);
        router.refresh();
      }}
      className="mt-4 w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-semibold py-2 rounded-full shadow"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => router.push("/login")}
      className="mt-4 w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-semibold py-2 rounded-full shadow"
    >
      Login
    </button>
  )}
</li>
            </ul>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main
        id="home"
        className="flex-1 w-full bg-[#0b1e39] flex flex-col"
      >
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-12 md:py-20 gap-10">
          {/* Hero Left */}
          <div className="flex-1 flex flex-col md:items-start items-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-5 text-center md:text-left leading-tight drop-shadow-md">
              Prepare <span className="text-[#ff9800]">Smarter</span> for MDCAT
            </h1>
            <p className="text-[#cdd6e6] text-base md:text-lg mb-8 text-center md:text-left max-w-xl">
              Practice with high-quality MDCAT tests, track your performance, identify your weaknesses and stay updated with everything that matters.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="/tests"
                className="bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-semibold px-7 py-3 rounded-full text-lg shadow transition duration-150"
              >
                Start Practicing
              </a>
              <a
                href="#lectures"
                className="border border-[#ff9800] hover:bg-[#13294b] text-[#ff9800] font-semibold px-7 py-3 rounded-full text-lg shadow transition duration-150"
              >
                Explore Lectures
              </a>
            </div>
          </div>
          {/* Hero Right: Medical Illustration / Icon */}
          <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
            {/* SVG or Illustration */}
            <div className="w-[260px] md:w-[320px]">
              {/* Simple, medical-styled SVG */}
              <svg
                viewBox="0 0 320 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <rect
                  x="15"
                  y="35"
                  width="290"
                  height="180"
                  rx="30"
                  fill="#fff"
                  stroke="#10213c"
                  strokeWidth="4"
                  className="drop-shadow-lg"
                />
                <rect
                  x="40"
                  y="60"
                  width="240"
                  height="40"
                  rx="12"
                  fill="#e9ecef"
                />
                <rect
                  x="40"
                  y="120"
                  width="62"
                  height="16"
                  rx="8"
                  fill="#ff9800"
                  opacity="0.7"
                />
                <rect
                  x="112"
                  y="120"
                  width="168"
                  height="16"
                  rx="8"
                  fill="#e9ecef"
                  opacity="0.8"
                />
                <rect
                  x="40"
                  y="154"
                  width="80"
                  height="16"
                  rx="8"
                  fill="#e9ecef"
                  opacity="0.8"
                />
                <rect
                  x="132"
                  y="154"
                  width="148"
                  height="16"
                  rx="8"
                  fill="#e9ecef"
                  opacity="0.7"
                />
                {/* Stethoscope */}
                <circle cx="260" cy="110" r="16" stroke="#ff9800" strokeWidth="3" fill="white"/>
                <path d="M260 126c0 30-50 42-62 0" stroke="#ff9800" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <rect x="245" y="105" width="6" height="6" rx="2" fill="#ff9800"/>
                <rect x="269" y="105" width="6" height="6" rx="2" fill="#ff9800"/>
              </svg>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="container mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-7 border-t-4 border-[#0b1e39] hover:border-[#ff9800] transition-all flex flex-col items-center text-center">
              <div className="bg-[#e9ecef] text-[#0b1e39] w-14 h-14 rounded-full flex items-center justify-center mb-3 text-2xl">📝</div>
              <h3 className="font-bold text-lg text-[#0b1e39] mb-2">
                MDCAT Tests
              </h3>
              <p className="text-zinc-700 text-sm">
                Practice chapter-wise, subject-wise and full-syllabus tests.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-7 border-t-4 border-[#0b1e39] hover:border-[#ff9800] transition-all flex flex-col items-center text-center">
              <div className="bg-[#e9ecef] text-[#0b1e39] w-14 h-14 rounded-full flex items-center justify-center mb-3 text-2xl">📊</div>
              <h3 className="font-bold text-lg text-[#0b1e39] mb-2">
                Performance Analytics
              </h3>
              <p className="text-zinc-700 text-sm">
                Track your accuracy, scores and weak topics.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-7 border-t-4 border-[#0b1e39] hover:border-[#ff9800] transition-all flex flex-col items-center text-center">
              <div className="bg-[#e9ecef] text-[#0b1e39] w-14 h-14 rounded-full flex items-center justify-center mb-3 text-2xl">📈</div>
              <h3 className="font-bold text-lg text-[#0b1e39] mb-2">
                Score Predictor
              </h3>
              <p className="text-zinc-700 text-sm">
                Estimate your MDCAT performance based on your test history.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-7 border-t-4 border-[#0b1e39] hover:border-[#ff9800] transition-all flex flex-col items-center text-center">
              <div className="bg-[#e9ecef] text-[#0b1e39] w-14 h-14 rounded-full flex items-center justify-center mb-3 text-2xl">📢</div>
              <h3 className="font-bold text-lg text-[#0b1e39] mb-2">
                MDCAT Updates
              </h3>
              <p className="text-zinc-700 text-sm">
                Stay informed about important MDCAT and admission updates.
              </p>
            </div>
          </div>
        </section>

        {/* UPCOMING TEST */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-7 text-center md:text-left">
            Upcoming Test
          </h2>
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-7 flex flex-col md:flex-row items-center justify-between border-l-4 border-[#ff9800]">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-[#e9ecef] rounded-full px-3 py-1 text-[#0b1e39] font-semibold text-sm">Biology</span>
                <span className="text-zinc-600 font-medium text-base">— Genetics</span>
              </div>
              <div className="text-zinc-600 mb-2 text-sm">
                <span className="mr-4">50 Questions</span>
                <span>•</span>
                <span className="ml-4">50 Minutes</span>
              </div>
            </div>
            <a
              href="#tests"
              className="mt-5 md:mt-0 md:ml-8 bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-semibold px-7 py-2 rounded-full shadow transition duration-150 whitespace-nowrap"
            >
              View Test
            </a>
          </div>
        </section>

        {/* PERFORMANCE SECTION */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
            Your Statistics <span className="text-[#ff9800]">(Demo)</span>
          </h2>
          <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-2xl font-bold text-[#0b1e39] mb-1">24</span>
              <span className="text-[#576a89] text-sm text-center">Tests Attempted</span>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-2xl font-bold text-[#0b1e39] mb-1">78%</span>
              <span className="text-[#576a89] text-sm text-center">Average Score</span>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-2xl font-bold text-[#0b1e39] mb-1">1,240</span>
              <span className="text-[#576a89] text-sm text-center">Questions Solved</span>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-2xl font-bold text-[#0b1e39] mb-1">7 Days</span>
              <span className="text-[#576a89] text-sm text-center">Current Streak</span>
            </div>
          </div>
          <p className="text-[#cdd6e6] text-xs text-center mt-4 font-semibold">These are sample statistics for demonstration purposes.</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#142542] py-8 mt-auto border-t border-[#172d4f]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-xl font-black tracking-tight text-white">
              STUDYING <span className="text-[#ff9800]">TACTICS</span>
            </div>
            <div className="text-[#cdd6e6] text-sm mt-1">
              MDCAT Preparation Platform
            </div>
          </div>
          <ul className="flex flex-wrap gap-6 mt-4 md:mt-0 text-[#cdd6e6] text-sm font-medium">
            <li>
              <a href="#tests" className="hover:text-[#ff9800] transition">Tests</a>
            </li>
            <li>
              <a href="#lectures" className="hover:text-[#ff9800] transition">Lectures</a>
            </li>
            <li>
              <a href="#score-predictor" className="hover:text-[#ff9800] transition">Score Predictor</a>
            </li>
            <li>
              <a href="#mdcat-updates" className="hover:text-[#ff9800] transition">MDCAT Updates</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
