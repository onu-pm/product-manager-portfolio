import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/content";

export default function Logo() {
  return (
    <Link
      href="/"
      className="fixed left-6 top-6 z-50 inline-flex items-center rounded-xl bg-[#FAFAF5] px-2.5 py-1.5 shadow-sm ring-1 ring-black/5 transition-transform hover:scale-105"
      aria-label={profile.name}
    >
      {/* The source logo file has its own opaque cream background, so it's
          wrapped in a matching chip rather than shown raw (which would look
          like a stray white box in dark mode). */}
      <Image src="/logo.png" alt={profile.name} width={155} height={34} priority className="h-5 w-auto md:h-6" />
    </Link>
  );
}
