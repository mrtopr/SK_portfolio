"use client";

import * as React from "react";
import { type Project } from "@/lib/content";

interface StoryProps {
  project: Project;
}

const STEPS = [
  {
    step: 1,
    tag: "STAGE 01 // REPORT INGESTION",
    title: "1. An Emergency Report Lands on the Grid",
    description:
      "A citizen reports an incident with geolocation and media. The stateless backend assigns a geospatial coordinate and registers the alert.",
    quote: "Stateless ingestion instantly pins geolocation coordinates to the dispatch graph.",
  },
  {
    step: 2,
    tag: "STAGE 02 // THRESHOLD SPATIAL WINDOW",
    title: "2. Calculating 200m & 10-Minute Boundary",
    description:
      "Before broadcasting, the system projects a 200-meter spatial boundary and queries for active reports within the 10-minute window.",
    quote: "Strict geospatial indexing enforces a 200m / 10-minute deduplication perimeter.",
  },
  {
    step: 3,
    tag: "STAGE 03 // REDUNDANCY SUPPRESSION",
    title: "3. Redundant Duplicate is Merged",
    description:
      "A second caller reports the same incident. Because it falls within the 200m radius and 10min window, it is automatically clustered and suppressed, preventing responder notification fatigue.",
    quote: "Noise filtering eliminates duplicate alerts before they hit responder feeds.",
  },
  {
    step: 4,
    tag: "STAGE 04 // SCOPED ROOM BROADCAST",
    title: "4. Room-Isolated WebSocket Broadcast",
    description:
      "The alert dispatches strictly to responders and clients joined to that incident's Socket.IO room. Other channels stay clear of unnecessary network traffic.",
    quote: "Room-based Socket.IO delivery cuts unnecessary network fanout by 100% across unrelated sectors.",
  },
];

