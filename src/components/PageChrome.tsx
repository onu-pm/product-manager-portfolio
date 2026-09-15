"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import HomeFooter from "@/components/HomeFooter";

// Same footer treatment on every page, not just home: a fixed bar stacked
// above the dock at min-width:640px/min-height:660px, falling back to the
// normal in-flow Footer (with its own back-to-top button) below that.
// globals.css's .home-footer-bar / .home-footer-fallback media query is
// the single source of truth for which one is visible at a given size.
// Only the home dashboard's own locked layout needs main's bottom padding
// zeroed at that breakpoint (it reserves dock clearance internally); every
// other page keeps pb-28 always, so content never sits under the fixed bar.
export default function PageChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <main key={pathname} className={`page-transition flex-1 ${isHome ? "home-main-pb" : "pb-28"}`}>
        {children}
      </main>
      <HomeFooter />
      <div className="home-footer-fallback">
        <Footer />
      </div>
    </>
  );
}
