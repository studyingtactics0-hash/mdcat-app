
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    async function verifyRecoverySession() {
      const params = new URLSearchParams(window.location.search);
      const recoveryError = params.get("error");
  
      if (recoveryError) {
        setMessage(
          "Your reset link is invalid or expired. Please request a new one."
        );
        setSessionReady(false);
        return;
      }
  
      const { data, error } = await supabase.auth.getSession();
  
      if (error || !data.session) {
        setMessage(
          "Your recovery session is missing. Please request a new reset link."
        );
        setSessionReady(false);
        return;
      }
  
      setSessionReady(true);
    }
  
    verifyRecoverySession();
  }, [supabase]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");
    setSuccess(false);

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setMessage(error.message);
      } else {
        setSuccess(true);
        setMessage(
          "Your password has been updated successfully. You can now log in with your new password."
        );
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.error("Password update error:", err);
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
            Reset Password
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Enter your new password below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-[#0b1e39]"
            >
              New Password
            </label>

            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              autoComplete="new-password"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-[#0b1e39] placeholder:text-gray-400 focus:border-[#f58220] focus:bg-white focus:ring-2 focus:ring-[#f58220]/20"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-semibold text-[#0b1e39]"
            >
              Confirm New Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              required
              minLength={6}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              autoComplete="new-password"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-[#0b1e39] placeholder:text-gray-400 focus:border-[#f58220] focus:bg-white focus:ring-2 focus:ring-[#f58220]/20"
            />
          </div>

          {message && (
            <div
              role="status"
              className={`rounded-xl border px-4 py-3 ${
                success
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <p className="text-sm leading-5 text-gray-700">
                {message}
              </p>
            </div>
          )}

          {!success && (
            <button
              type="submit"
              disabled={loading || !sessionReady}
              className="w-full rounded-xl bg-[#0b1e39] px-4 py-3.5 font-bold text-white shadow-md transition hover:bg-[#10294d] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Updating Password..." : "Update Password"}
            </button>
          )}
        </form>

        {success && (
          <Link
            href="/login"
            className="mt-5 block w-full rounded-xl bg-[#0b1e39] px-4 py-3.5 text-center font-bold text-white hover:bg-[#10294d]"
          >
            Go to Login
          </Link>
        )}

        {!success && (
          <div className="mt-7 text-center">
            <Link
              href="/login"
              className="text-sm font-bold text-[#f58220] hover:underline"
            >
              Back to Login
            </Link>
          </div>
        )}

        <p className="mt-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} STUDYING TACTICS
        </p>
      </div>
    </main>
  );
}
