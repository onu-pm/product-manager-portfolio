"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import HomeFooter from "@/components/HomeFooter";

// The home dashboard locks to one screen only where .home-section itself
// does (min-width:640px and min-height:660px) — below that it already
// scrolls on its own, same as every other page. Both footers render for
// home; globals.css shows exactly one of them per that same breakpoint,
// so the CSS is the single source of truth for which case is active
// rather than duplicating the condition here in JS.
export default function PageChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <main key={pathname} className={`page-transition flex-1 ${isHome ? "home-main-pb" : "pb-28"}`}>
        {children}
      </main>
      {isHome ? (
        <>
          <HomeFooter />
          <div className="home-footer-fallback">
            <Footer />
          </div>
        </>
      ) : (
        <Footer />
      )}
    </>
  );
}
