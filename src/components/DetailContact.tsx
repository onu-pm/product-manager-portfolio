"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

// Shared end-of-article CTA for Work, POV, and Lab detail pages — a reader
// who's just read a full case study is a warmer lead than one on the
// About page's general contact form, so this asks a narrower question
// and drops the "choose your adventure" links (About already owns those).
export default function DetailContact() {
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
    <section className="mt-16 border-t border-[var(--border)] pt-12">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl md:text-3xl">
          <span>Want to</span> <span className="marker-highlight">discuss this in person?</span>
        </h2>
        <p className="mt-3 text-ink-secondary">
          Send me a note about what you read here and I&apos;ll get back to you myself.
        </p>
      </div>

      <div className="contact-panel mx-auto mt-8 max-w-xl">
        {status === "sent" ? (
          <div className="rounded-xl border border-plum-100 bg-paper p-6 text-center">
            <p className="text-lg font-semibold text-ink">Thanks, that&apos;s in.</p>
            <p className="mt-2 text-sm text-ink/70">
              I read every message myself and will get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              What&apos;s on your mind?
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A few sentences about what you'd like to discuss."
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
              {status === "sending" ? "Sending..." : "Discuss more in person"}
            </button>
            {status === "error" && (
              <p className="text-center text-xs font-semibold text-plum-700">
                That didn&apos;t go through. Try again, or email me directly instead.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
