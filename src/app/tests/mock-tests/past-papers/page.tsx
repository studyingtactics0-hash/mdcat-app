"use client";

const pastPaperCategories = [
  {
    title: "SIBA MDCAT",
    subtitle: "Sindh",
    description:
      "Practice MDCAT past papers and questions from Sindh through SIBA testing.",
    href: "/tests/mock-tests/past-papers/siba",
    icon: "🏛️",
  },
  {
    title: "KMU MDCAT",
    subtitle: "Khyber Pakhtunkhwa",
    description:
      "Practice KMU MDCAT past papers and prepare according to the KPK testing pattern.",
    href: "/tests/mock-tests/past-papers/kmu",
    icon: "📚",
  },
  {
    title: "UHS MDCAT",
    subtitle: "Punjab",
    description:
      "Practice UHS MDCAT past papers and questions from the Punjab testing pattern.",
    href: "/tests/mock-tests/past-papers/uhs",
    icon: "🩺",
  },
  {
    title: "SZAMBU MDCAT",
    subtitle: "Federal",
    description:
      "Practice SZAMBU MDCAT past papers and prepare according to the Federal testing pattern.",
    href: "/tests/mock-tests/past-papers/szambu",
    icon: "🏛️",
  },
  {
    title: "BUMHS MDCAT",
    subtitle: "Balochistan",
    description:
      "Practice BUMHS MDCAT past papers and questions from the Balochistan testing pattern.",
    href: "/tests/mock-tests/past-papers/bumhs",
    icon: "📖",
  },
];

export default function PastPapersPage() {
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
            href="/tests/mock-tests"
            className="text-sm font-semibold text-[#cdd6e6] transition hover:text-[#ff9800]"
          >
            ← Back to Mock Tests
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-4 pb-6 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff9800]">
            MDCAT Past Papers
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Choose Your Testing Authority
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#cdd6e6] md:text-lg">
            Select your province or testing authority to access relevant
            MDCAT past papers and practice questions.
          </p>
        </div>
      </section>

      {/* TESTING AUTHORITIES */}
      <section className="container mx-auto px-4 py-10 pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastPaperCategories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 text-[#0b1e39] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Decorative circle */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#fff3df] transition duration-300 group-hover:scale-110" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b1e39] text-4xl text-white">
                  {category.icon}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-black">
                  {category.title}
                </h2>

                {/* Province */}
                <div className="mt-2 inline-block rounded-full bg-[#fff3df] px-3 py-1 text-sm font-bold text-[#e38000]">
                  {category.subtitle}
                </div>

                {/* Description */}
                <p className="mt-4 leading-7 text-zinc-600">
                  {category.description}
                </p>

                {/* Button */}
                <div className="mt-7 w-full rounded-xl bg-[#ff9800] py-3.5 text-center font-bold text-[#0b1e39] transition hover:bg-[#e38000]">
                  View Past Papers →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="border-t border-[#172d4f]">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-sm text-[#8fa0b8]">
            Practice past papers. Understand the pattern. Prepare smarter.
          </p>

          <p className="mt-2 font-semibold text-[#cdd6e6]">
            STUDYING <span className="text-[#ff9800]">TACTICS</span>
          </p>
        </div>
      </section>
    </main>
  );
}