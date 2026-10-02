"use client";

import * as React from "react";
import { type Person } from "@/lib/content";

interface ContactSectionProps {
  person: Person;
}

export function ContactSection({ person }: ContactSectionProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-contour pt-12 sm:pt-16 pb-16 sm:pb-24 scroll-mt-24"
    >
      <div className="border border-contour bg-surface p-6 sm:p-10 rounded-sm shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
            GET IN TOUCH // DISPATCH
          </span>
          {/* Item 19: Response Time Badge */}
          <span className="font-mono text-[11px] px-2.5 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full font-semibold">
            ⚡ Replies within 24 hours
          </span>
        </div>

        <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-ink mb-3">
          Let&apos;s Build Reliable Systems Together.
        </h2>
        <p className="text-sm sm:text-base text-ink-muted max-w-xl leading-relaxed mb-8">
          Currently open to software engineering internships, co-ops, and entry-level engineering roles.
          Direct email or LinkedIn messages are the best way to reach me.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          {/* Item 16: Fixed email wrapping */}
          <button
            onClick={handleCopyEmail}
            className="p-4 border border-contour bg-bg hover:border-ink hover:shadow-sm transition-all flex flex-col justify-between group text-left cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent min-h-[100px]"
          >
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-ink-muted font-semibold">PRIMARY EMAIL</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-sm transition-colors ${
                  copied ? "bg-accent text-white font-bold" : "text-ink-muted group-hover:text-ink"
                }`}
              >
                {copied ? "COPIED ✓" : "CLICK TO COPY"}
              </span>
            </div>
            <span className="font-semibold text-ink group-hover:text-accent transition-colors break-words text-[13px]">
              {person.email}
            </span>
          </button>

          {person.links.linkedin && (
            <a
              href={person.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-contour bg-bg hover:border-ink hover:shadow-sm transition-all flex flex-col justify-between group rounded-sm min-h-[100px]"
            >
              <span className="text-ink-muted font-semibold block mb-2">LINKEDIN PROFILE</span>
              <span className="font-semibold text-ink group-hover:text-accent transition-colors text-[13px]">
                /in/isachin-kumar ↗
              </span>
            </a>
          )}

          {person.links.github && (
            <a
              href={person.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-contour bg-bg hover:border-ink hover:shadow-sm transition-all flex flex-col justify-between group rounded-sm min-h-[100px]"
            >
              <span className="text-ink-muted font-semibold block mb-2">GITHUB REPOSITORIES</span>
              <span className="font-semibold text-ink group-hover:text-accent transition-colors text-[13px]">
                @mrtopr ↗
              </span>
            </a>
          )}

          {person.links.leetcode && (
            <a
              href={person.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-contour bg-bg hover:border-ink hover:shadow-sm transition-all flex flex-col justify-between group rounded-sm min-h-[100px]"
            >
              <span className="text-ink-muted font-semibold block mb-2">LEETCODE PROFILE</span>
              <span className="font-semibold text-ink group-hover:text-accent transition-colors text-[13px]">
                300+ Solved ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
