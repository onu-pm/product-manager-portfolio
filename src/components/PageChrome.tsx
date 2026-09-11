"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

// The home dashboard must never scroll: it reserves its own bottom padding
// (for dock clearance) inside Bento's fixed-height section. Every other
// route scrolls normally and needs both the padding and the footer here.
export default function PageChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <main key={pathname} className={`page-transition ${isHome ? "flex-1" : "flex-1 pb-28"}`}>
        {children}
      </main>
      {!isHome && <Footer />}
    </>
  );
}
