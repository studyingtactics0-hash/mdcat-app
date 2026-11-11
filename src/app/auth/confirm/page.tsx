"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ConfirmRecoveryPage() {
  const router = useRouter();
  const supabase = createClient();

  const [tokenHash, setTokenHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token_hash");
    const type = params.get("type");

    if (!token || type !== "recovery") {
      setMessage("Invalid or expired reset link. Please request a new one.");
      return;
    }

    setTokenHash(token);
  }, []);

  async function verifyRecovery() {
    if (!tokenHash) return;

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "recovery",
    });

    if (error) {
      setMessage("This reset link is invalid or expired. Please request a new one.");
      setLoading(false);
      return;
    }

    router.replace("/reset-password");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-2xl font-bold text-[#0b1e39] mb-3">
          Reset Your Password
        </h1>

        <p className="text-gray-600 mb-6">
          Click below to verify your recovery link and continue.
        </p>

        {message && (
          <p className="text-red-600 text-sm mb-4">{message}</p>
        )}

        <button
          onClick={verifyRecovery}
          disabled={!tokenHash || loading}
          className="w-full rounded-lg bg-[#0b1e39] px-4 py-3 font-semibold text-white hover:bg-[#172d4f] disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Continue to Reset Password"}
        </button>
      </div>
    </main>
  );
}