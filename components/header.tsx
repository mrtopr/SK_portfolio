"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="w-full border-b border-contour bg-bg/95 backdrop-blur-sm sticky top-0 z-50 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand / Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-sm bg-accent text-white flex items-center justify-center font-serif font-bold text-base shadow-sm">
            SK
          </div>
          <div>
            <div className="font-serif text-base font-semibold text-ink group-hover:text-accent transition-colors leading-tight">
              Sachin Kumar
            </div>
            <div className="font-mono text-[11px] text-ink-muted leading-tight">
              Software Engineer
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-sans text-sm font-medium text-ink-muted">
          <a href="#projects" className="hover:text-ink transition-colors">
            Projects
          </a>
          <a href="#sentinellink-story" className="hover:text-ink transition-colors">
            Architecture
          </a>
          <a href="#experience-skills" className="hover:text-ink transition-colors">
            Experience &amp; Skills
          </a>
          <a href="#contact" className="hover:text-ink transition-colors">
            Contact
          </a>
        </nav>

        {/* Theme Toggle & Resume Action */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
