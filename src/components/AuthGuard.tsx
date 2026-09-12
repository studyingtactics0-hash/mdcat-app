"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    let mounted = true;

    const checkAuth = async () => {
      // Login page must always remain accessible
      if (pathname === "/login") {
        if (mounted) {
          setChecking(false);
        }
        return;
      }

      // Get the current session first.
      // This waits for Supabase to restore the browser session.
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      if (!session?.user) {
        const next = pathname || "/";
        router.replace(`/login?next=${encodeURIComponent(next)}`);
        return;
      }

      setChecking(false);
    };

    checkAuth();

    // Keep AuthGuard synchronized with Supabase authentication changes.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;

      // Ignore the initial session event because checkAuth()
      // already handles the initial authentication check.
      if (event === "INITIAL_SESSION") {
        if (session?.user) {
          setChecking(false);
        }
        return;
      }

      if (event === "SIGNED_IN" && session?.user) {
        setChecking(false);
        return;
      }

      if (event === "SIGNED_OUT") {
        if (pathname !== "/login") {
          const next = pathname || "/";
          router.replace(`/login?next=${encodeURIComponent(next)}`);
        }
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [pathname, router]);

  // Don't show protected pages until authentication has been checked.
  if (checking && pathname !== "/login") {
    return (
      <main className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">
        <div className="text-center">
          <img
            src="/logo.jpg"
            alt="Studying Tactics"
            className="mx-auto h-16 w-auto object-contain"
          />

          <p className="mt-5 text-sm font-semibold text-[#0b1e39]">
            Checking your account...
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}