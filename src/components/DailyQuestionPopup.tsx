
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DailyQuestionPopup() {
  const pathname = usePathname();
  const checked = useRef(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    if (checked.current || pathname === "/question-of-the-day") {
      return;
    }

    async function checkDailyQuestion() {
      try {
        const response = await fetch("/api/daily-question", {
          cache: "no-store",
        });

        // Student may not be logged in yet.
        if (response.status === 401) return;

        if (!response.ok) {
          throw new Error("Unable to check daily question.");
        }

        const data = await response.json();

        checked.current = true;

        if (!data.attempted && data.question) {
          setSubject(data.question.subject);
          setPopupOpen(true);
        }
      } catch (error) {
        console.error("Daily question popup error:", error);
      }
    }

    checkDailyQuestion();
  }, [pathname]);

  if (!popupOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center relative">
        <button
          onClick={() => setPopupOpen(false)}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-900 text-2xl"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="text-5xl mb-4">💡</div>

        <h2 className="text-2xl font-bold text-[#0b1e39]">
          Question of the Day!
        </h2>

        <p className="text-gray-600 mt-3">
          Your daily MDCAT challenge is waiting!
        </p>

        <div className="bg-orange-50 rounded-lg p-4 mt-5">
          <p className="text-[#0b1e39] font-bold">{subject}</p>
          <p className="text-gray-600 text-sm mt-1">
            Test your knowledge with today's MCQ.
          </p>
        </div>

        <Link
          href="/question-of-the-day"
          onClick={() => setPopupOpen(false)}
          className="block w-full mt-5 bg-[#ff9800] hover:bg-orange-500 text-[#0b1e39] font-bold py-3 rounded-lg transition"
        >
          Let's Attempt!
        </Link>

        <button
          onClick={() => setPopupOpen(false)}
          className="mt-3 text-sm text-gray-500 hover:text-gray-800"
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}