export function SentinelLinkStory({ project }: StoryProps) {
  const [activeStep, setActiveStep] = React.useState<number>(1);
  const stepRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex + 1);
    const target = stepRefs.current[stepIndex];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index + 1);
            }
          });
        },
        {
          rootMargin: "-20% 0px -40% 0px",
          threshold: 0.2,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section
      id="sentinellink-story"
      aria-labelledby="story-heading"
      className="border-t border-b border-contour py-12 sm:py-16 my-12 sm:my-16 scroll-mt-24"
    >
      {/* Section Kicker */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-1.5 font-semibold">
              ARCHITECTURE SIMULATION // SENTINELLINK
            </div>
            <h2 id="story-heading" className="font-serif text-3xl sm:text-4xl text-ink font-semibold">
              How SentinelLink Filters Crisis Noise
            </h2>
          </div>

          {/* Item 14: Mobile Skip Button */}
          <a
            href="#eduarchive-story"
            className="md:hidden self-start px-3 py-1.5 text-xs font-mono border border-contour bg-surface text-ink hover:text-accent rounded-sm shadow-sm"
          >
            Skip Walkthrough ↓
          </a>
        </div>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl mt-2 leading-relaxed">
          During emergency surges, multiple citizens report the same crisis. SentinelLink suppresses redundant alerts and scopes socket fanout in 4 stages.
        </p>
      </div>

      {/* Main Interactive Scroll Story */}
      <div className="hidden motion-safe:block max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start relative">
          {/* Sticky Visualizer Map (Item 4: Top 24 clearance) */}
          <div className="sticky top-24 z-20 w-full bg-surface border border-contour p-4 sm:p-6 rounded-sm shadow-sm max-h-[44vh] md:max-h-[580px] flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-ink-muted border-b border-contour pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-ink font-semibold">SENTINELLINK DISPATCH ENGINE</span>
              </div>

              {/* Interactive Stage Buttons */}
              <div className="flex items-center gap-1">
                {STEPS.map((s, idx) => (
                  <button
                    key={s.step}
                    onClick={() => handleStepClick(idx)}
                    aria-label={`Jump to stage 0${s.step}`}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded-sm transition-colors cursor-pointer ${
                      activeStep === s.step
                        ? "bg-accent text-white font-bold shadow-sm"
                        : "bg-bg text-ink hover:border-ink border border-contour"
                    }`}
                  >
                    0{s.step}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Cartographic Visualizer Canvas */}
            <div className="relative w-full aspect-[4/3] bg-bg border border-contour overflow-hidden flex items-center justify-center">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                role="img"
                aria-label="SentinelLink dispatch architecture: 200m spatial deduplication and room-based Socket.IO broadcasting"
              >
                <defs>
                  <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path
                      d="M 25 0 L 0 0 0 25"
                      fill="none"
                      stroke="var(--color-contour-subtle)"
                      strokeWidth="0.75"
                    />
                  </pattern>

                  <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="400" height="300" fill="var(--color-bg)" />
                <rect width="400" height="300" fill="url(#grid)" />

                {/* Roads / Contour lines */}
                <path
                  d="M 20 150 Q 120 120 200 150 T 380 140"
                  fill="none"
                  stroke="var(--color-contour)"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <path
                  d="M 180 20 Q 200 100 190 280"
                  fill="none"
                  stroke="var(--color-contour)"
                  strokeWidth="1.5"
                />
                <circle cx="200" cy="150" r="1.5" fill="var(--color-ink-muted)" />
                <text
                  x="25"
                  y="35"
                  className="font-mono text-[9px] fill-ink-muted select-none"
                  opacity="0.8"
                >
                  SECTOR 04 // 20.296°N 85.824°E
                </text>

                {/* Unrelated Client Nodes */}
                <g>
                  <circle
                    cx="80"
                    cy="70"
                    r="4"
                    fill="var(--color-contour)"
                    stroke="var(--color-ink-muted)"
                    strokeWidth="1"
                  />
                  <text x="90" y="73" className="font-mono text-[8px] fill-ink-muted select-none">
                    Unit 12 (Sector A)
                  </text>

                  <circle
                    cx="330"
                    cy="230"
                    r="4"
                    fill="var(--color-contour)"
                    stroke="var(--color-ink-muted)"
                    strokeWidth="1"
                  />
                  <text x="240" y="233" className="font-mono text-[8px] fill-ink-muted select-none">
                    Unit 09 (Sector C)
                  </text>
                </g>

                {/* STATE 2+: 200m Radius Ring */}
                {activeStep >= 2 && (
                  <g className="transition-all duration-500">
                    <circle
                      cx="200"
                      cy="150"
                      r="65"
                      fill="var(--color-accent-dim)"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <text
                      x="200"
                      y="76"
                      textAnchor="middle"
                      className="font-mono text-[9px] fill-accent font-semibold select-none"
                    >
                      200m RADIUS // 10 MIN WINDOW
                    </text>
                  </g>
                )}

                {/* STATE 1+: Primary Incident Report #101 */}
                <g className="transition-all duration-300">
                  <circle cx="200" cy="150" r="18" fill="url(#beaconGlow)" />
                  <circle
                    cx="200"
                    cy="150"
                    r="6"
                    fill="var(--color-accent)"
                    stroke="var(--color-bg)"
                    strokeWidth="2"
                  />
                  <rect
                    x="212"
                    y="138"
                    width="84"
                    height="20"
                    fill="var(--color-surface)"
                    stroke="var(--color-contour)"
                    rx="2"
                  />
                  <text
                    x="218"
                    y="152"
                    className="font-mono text-[9px] fill-ink font-semibold select-none"
                  >
                    Report #101 [NEW]
                  </text>
                </g>

                {/* STATE 3+: Duplicate Report Merged */}
                {activeStep >= 3 && (
                  <g className="transition-all duration-500">
                    <line
                      x1="200"
                      y1="150"
                      x2="230"
                      y2="175"
                      stroke="var(--color-accent)"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                    <circle
                      cx="230"
                      cy="175"
                      r="5"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="242"
                      y="166"
                      width="114"
                      height="20"
                      fill="var(--color-surface)"
                      stroke="var(--color-accent)"
                      rx="2"
                    />
                    <text
                      x="248"
                      y="180"
                      className="font-mono text-[9px] fill-accent font-semibold select-none"
                    >
                      Duplicate #102 [MERGED]
                    </text>
                  </g>
                )}

                {/* STATE 4: Target Room Broadcast */}
                {activeStep === 4 && (
                  <g className="transition-all duration-500">
                    <line
                      x1="200"
                      y1="150"
                      x2="110"
                      y2="210"
                      stroke="var(--color-water)"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="200"
                      y1="150"
                      x2="310"
                      y2="90"
                      stroke="var(--color-water)"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="110"
                      cy="210"
                      r="6"
                      fill="var(--color-water)"
                      stroke="var(--color-bg)"
                      strokeWidth="2"
                    />
                    <text
                      x="40"
                      y="230"
                      className="font-mono text-[9px] fill-water font-semibold select-none"
                    >
                      Responder 04 (Room #101)
                    </text>

                    <circle
                      cx="310"
                      cy="90"
                      r="6"
                      fill="var(--color-water)"
                      stroke="var(--color-bg)"
                      strokeWidth="2"
                    />
                    <text
                      x="250"
                      y="80"
                      className="font-mono text-[9px] fill-water font-semibold select-none"
                    >
                      Medic Dispatch (Room #101)
                    </text>

                    <rect
                      x="110"
                      y="255"
                      width="180"
                      height="22"
                      fill="var(--color-surface)"
                      stroke="var(--color-water)"
                      rx="2"
                    />
                    <text
                      x="120"
                      y="270"
                      className="font-mono text-[9px] fill-water font-semibold select-none"
                    >
                      ⚡ Socket.IO Room Broadcast Dispatched
                    </text>
                  </g>
                )}
              </svg>
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] text-ink-muted border-t border-contour pt-3 mt-3">
              <span>LAT 20.296° N, LON 85.824° E</span>
              <span>FILTER: 200m / 10min</span>
              <span>FANOUT: ROOM-ISOLATED</span>
            </div>
          </div>

          {/* Scrolling Steps Column (Item 5: Crisp text contrast) */}
          <div className="space-y-36 py-8 md:py-16">
            {STEPS.map((step, idx) => (
              <div
                key={step.step}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`p-6 sm:p-8 border rounded-sm transition-all duration-300 ${
                  activeStep === step.step
                    ? "bg-surface border-ink shadow-md translate-x-1"
                    : "bg-surface/80 border-contour hover:border-ink/60"
                }`}
              >
                <div className="font-mono text-xs text-accent font-semibold mb-2">
                  {step.tag}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="border-l-2 border-accent pl-3 text-xs font-mono text-ink italic font-medium">
                  &ldquo;{step.quote}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reduced-Motion Fallback: Static 4-Panel Storyboard */}
      <div className="motion-safe:hidden max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {STEPS.map((step) => (
            <div key={step.step} className="border border-contour bg-surface p-6 rounded-sm">
              <div className="font-mono text-xs text-accent font-semibold mb-2">{step.tag}</div>
              <h3 className="font-serif text-xl font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-ink-muted mb-4 leading-relaxed">{step.description}</p>
              <div className="border-l-2 border-accent pl-3 text-xs font-mono text-ink font-medium">
                {step.quote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
