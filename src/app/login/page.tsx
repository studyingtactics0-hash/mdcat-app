"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log(
      "Supabase publishable key exists:",
      !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
    console.log(
      "Supabase key length:",
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.length
    );
    console.log(
      "Supabase key has whitespace:",
      /\s/.test(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "")
    );
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    if (isSignup) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      console.log("SIGNUP DATA:", data);
      console.log("SIGNUP ERROR:", error);

      if (error) {
        setMessage(`Signup error: ${error.message}`);
      } else {
        setMessage(
          "Account created successfully. Please check your email if confirmation is required."
        );
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
      } else {
        window.location.href = "/";
      }
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
        <div className="grid md:grid-cols-2">

          {/* LEFT BRANDING SECTION */}
          <div className="hidden md:flex relative overflow-hidden bg-[#0b1e39] p-10 text-white flex-col justify-between">
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#f58220] opacity-20" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#f58220] opacity-10" />

            <div className="relative z-10">
              {/* ST Logo */}
              <div className="mb-10">
  <img
    src="/logo.jpg"
    alt="Studying Tactics"
    className="h-20 w-auto object-contain"
  />
</div>

              <h2 className="text-4xl font-extrabold leading-tight">
                Prepare smarter.
                <br />
                <span className="text-[#f58220]">
                  Perform better.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-blue-100">
                Your dedicated MDCAT preparation platform for practice,
                revision and mock tests.
              </p>
            </div>

            <div className="relative z-10 mt-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-[#f58220]">
                  STUDYING TACTICS
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Stay consistent. Practice regularly. Track your progress.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT LOGIN SECTION */}
          <div className="p-7 sm:p-10 md:p-12">

            {/* Mobile Logo */}
            <div className="mb-8 flex justify-center md:hidden">
  <img
    src="/logo.jpg"
    alt="Studying Tactics"
    className="h-16 w-auto object-contain"
  />
</div>

            {/* Heading */}
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#f58220]">
                Student Portal
              </p>

              <h1 className="text-3xl font-extrabold text-[#0b1e39] sm:text-4xl">
                {isSignup ? "Create your account" : "Welcome back"}
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {isSignup
                  ? "Create your MDCAT student account and start preparing."
                  : "Login to continue your MDCAT preparation."}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {isSignup && (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0b1e39]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-[#0b1e39] placeholder:text-gray-400 focus:border-[#f58220] focus:bg-white focus:ring-2 focus:ring-[#f58220]/20"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0b1e39]">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-[#0b1e39] placeholder:text-gray-400 focus:border-[#f58220] focus:bg-white focus:ring-2 focus:ring-[#f58220]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0b1e39]">
                  Password
                </label>

                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-[#0b1e39] placeholder:text-gray-400 focus:border-[#f58220] focus:bg-white focus:ring-2 focus:ring-[#f58220]/20"
                />
              </div>

              {/* Message */}
              {message && (
                <div className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3">
                  <p className="text-sm leading-5 text-gray-600">
                    {message}
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#0b1e39] px-4 py-3.5 font-bold text-white shadow-md transition hover:bg-[#10294d] hover:shadow-lg active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Please wait..."
                  : isSignup
                    ? "Create Account"
                    : "Login"}
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Toggle */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>

              <button
                type="button"
                onClick={() => {
                  setIsSignup(!isSignup);
                  setMessage("");
                }}
                className="mt-2 text-sm font-bold text-[#f58220] transition hover:text-[#d9680d] hover:underline"
              >
                {isSignup
                  ? "Login to your account"
                  : "Create a student account"}
              </button>
            </div>

            {/* Footer */}
            <p className="mt-10 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} STUDYING TACTICS
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}