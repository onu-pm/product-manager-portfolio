"use client";

import { useEffect, useState } from "react";

type Day = { date: string; count: number; level: number };
type Week = (Day | null)[];

// GitHub's own contribution-graph palette — deliberately fixed, not a
// theme token, since the point of this section is to show exactly what
// github.com itself renders, not a version reskinned to match the site.
const LEVEL_COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

function groupIntoWeeks(days: Day[]): Week[] {
  const weeks: Week[] = [];
  let current: Week = [];
  days.forEach((day, i) => {
    const dow = new Date(`${day.date}T00:00:00Z`).getUTCDay();
    if (i === 0) {
      for (let d = 0; d < dow; d++) current.push(null);
    }
    current.push(day);
    if (dow === 6) {
      weeks.push(current);
      current = [];
    }
  });
  if (current.length) weeks.push(current);
  return weeks;
}

export default function GithubCalendar({ username }: { username: string }) {
  const [days, setDays] = useState<Day[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json();
      })
      .then((data: { contributions: Day[] }) => {
        if (!cancelled) setDays(data.contributions);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (failed) return null;

  const weeks = days ? groupIntoWeeks(days) : [];
  const total = days?.reduce((sum, d) => sum + d.count, 0) ?? null;

  return (
    <div className="github-calendar-wrap">
      <div className="github-calendar-head">
        <h3 className="github-calendar-title">Building in public</h3>
        <p className="github-calendar-sub">
          {total === null ? "Loading contributions…" : `${total} contributions in the last year`}
          {" · "}
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
            @{username}
          </a>
        </p>
      </div>

      <div className="github-calendar-scroll">
        <div className="github-calendar-grid" aria-hidden={!days}>
          {days
            ? weeks.map((week, wi) => (
                <div key={wi} className="github-calendar-col">
                  {week.map((day, di) =>
                    day ? (
                      <span
                        key={day.date}
                        className="github-calendar-cell"
                        style={{ background: LEVEL_COLORS[day.level] }}
                        title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                      />
                    ) : (
                      <span key={di} className="github-calendar-cell github-calendar-cell--empty" />
                    ),
                  )}
                </div>
              ))
            : Array.from({ length: 53 }).map((_, wi) => (
                <div key={wi} className="github-calendar-col">
                  {Array.from({ length: 7 }).map((_, di) => (
                    <span key={di} className="github-calendar-cell github-calendar-cell--empty" />
                  ))}
                </div>
              ))}
        </div>
      </div>

      <div className="github-calendar-legend">
        <span>Less</span>
        {LEVEL_COLORS.map((c) => (
          <span key={c} className="github-calendar-cell" style={{ background: c }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
