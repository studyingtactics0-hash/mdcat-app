export default function PhysicsPage() {
    const chapters = [
      {
        name: "Vectors and Equilibrium",
        tests: 5,
        icon: "🧭",
        link: "/tests/Physics/vector-and-equilibrium",
      },
      {
        name: "Force and Motion",
        tests: 5,
        icon: "🏃",
        link: "/tests/Physics/force-and-motion",
      },
      {
        name: "Work and Energy",
        tests: 5,
        icon: "⚡",
        link: "/tests/Physics/work-and-energy",
      },
      {
        name: "Rotational and Circular Motion",
        tests: 5,
        icon: "🔄",
        link: "/tests/Physics/rotational-and-circular-motion",
      },
      {
        name: "Fluid Dynamics",
        tests: 5,
        icon: "💧",
        link: "/tests/Physics/fluid-dynamics",
      },
      {
        name: "Waves",
        tests: 5,
        icon: "🌊",
        link: "/tests/Physics/waves",
      },
      {
        name: "Thermodynamics",
        tests: 5,
        icon: "🌡️",
        link: "/tests/Physics/thermodynamics",
      },
      {
        name: "Electrostatics",
        tests: 5,
        icon: "⚡",
        link: "/tests/Physics/electrostatics",
      },
      {
        name: "Current Electricity",
        tests: 5,
        icon: "🔌",
        link: "/tests/Physics/current-electricity",
      },
      {
        name: "Electromagnetism",
        tests: 5,
        icon: "🧲",
        link: "/tests/Physics/electromagnetism",
      },
      {
        name: "Electromagnetic Induction",
        tests: 5,
        icon: "🔋",
        link: "/tests/Physics/electromagnetic-induction",
      },
      {
        name: "Alternating Current",
        tests: 5,
        icon: "〰️",
        link: "/tests/Physics/alternating-current",
      },
      {
        name: "Electronics",
        tests: 5,
        icon: "💻",
        link: "/tests/Physics/electronics",
      },
      {
        name: "Dawn of Modern Physics",
        tests: 5,
        icon: "🌌",
        link: "/tests/Physics/dawn-of-modern-physics",
      },
      {
        name: "Atomic Spectra",
        tests: 5,
        icon: "✨",
        link: "/tests/Physics/atomic-spectra",
      },
      {
        name: "Nuclear Physics",
        tests: 5,
        icon: "☢️",
        link: "/tests/Physics/nuclear-physics",
      },
    ];
  
    return (
      <main className="min-h-screen bg-[#0b1e39] text-white">
        {/* HEADER */}
        <header className="border-b border-[#172d4f]">
          <div className="container mx-auto px-4 py-5 flex items-center justify-between">
            <a
              href="/"
              className="text-2xl font-black tracking-tight"
            >
              STUDYING <span className="text-[#ff9800]">TACTICS</span>
            </a>
  
            <a
              href="/tests"
              className="text-sm font-semibold text-[#cdd6e6] hover:text-[#ff9800]"
            >
              ← Back to Tests
            </a>
          </div>
        </header>
  
        {/* TITLE */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-[#ff9800] font-semibold uppercase tracking-wider text-sm">
              MDCAT Physics
            </p>
  
            <h1 className="text-4xl md:text-5xl font-black mt-2">
              Physics Tests
            </h1>
  
            <p className="text-[#cdd6e6] max-w-2xl mx-auto mt-4">
              Select a chapter to practice Physics MCQs and improve your MDCAT
              preparation.
            </p>
          </div>
  
          {/* QUICK TEST OPTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-10">
            <div className="bg-[#ff9800] text-[#0b1e39] rounded-2xl p-6 shadow-lg">
              <div className="text-3xl">📝</div>
  
              <h2 className="text-xl font-black mt-3">
                Chapter Tests
              </h2>
  
              <p className="text-sm mt-2 font-medium">
                Practice individual chapters.
              </p>
            </div>
  
            <div className="bg-white text-[#0b1e39] rounded-2xl p-6 shadow-lg">
              <div className="text-3xl">📚</div>
  
              <h2 className="text-xl font-black mt-3">
                Subject Test
              </h2>
  
              <p className="text-sm text-zinc-600 mt-2">
                Test yourself on the complete Physics syllabus.
              </p>
            </div>
  
            <div className="bg-white text-[#0b1e39] rounded-2xl p-6 shadow-lg">
              <div className="text-3xl">🏆</div>
  
              <h2 className="text-xl font-black mt-3">
                Physics Mock
              </h2>
  
              <p className="text-sm text-zinc-600 mt-2">
                Attempt a timed MDCAT-style Physics mock.
              </p>
            </div>
          </div>
  
          {/* CHAPTERS */}
          <div className="mt-14">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-2xl md:text-3xl font-bold">
                Chapters
              </h2>
  
              <span className="text-[#cdd6e6] text-sm">
                {chapters.length} Chapters
              </span>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.name}
                  className="bg-white text-[#0b1e39] rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">
                      {chapter.icon}
                    </div>
  
                    <span className="text-xs font-bold bg-[#e9ecef] px-3 py-1 rounded-full">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
  
                  <h3 className="text-xl font-bold mt-4">
                    {chapter.name}
                  </h3>
  
                  <p className="text-zinc-600 text-sm mt-2">
                    {chapter.tests} practice tests available
                  </p>
  
                  <a
                    href={chapter.link}
                    className="mt-5 w-full bg-[#0b1e39] hover:bg-[#13294b] text-white font-semibold py-3 rounded-xl transition text-center block"
                  >
                    View Tests
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }