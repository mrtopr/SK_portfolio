import type { Person } from "@/lib/content";

interface HeroProps {
  person: Person;
}

export function Hero({ person }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="pt-6 pb-12 sm:pb-16 border-b border-contour"
    >
      <div className="space-y-6">
        {/* Availability & Location Status Pill */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-contour bg-surface text-ink text-xs font-mono shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-ink">Available for Summer 2026/2027 SDE Internships</span>
          </div>

          <div className="text-xs font-mono text-ink-muted">
            IIIT Bhubaneswar • Bhubaneswar, India
          </div>
        </div>

        {/* Hero Name & Title */}
        <div className="space-y-3">
          <h1
            id="hero-title"
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-ink leading-[1.06]"
          >
            {person.name}
          </h1>
          <p className="font-serif text-2xl sm:text-3xl text-accent font-normal leading-snug">
            Full-Stack Developer building software that coordinates under{" "}
            <em className="italic">high real-time load</em>.
          </p>
        </div>

        {/* Focused Bio */}
        <p className="text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed">
          {person.summary}
        </p>

        {/* Primary CTA Buttons (View Featured Projects, Get In Touch, Download Resume) */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 bg-ink text-bg font-sans font-semibold text-sm rounded-sm hover:bg-accent hover:text-white transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            View Featured Projects ↓
          </a>

          <a
            href="#contact"
            className="px-5 py-3 border border-contour bg-surface text-ink font-sans font-semibold text-sm rounded-sm hover:border-ink hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent shadow-sm"
          >
            Get In Touch
          </a>

          <a
            href={person.links.resumePdf || "/resume.pdf"}
            download="Sachin_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-accent/40 bg-accent/10 text-accent font-sans font-semibold text-sm rounded-sm hover:bg-accent hover:text-white transition-all shadow-sm flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span>Download Resume</span>
            <span className="text-xs">↓</span>
          </a>
        </div>

        {/* Social Signal Bar */}
        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-contour/60 font-mono text-xs text-ink-muted">
          {person.links.github && (
            <a
              href={person.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <span className="text-ink font-semibold">GitHub:</span>
              <span>@mrtopr ↗</span>
            </a>
          )}

          {person.links.linkedin && (
            <a
              href={person.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <span className="text-ink font-semibold">LinkedIn:</span>
              <span>isachin-kumar ↗</span>
            </a>
          )}

          {person.links.leetcode && (
            <a
              href={person.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <span className="text-ink font-semibold">LeetCode:</span>
              <span>300+ Solved ↗</span>
            </a>
          )}

          <a
            href={`mailto:${person.email}`}
            className="hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <span className="text-ink font-semibold">Email:</span>
            <span>{person.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
