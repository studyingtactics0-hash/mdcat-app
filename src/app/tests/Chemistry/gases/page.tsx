export default function GasesPage() {
    const tests = [
      {
        title: "Gases — Test 1",
        questions: 20,
        time: 20,
        difficulty: "Basic",
        link: "/tests/Chemistry/gases/test-1",
      },
      {
        title: "Gases — Test 2",
        questions: 35,
        time: 35,
        difficulty: "Moderate",
        link: "/tests/Chemistry/gases/test-2",
      },
      {
        title: "Gases — Test 3",
        questions: 50,
        time: 50,
        difficulty: "MDCAT",
        link: "/tests/Chemistry/gases/test-3",
      },
      {
        title: "Gases — Test 4",
        questions: 50,
        time: 50,
        difficulty: "MDCAT",
        link: "/tests/Chemistry/gases/test-4",
      },
      {
        title: "Gases — Test 5",
        questions: 50,
        time: 50,
        difficulty: "MDCAT",
        link: "/tests/Chemistry/gases/test-5",
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
              STUDYING{" "}
              <span className="text-[#ff9800]">
                TACTICS
              </span>
            </a>
  
            <a
              href="/tests/Chemistry"
              className="text-sm font-semibold text-[#cdd6e6] hover:text-[#ff9800] transition"
            >
              ← Back to Chemistry
            </a>
          </div>
        </header>
  
        {/* PAGE CONTENT */}
        <section className="container mx-auto px-4 py-12">
          {/* TITLE */}
          <div className="text-center">
            <p className="text-[#ff9800] font-semibold uppercase tracking-wider text-sm">
              Chemistry
            </p>
  
            <h1 className="text-4xl md:text-5xl font-black mt-2">
              Gases
            </h1>
  
            <p className="text-[#cdd6e6] max-w-2xl mx-auto mt-4">
              Choose a test and challenge yourself with MDCAT-style
              questions.
            </p>
          </div>
  
          {/* TEST LIST */}
          <div className="max-w-4xl mx-auto mt-12 space-y-5">
            {tests.map((test, index) => (
              <div
                key={test.title}
                className="bg-white text-[#0b1e39] rounded-2xl p-6 md:p-7 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-5"
              >
                {/* TEST INFORMATION */}
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-[#e9ecef] rounded-full px-3 py-1 text-xs font-bold">
                      TEST {index + 1}
                    </span>
  
                    <span className="bg-[#fff3e0] text-[#e38000] rounded-full px-3 py-1 text-xs font-bold">
                      {test.difficulty}
                    </span>
                  </div>
  
                  <h2 className="text-xl md:text-2xl font-bold mt-3">
                    {test.title}
                  </h2>
  
                  <div className="flex flex-wrap gap-5 text-sm text-zinc-600 mt-2">
                    <span>
                      📝 {test.questions} Questions
                    </span>
  
                    <span>
                      ⏱️ {test.time} Minutes
                    </span>
                  </div>
                </div>
  
                {/* ACTION BUTTON */}
                <a
                  href={test.link}
                  className="bg-[#ff9800] text-[#0b1e39] font-bold px-7 py-3 rounded-xl whitespace-nowrap text-center hover:bg-[#ffa726] transition"
                >
                  Start Test →
                </a>
              </div>
            ))}
          </div>
  
          {/* INFORMATION CARD */}
          <div className="max-w-4xl mx-auto mt-10 bg-[#142542] border border-[#243b60] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-[#ff9800]">
              Before you start
            </h3>
  
            <ul className="mt-3 space-y-2 text-sm text-[#cdd6e6]">
              <li>
                • Each question has one correct answer.
              </li>
  
              <li>
                • The timer will start when you begin the test.
              </li>
  
              <li>
                • Your score will be calculated automatically.
              </li>
  
              <li>
                • You will be able to review your answers after submission.
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }