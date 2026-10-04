"use client";

import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on Home or Login
  if (pathname === "/" || pathname === "/login") {
    return null;
  }

  return (
    <div className="bg-[#0b1e39] px-4 py-3">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2.5 text-base font-semibold text-white transition hover:bg-white/25 active:scale-95"
      >
        <span className="text-xl leading-none">←</span>
        <span>Back</span>
      </button>
    </div>
  );
}