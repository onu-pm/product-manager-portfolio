"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Portfolio inquiry from ${name}`,
          from_name: profile.name,
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="page-shell py-14">
      <div className="mx-auto max-w-2xl text-center">
        <h2>
          <span>If this sounds right,</span> <span className="marker-highlight">let&apos;s talk.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink/70">
          A short conversation is usually enough to see if there&apos;s a fit.
        </p>
      </div>

      {/* Two equal, titled ways in, side by side — a form for someone who'd
          rather write a note, and direct links for someone who already
          knows which channel they want. */}
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="contact-panel">
          <h3 className="card-title">Let&apos;s start simple</h3>
          {status === "sent" ? (
            <div className="mt-6 rounded-xl border border-plum-100 bg-paper p-6 text-center">
              <p className="text-lg font-semibold text-ink">Thanks, that&apos;s in.</p>
              <p className="mt-2 text-sm text-ink/70">
                I read every message myself and will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
              <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink/80">
                Name
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="rounded-lg border border-plum-200 px-3.5 py-2.5 text-[15px] font-normal text-ink outline-none placeholder:text-ink/40 focus:border-plum-500"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink/80">
                Email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="rounded-lg border border-plum-200 px-3.5 py-2.5 text-[15px] font-normal text-ink outline-none placeholder:text-ink/40 focus:border-plum-500"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink/80">
                What&apos;s going on?
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="A few sentences about the role or the problem you're solving."
                  className="rounded-lg border border-plum-200 px-3.5 py-2.5 text-[15px] font-normal leading-relaxed text-ink outline-none placeholder:text-ink/40 focus:border-plum-500"
                />
              </label>
              <label className="flex items-start gap-2 text-xs leading-relaxed text-ink/70">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-plum-600"
                />
                I consent to being contacted about the message above.
              </label>
              <button
                type="submit"
                disabled={status === "sending" || !consent}
                className="btn-primary mt-1 px-7 py-3 text-sm disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send it over"}
              </button>
              {status === "error" && (
                <p className="text-center text-xs font-semibold text-plum-700">
                  That didn&apos;t go through. Try again, or pick a path on the right instead.
                </p>
              )}
              <p className="text-center text-xs text-ink/45">I read every message myself.</p>
            </form>
          )}
        </div>

        <div className="contact-panel">
          <h3 className="card-title">Choose your adventure</h3>
          <div className="mt-6 flex flex-col gap-3">
            {/* Opens Cal.com as an in-page modal (see CalEmbed.tsx) instead
                of linking out — booking a call never leaves this page. */}
            <button
              type="button"
              data-cal-link={profile.calLink}
              data-cal-config='{"layout":"month_view"}'
              className="adventure-row w-full text-left"
            >
              <span>
                <span className="adventure-row-label">Connect</span>
                <span className="adventure-row-sub">Grab time on my calendar</span>
              </span>
              <Arrow />
            </button>
            <a href={`mailto:${profile.email}`} className="adventure-row">
              <span>
                <span className="adventure-row-label">Email</span>
                <span className="adventure-row-sub">Send a note directly</span>
              </span>
              <Arrow />
            </a>
            <Link href="/work" className="adventure-row">
              <span>
                <span className="adventure-row-label">Portfolio</span>
                <span className="adventure-row-sub">See the full body of work</span>
              </span>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
