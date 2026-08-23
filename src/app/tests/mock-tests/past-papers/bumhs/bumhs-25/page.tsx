"use client";

const bumhsPapers = [
  {
    icon: "📝",
    title: "BUMHS 2025",
    description:
      "Practice the complete BUMHS 2025 past paper with authentic questions from Biology, Chemistry, Physics, English and Logical Reasoning.",
    href: "/tests/mock-tests/past-papers/bumhs/bumhs-25",
    button: "Start BUMHS 2025",
    available: true,
    featured: true,
  },

  {
    icon: "📚",
    title: "BUMHS 2024",
    description:
      "Practice the BUMHS 2024 past paper and strengthen your preparation with another authentic examination paper.",
    href: "#",
    button: "Coming Soon",
    available: false,
    featured: false,
  },
];

export default function BumhsPastPapersPage() {
  return (
    <main className="min-h-screen bg-[#0b1e39] text-white">
      {/* HEADER */}
      <header className="border-b border-[#172d4f]">
        <div className="container mx-auto flex items-center justify-between px-4 py-5">
          <a href="/" className="text-2xl font-black tracking-tight">
            STUDYING <span className="text-[#ff9800]">TACTICS</span>
          </a>

          <a
            href="/tests/mock-tests/past-papers"
            className="text-sm font-semibold text-[#cdd6e6] transition hover:text-[#ff9800]"
          >
            ← Back to Past Papers
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-4 pb-8 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff9800]">
            BUMHS Preparation
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            BUMHS Past Papers
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#cdd6e6] md:text-lg">
            Practice authentic BUMHS past papers and become familiar with
            the examination style, question patterns and difficulty.
          </p>
        </div>
      </section>

      {/* PAPER CARDS */}
      <section className="container mx-auto px-4 py-10 pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {bumhsPapers.map((paper) => (
            <div
              key={paper.title}
              className={`group relative overflow-hidden rounded-3xl p-7 shadow-xl transition duration-300 md:p-8 ${
                paper.featured
                  ? "bg-[#ff9800] text-[#0b1e39] hover:-translate-y-1 hover:shadow-2xl"
                  : "bg-white text-[#0b1e39]"
              }`}
            >
              {/* Decorative circle */}
              <div
                className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${
                  paper.featured ? "bg-[#e38000]" : "bg-[#fff3df]"
                }`}
              />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b1e39] text-4xl text-white">
                  {paper.icon}
                </div>

                {/* Title */}
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-black md:text-3xl">
                    {paper.title}
                  </h2>

                  {paper.available && (
                    <span className="rounded-full bg-[#0b1e39] px-3 py-1 text-xs font-bold text-white">
                      Available
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className={`mt-3 max-w-xl leading-7 ${
                    paper.featured
                      ? "text-[#172d4f]"
                      : "text-zinc-600"
                  }`}
                >
                  {paper.description}
                </p>

                {/* Button */}
                {paper.available ? (
                  <a
                    href={paper.href}
                    className="mt-7 block w-full rounded-xl bg-[#0b1e39] py-3.5 text-center font-bold text-white transition hover:bg-[#13294b]"
                  >
                    {paper.button} →
                  </a>
                ) : (
                  <div className="mt-7 block w-full cursor-not-allowed rounded-xl bg-zinc-200 py-3.5 text-center font-bold text-zinc-500">
                    {paper.button}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="border-t border-[#172d4f]">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-sm text-[#8fa0b8]">
            Practice consistently. Analyze your mistakes. Improve every day.
          </p>

          <p className="mt-2 font-semibold text-[#cdd6e6]">
            STUDYING <span className="text-[#ff9800]">TACTICS</span>
          </p>
        </div>
      </section>
    </main>
  );
}