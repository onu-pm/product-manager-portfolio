"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { profile } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="page-shell py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h2>
            <span>If this sounds right,</span> <span className="marker-highlight">let&apos;s talk.</span>
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">
            A short conversation is usually enough to see if there&apos;s a fit.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-primary px-7 py-3 text-sm">
              Connect
            </a>
            <a href={`mailto:${profile.email}`} className="btn-secondary px-7 py-3 text-sm">
              Email
            </a>
            <Link href="/work" className="btn-secondary px-7 py-3 text-sm">
              Portfolio
            </Link>
          </div>
        </div>

        {/* The form on the right — a second, lower-commitment way in for
            someone who'd rather write a note than open LinkedIn or Mail. */}
        <div className="lg:justify-self-end lg:max-w-md lg:w-full">
          {status === "sent" ? (
            <div className="tint-card rounded-2xl p-8 text-center">
              <p className="text-lg font-semibold text-ink">Thanks, that&apos;s in.</p>
              <p className="mt-2 text-sm text-ink/70">
                I read every message myself and will get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-plum-100 bg-paper-raised p-6 md:p-8"
            >
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
              <button type="submit" disabled={status === "sending"} className="btn-primary mt-1 px-7 py-3 text-sm disabled:opacity-60">
                {status === "sending" ? "Sending..." : "Send it over"}
              </button>
              {status === "error" && (
                <p className="text-center text-xs font-semibold text-plum-700">
                  That didn&apos;t go through. Try again, or email me directly instead.
                </p>
              )}
              <p className="text-center text-xs text-ink/45">I read every message myself.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
