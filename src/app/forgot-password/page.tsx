
"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError(false);
    setShowPopup(false);

    try {
      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });

      if (resetError) {
        setError(true);
        setMessage(resetError.message);
      } else {
        setShowPopup(true);
      }
    } catch (err) {
      console.error("Password reset error:", err);
      setError(true);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-3xl bg-white p-7 sm:p-10 shadow-2xl border border-gray-100">

        <div className="flex justify-center mb-8">
          <img
            src="/logo.jpg"
            alt="Studying Tactics"
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="text-center mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#f58220] mb-2">
            Student Portal
          </p>

          <h1 className="text-3xl font-extrabold text-[#0b1e39]">
            Forgot Password?
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Enter your registered email address and we will send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[#0b1e39]"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              autoComplete="email"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-[#0b1e39] placeholder:text-gray-400 focus:border-[#f58220] focus:bg-white focus:ring-2 focus:ring-[#f58220]/20"
            />
          </div>

          {message && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3"
            >
              <p className="text-sm leading-5 text-red-700">
                {message}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#0b1e39] px-4 py-3.5 font-bold text-white shadow-md transition hover:bg-[#10294d] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Send Reset Link"}
          </button>
        </form>

        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-7 text-center shadow-2xl">

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-3xl text-green-600">✓</span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#0b1e39]">
                Check Your Email
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                If an account exists with this email, a password reset link will be sent. Please check your inbox and spam folder.
              </p>

              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="mt-6 w-full rounded-xl bg-[#0b1e39] px-4 py-3 font-bold text-white hover:bg-[#10294d]"
              >
                OK
              </button>

            </div>
          </div>
        )}

        <div className="mt-7 text-center">
          <Link
            href="/login"
            className="text-sm font-bold text-[#f58220] hover:underline"
          >
            Back to Login
          </Link>
        </div>

        <p className="mt-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} STUDYING TACTICS
        </p>

      </div>
    </main>
  );
}
