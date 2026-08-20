export default function TestsPage() {
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
              href="/"
              className="text-sm font-semibold text-[#cdd6e6] hover:text-[#ff9800]"
            >
              ← Back to Home
            </a>
          </div>
        </header>
  
        {/* PAGE TITLE */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-[#ff9800] font-semibold uppercase tracking-wider text-sm">
              MDCAT Preparation
            </p>
  
            <h1 className="text-4xl md:text-5xl font-black mt-2">
              Choose Your Test
            </h1>
  
            <p className="text-[#cdd6e6] max-w-2xl mx-auto mt-4">
              Practice chapter-wise, subject-wise and full-syllabus MDCAT tests
              designed to improve your preparation.
            </p>
          </div>
  
          {/* TEST CATEGORIES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
  
            {/* BIOLOGY */}
            <div className="bg-white rounded-2xl p-7 text-[#0b1e39] shadow-lg">
              <div className="text-4xl mb-4">🧬</div>
  
              <h2 className="text-2xl font-bold">
                Biology
              </h2>
  
              <p className="text-zinc-600 mt-2">
                Practice Biology MCQs chapter by chapter.
              </p>
  
              <a
  href="/tests/Biology"
  className="mt-6 w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-bold py-3 rounded-xl transition block text-center"
>
  View Biology Tests
              </a>
            </div>
  
            {/* CHEMISTRY */}
            <div className="bg-white rounded-2xl p-7 text-[#0b1e39] shadow-lg">
              <div className="text-4xl mb-4">⚗️</div>
  
              <h2 className="text-2xl font-bold">
                Chemistry
              </h2>
  
              <p className="text-zinc-600 mt-2">
                Strengthen Chemistry with focused MDCAT practice.
              </p>
  
              <button className="mt-6 w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-bold py-3 rounded-xl transition">
                View Chemistry Tests
              </button>
            </div>
  
            {/* PHYSICS */}
            <div className="bg-white rounded-2xl p-7 text-[#0b1e39] shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
  
              <h2 className="text-2xl font-bold">
                Physics
              </h2>
  
              <p className="text-zinc-600 mt-2">
                Practice concepts, formulas and MDCAT-style Physics MCQs.
              </p>
  
              <button className="mt-6 w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-bold py-3 rounded-xl transition">
                View Physics Tests
              </button>
            </div>
  
            {/* ENGLISH */}
            <div className="bg-white rounded-2xl p-7 text-[#0b1e39] shadow-lg">
              <div className="text-4xl mb-4">📖</div>
  
              <h2 className="text-2xl font-bold">
                English
              </h2>
  
              <p className="text-zinc-600 mt-2">
                Improve grammar, vocabulary and MDCAT English skills.
              </p>
  
              <button className="mt-6 w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-bold py-3 rounded-xl transition">
                View English Tests
              </button>
            </div>
  
            {/* LOGICAL REASONING */}
            <div className="bg-white rounded-2xl p-7 text-[#0b1e39] shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
  
              <h2 className="text-2xl font-bold">
                Logical Reasoning
              </h2>
  
              <p className="text-zinc-600 mt-2">
                Sharpen your reasoning and problem-solving skills.
              </p>
  
              <button className="mt-6 w-full bg-[#ff9800] hover:bg-[#e38000] text-[#0b1e39] font-bold py-3 rounded-xl transition">
                View Reasoning Tests
              </button>
            </div>
  
            {/* FULL MOCK */}
            <div className="bg-[#ff9800] rounded-2xl p-7 text-[#0b1e39] shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
  
              <h2 className="text-2xl font-black">
                Full MDCAT Mock
              </h2>
  
              <p className="mt-2 font-medium">
                Simulate the real MDCAT experience with a complete mock test.
              </p>
  
              <a
  href="/tests/mock-test-1"
  className="mt-6 w-full bg-[#0b1e39] hover:bg-[#13294b] text-white font-bold py-3 rounded-xl transition block text-center"
>
  Start Full Mock
</a>
            </div>
  
          </div>
        </section>
      </main>
    );
  }