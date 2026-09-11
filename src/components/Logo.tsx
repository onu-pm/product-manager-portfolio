import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/content";

export default function Logo() {
  return (
    <Link href="/" className="logo-mark fixed left-6 top-6 z-50 inline-flex" aria-label={profile.name}>
      {/* Two cuts of the wordmark, swapped by CSS on data-theme rather than in
          JS — the theme is only known client-side, so branching the markup on
          it would mismatch on hydration. Both sit on transparent ground so the
          mark reads directly on the page, with no chip behind it. */}
      <Image
        src="/wordmark-light.png"
        alt={profile.name}
        width={1440}
        height={400}
        priority
        className="logo-on-light h-6 w-auto md:h-7"
      />
      <Image
        src="/wordmark-dark.png"
        alt=""
        aria-hidden
        width={1440}
        height={400}
        priority
        className="logo-on-dark h-6 w-auto md:h-7"
      />
    </Link>
  );
}
