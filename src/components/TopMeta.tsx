"use client";

import { useEffect, useState } from "react";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Fixed top-right chip: day, date, location. Client-only (renders nothing
// until mount) so the server-rendered markup never guesses "today" and
// mismatches the visitor's actual clock on hydration.
export default function TopMeta() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  return (
    <div
      className="fixed right-6 top-6 z-50 hidden items-center gap-2 rounded-full border border-plum-100 bg-paper-raised px-3.5 py-2 text-xs font-medium text-ink-secondary md:inline-flex"
      aria-hidden="true"
    >
      <span>{DAYS[now.getDay()]}</span>
      <span className="h-0.5 w-0.5 rounded-full bg-ink-tertiary" />
      <span>
        {now.getDate()} {MONTHS[now.getMonth()]}
      </span>
      <span className="h-0.5 w-0.5 rounded-full bg-ink-tertiary" />
      <span>Bangalore</span>
    </div>
  );
}
