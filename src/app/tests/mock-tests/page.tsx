"use client";

const mockCategories = [
  {
    icon: "📚",
    title: "Past Papers",
    description:
      "Practice authentic MDCAT past-paper questions and become familiar with the style and difficulty of real exams.",
    href: "/tests/mock-tests/past-papers",
    button: "Explore Past Papers",
    featured: true,
  },
  {
    icon: "🏆",
    title: "Full Book Mock Tests",
    description:
      "Experience complete MDCAT-style examinations covering the entire syllabus under realistic test conditions.",
    href: "/tests/mock-tests/full-book",
    button: "View Full Book Mocks",
    featured: false,
  },
  {
    icon: "🧪",
    title: "Subject-Wise Mock Tests",
    description:
      "Focus on one subject at a time with dedicated mock tests for Biology, Chemistry, Physics and English.",
    href: "/tests/mock-tests/subject-wise",
    button: "Choose a Subject",
    featured: false,
  },
  {
    icon: "📖",
    title: "Half-Syllabus Mock Tests",
    description:
      "Test your progress with carefully designed mocks covering half of the MDCAT syllabus.",
    href: "/tests/mock-tests/half-syllabus",
    button: "View Half-Syllabus Mocks",
    featured: false,
  },
  {
    icon: "🎓",
    title: "NUMS Mock Tests",
    description:
      "Prepare for NUMS with dedicated mock tests designed around the NUMS entry test pattern and difficulty level.",
    href: "/tests/mock-tests/nums",
    button: "Explore NUMS Mocks",
    featured: false,
  },
];

export default function MockTestsPage() {
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

          <a
            href="/tests"
            className="text-sm font-semibold text-[#cdd6e6] transition hover:text-[#ff9800]"
          >
            ← Back to Tests
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-4 pb-6 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff9800]">
            MDCAT Preparation
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Choose Your Mock Test
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#cdd6e6] md:text-lg">
            Select the type of test that matches your preparation.
            Practice past papers, complete the full syllabus, focus on
            individual subjects, or test yourself halfway through your
            preparation.
          </p>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="container mx-auto px-4 py-10 pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {mockCategories.map((category) => (
            <div
              key={category.title}
              className={`group relative overflow-hidden rounded-3xl p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8 ${
                category.featured
                  ? "bg-[#ff9800] text-[#0b1e39]"
                  : "bg-white text-[#0b1e39]"
              }`}
            >
              {/* Decorative circle */}
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${
                  category.featured
                    ? "bg-[#e38000]"
                    : "bg-[#fff3df]"
                }`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-4xl ${
                    category.featured
                      ? "bg-[#0b1e39] text-white"
                      : "bg-[#0b1e39] text-white"
                  }`}
                >
                  {category.icon}
                </div>

                {/* Title */}
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-black md:text-3xl">
                    {category.title}
                  </h2>

                  {category.featured && (
                    <span className="rounded-full bg-[#0b1e39] px-3 py-1 text-xs font-bold text-white">
                      Recommended
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className={`mt-3 max-w-xl leading-7 ${
                    category.featured
                      ? "text-[#172d4f]"
                      : "text-zinc-600"
                  }`}
                >
                  {category.description}
                </p>

                {/* Button */}
                <a
                  href={category.href}
                  className={`mt-7 block w-full rounded-xl py-3.5 text-center font-bold transition ${
                    category.featured
                      ? "bg-[#0b1e39] text-white hover:bg-[#13294b]"
                      : "bg-[#ff9800] text-[#0b1e39] hover:bg-[#e38000]"
                  }`}
                >
                  {category.button} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM MESSAGE */}
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