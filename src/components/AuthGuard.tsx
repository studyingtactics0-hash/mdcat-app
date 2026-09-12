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
    const checkAuth = async () => {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      // Login page must always remain accessible
      if (pathname === "/login") {
        setChecking(false);
        return;
      }

      if (!user) {
        const next = pathname || "/";

        router.replace(
          `/login?next=${encodeURIComponent(next)}`
        );

        return;
      }

      setChecking(false);
    };

    checkAuth();
  }, [pathname, router]);

  // Prevent protected page from briefly appearing
  // before authentication is checked.
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