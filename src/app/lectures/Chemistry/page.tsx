"use client";

import { useRouter } from "next/navigation";

const chapters = [
  {
    number: 1,
    name: "Introduction to Fundamental Concepts of Chemistry",
    emoji: "🧪",
    description: "Basic concepts, measurements, matter and chemical calculations",
    color: "bg-purple-50 border-purple-200",
    iconColor: "bg-purple-100",
    numberColor: "bg-purple-600",
    textColor: "text-purple-700",
  },
  {
    number: 2,
    name: "Atomic Structure",
    emoji: "⚛️",
    description: "Atoms, subatomic particles, isotopes and electronic structure",
    color: "bg-cyan-50 border-cyan-200",
    iconColor: "bg-cyan-100",
    numberColor: "bg-cyan-600",
    textColor: "text-cyan-700",
  },
  {
    number: 3,
    name: "Gases",
    emoji: "💨",
    description: "Gas laws, kinetic theory and properties of gases",
    color: "bg-sky-50 border-sky-200",
    iconColor: "bg-sky-100",
    numberColor: "bg-sky-600",
    textColor: "text-sky-700",
  },
  {
    number: 4,
    name: "Liquids",
    emoji: "💧",
    description: "Properties, behavior and intermolecular forces in liquids",
    color: "bg-blue-50 border-blue-200",
    iconColor: "bg-blue-100",
    numberColor: "bg-blue-600",
    textColor: "text-blue-700",
  },
  {
    number: 5,
    name: "Solids",
    emoji: "🧊",
    description: "Crystal structures, solids and their properties",
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "bg-indigo-100",
    numberColor: "bg-indigo-600",
    textColor: "text-indigo-700",
  },
  {
    number: 6,
    name: "Chemical Equilibrium",
    emoji: "⚖️",
    description: "Reversible reactions, equilibrium constants and Le Chatelier's principle",
    color: "bg-amber-50 border-amber-200",
    iconColor: "bg-amber-100",
    numberColor: "bg-amber-600",
    textColor: "text-amber-700",
  },
  {
    number: 7,
    name: "Reaction Kinetics",
    emoji: "⏱️",
    description: "Reaction rates, factors affecting reactions and rate laws",
    color: "bg-orange-50 border-orange-200",
    iconColor: "bg-orange-100",
    numberColor: "bg-orange-600",
    textColor: "text-orange-700",
  },
  {
    number: 8,
    name: "Thermo Chemistry",
    emoji: "🔥",
    description: "Heat, energy changes, enthalpy and thermochemical reactions",
    color: "bg-red-50 border-red-200",
    iconColor: "bg-red-100",
    numberColor: "bg-red-600",
    textColor: "text-red-700",
  },
  {
    number: 9,
    name: "Electro Chemistry",
    emoji: "🔋",
    description: "Electrochemical cells, oxidation, reduction and batteries",
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "bg-yellow-100",
    numberColor: "bg-yellow-500",
    textColor: "text-yellow-700",
  },
  {
    number: 10,
    name: "Chemical Bonding",
    emoji: "🔗",
    description: "Ionic, covalent, metallic bonds and molecular geometry",
    color: "bg-pink-50 border-pink-200",
    iconColor: "bg-pink-100",
    numberColor: "bg-pink-600",
    textColor: "text-pink-700",
  },
  {
    number: 11,
    name: "S-and-P Block Elements",
    emoji: "🧩",
    description: "Properties and reactions of s-block and p-block elements",
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "bg-emerald-100",
    numberColor: "bg-emerald-600",
    textColor: "text-emerald-700",
  },
  {
    number: 12,
    name: "Transition Elements",
    emoji: "🔬",
    description: "Transition metals, complexes and their chemical properties",
    color: "bg-violet-50 border-violet-200",
    iconColor: "bg-violet-100",
    numberColor: "bg-violet-600",
    textColor: "text-violet-700",
  },
  {
    number: 13,
    name: "Fundamental Principles of Chemistry",
    emoji: "📐",
    description: "Core principles and calculations used throughout chemistry",
    color: "bg-teal-50 border-teal-200",
    iconColor: "bg-teal-100",
    numberColor: "bg-teal-600",
    textColor: "text-teal-700",
  },
  {
    number: 14,
    name: "Chemistry of HydroCarbons",
    emoji: "🛢️",
    description: "Alkanes, alkenes, alkynes and aromatic hydrocarbons",
    color: "bg-lime-50 border-lime-200",
    iconColor: "bg-lime-100",
    numberColor: "bg-lime-600",
    textColor: "text-lime-700",
  },
  {
    number: 15,
    name: "Alkyl Halides",
    emoji: "🧫",
    description: "Structure, reactions and properties of alkyl halides",
    color: "bg-fuchsia-50 border-fuchsia-200",
    iconColor: "bg-fuchsia-100",
    numberColor: "bg-fuchsia-600",
    textColor: "text-fuchsia-700",
  },
  {
    number: 16,
    name: "Alcohol and Phenol",
    emoji: "🍶",
    description: "Structure, properties and reactions of alcohols and phenols",
    color: "bg-rose-50 border-rose-200",
    iconColor: "bg-rose-100",
    numberColor: "bg-rose-600",
    textColor: "text-rose-700",
  },
  {
    number: 17,
    name: "Aldehyde and Ketones",
    emoji: "🧴",
    description: "Carbonyl compounds, properties and important reactions",
    color: "bg-orange-50 border-orange-200",
    iconColor: "bg-orange-100",
    numberColor: "bg-orange-600",
    textColor: "text-orange-700",
  },
  {
    number: 18,
    name: "Carboxylic Acids",
    emoji: "🍋",
    description: "Structure, acidity, properties and reactions of carboxylic acids",
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "bg-yellow-100",
    numberColor: "bg-yellow-500",
    textColor: "text-yellow-700",
  },
  {
    number: 19,
    name: "Macromolecules",
    emoji: "🧬",
    description: "Polymers and important biological macromolecules",
    color: "bg-green-50 border-green-200",
    iconColor: "bg-green-100",
    numberColor: "bg-green-600",
    textColor: "text-green-700",
  },
  {
    number: 20,
    name: "Industrial Chemistry",
    emoji: "🏭",
    description: "Industrial processes, products and applications of chemistry",
    color: "bg-stone-50 border-stone-200",
    iconColor: "bg-stone-100",
    numberColor: "bg-stone-600",
    textColor: "text-stone-700",
  },
];

export default function ChemistryLecturesPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0b1e39] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

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
            🧪
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Chemistry Lectures
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#ff9800]" />

          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Choose a chapter and start learning Chemistry for MDCAT
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ff9800] px-5 py-2 text-sm font-bold text-white shadow-lg">
            🧪 20 Chapters
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-white">
            Chemistry Chapters
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Select a chapter to access its lectures
          </p>
        </div>

        {/* Chapter Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <button
              key={chapter.number}
              onClick={() =>
                router.push(
                  `/lectures/Chemistry/${chapter.name
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
                <span>View Lectures</span>

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
            🧪 Learn • Practice • Improve • Succeed
          </p>

          <p className="mt-1 text-xs text-gray-600">
            Studying Tactics
          </p>
        </div>

      </div>
    </main>
  );
}