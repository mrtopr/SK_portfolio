"use client";

import * as React from "react";
import { type Project } from "@/lib/content";

interface StoryProps {
  project: Project;
}

const EDU_STEPS = [
  {
    step: 1,
    tag: "STAGE 01 // QUERY INGESTION",
    title: "1. Fragmented Academic Inquiries Enter the Engine",
    description:
      "Students query past exam questions, lecture notes, and lab manuals previously scattered across unorganized chat drives.",
    quote: "Centralizes scattered institutional files into a single structured query interface.",
  },
  {
    step: 2,
    tag: "STAGE 02 // MULTI-TIER INDEXING",
    title: "2. Normalized Branch & Semester Schema Traversal",
    description:
      "A normalized PostgreSQL indexing hierarchy traverses Branch (CSE, ETC, EEE, IT) → Academic Year → Semester → Course Module in sub-millisecond lookups.",
    quote: "Normalized 4-branch relational schema cuts resource lookup time by ~60% in testing.",
  },
  {
    step: 3,
    tag: "STAGE 03 // RBAC VERIFICATION QUEUE",
    title: "3. Role-Based Verification & Moderation Pipeline",
    description:
      "Student uploads are quarantined in a contributor submission queue where authorized student admins verify document validity before publishing to the public index.",
    quote: "Stateless JWT role-based access control prevents corrupted or duplicate syllabus files.",
  },
  {
    step: 4,
    tag: "STAGE 04 // STREAMED PDF PREVIEW",
    title: "4. Cloudinary Stream Pipeline & In-Browser Preview",
    description:
      "Verified academic assets stream directly through Cloudinary with instant client-side PDF rendering, eliminating heavy file download overhead.",
    quote: "In-browser document preview delivers instant academic file exploration.",
  },
];

export function EduArchiveStory({ project }: StoryProps) {
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
      id="eduarchive-story"
      aria-labelledby="edu-story-heading"
      className="border-t border-b border-contour py-12 sm:py-16 my-12 sm:my-16 scroll-mt-24"
    >
      {/* Section Kicker */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-wider mb-1.5 font-semibold">
              ARCHITECTURE SIMULATION // EDUARCHIVE
            </div>
            <h2 id="edu-story-heading" className="font-serif text-3xl sm:text-4xl text-ink font-semibold">
              How EduArchive Organizes Academic Knowledge
            </h2>
          </div>

          {/* Item 14: Mobile Skip Button */}
          <a
            href="#skills-section"
            className="md:hidden self-start px-3 py-1.5 text-xs font-mono border border-contour bg-surface text-ink hover:text-accent rounded-sm shadow-sm"
          >
            Skip to Skills &amp; Experience ↓
          </a>
        </div>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl mt-2 leading-relaxed">
          Syllabus files, past questions, and lecture resources are often scattered across drives. Here is how EduArchive verifies, indexes, and streams data in 4 stages.
        </p>
      </div>

      {/* Main Interactive Scroll Story */}
      <div className="hidden motion-safe:block max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start relative">
          {/* Sticky Visualizer Canvas (Item 4: Top 24 clearance) */}
          <div className="sticky top-24 z-20 w-full bg-surface border border-contour p-4 sm:p-6 rounded-sm shadow-sm max-h-[44vh] md:max-h-[580px] flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-ink-muted border-b border-contour pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-ink font-semibold">EDUARCHIVE REPOSITORY PIPELINE</span>
              </div>

              {/* Interactive Stage Buttons */}
              <div className="flex items-center gap-1">
                {EDU_STEPS.map((s, idx) => (
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

            {/* SVG Architecture Canvas */}
            <div className="relative w-full aspect-[4/3] bg-bg border border-contour overflow-hidden flex items-center justify-center">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full"
                role="img"
                aria-label="EduArchive pipeline architecture: multi-tier schema indexing, RBAC verification queue, and Cloudinary streaming"
              >
                <defs>
                  <pattern id="eduGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="var(--color-contour-subtle)"
                      strokeWidth="0.75"
                    />
                  </pattern>

                  <radialGradient id="docPulse" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="400" height="300" fill="var(--color-bg)" />
                <rect width="400" height="300" fill="url(#eduGrid)" />

                {/* Academic Department Nodes */}
                <g className="font-mono text-[9px] fill-ink select-none font-semibold">
                  <rect
                    x="30"
                    y="35"
                    width="70"
                    height="24"
                    fill="var(--color-surface)"
                    stroke="var(--color-contour)"
                    rx="2"
                  />
                  <text x="44" y="51">
                    [ CSE ]
                  </text>

                  <rect
                    x="120"
                    y="35"
                    width="70"
                    height="24"
                    fill="var(--color-surface)"
                    stroke="var(--color-contour)"
                    rx="2"
                  />
                  <text x="134" y="51">
                    [ ETC ]
                  </text>

                  <rect
                    x="210"
                    y="35"
                    width="70"
                    height="24"
                    fill="var(--color-surface)"
                    stroke="var(--color-contour)"
                    rx="2"
                  />
                  <text x="224" y="51">
                    [ EEE ]
                  </text>

                  <rect
                    x="300"
                    y="35"
                    width="70"
                    height="24"
                    fill="var(--color-surface)"
                    stroke="var(--color-contour)"
                    rx="2"
                  />
                  <text x="318" y="51">
                    [ IT ]
                  </text>
                </g>

                {/* STAGE 1: Search Query Ingestion */}
                <g className="transition-all duration-300">
                  <line
                    x1="65"
                    y1="59"
                    x2="200"
                    y2="130"
                    stroke="var(--color-contour)"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                  <line
                    x1="155"
                    y1="59"
                    x2="200"
                    y2="130"
                    stroke="var(--color-contour)"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />

                  <rect
                    x="130"
                    y="118"
                    width="140"
                    height="26"
                    fill="var(--color-surface)"
                    stroke="var(--color-accent)"
                    rx="3"
                  />
                  <text
                    x="142"
                    y="135"
                    className="font-mono text-[9px] fill-accent font-semibold select-none"
                  >
                    Query: &quot;OS PYQ Sem 4&quot;
                  </text>
                </g>

                {/* STAGE 2: Normalized Schema Indexing */}
                {activeStep >= 2 && (
                  <g className="transition-all duration-500">
                    <line
                      x1="200"
                      y1="144"
                      x2="200"
                      y2="185"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                    />
                    <circle cx="200" cy="185" r="14" fill="url(#docPulse)" />
                    <rect
                      x="110"
                      y="185"
                      width="180"
                      height="26"
                      fill="var(--color-surface)"
                      stroke="var(--color-ink)"
                      rx="3"
                    />
                    <text
                      x="122"
                      y="201"
                      className="font-mono text-[9px] fill-ink font-semibold select-none"
                    >
                      PostgreSQL Index Matched (0.8ms)
                    </text>
                  </g>
                )}

                {/* STAGE 3: RBAC Queue Gate */}
                {activeStep >= 3 && (
                  <g className="transition-all duration-500">
                    <line
                      x1="110"
                      y1="198"
                      x2="50"
                      y2="240"
                      stroke="var(--color-contour)"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="20"
                      y="235"
                      width="110"
                      height="24"
                      fill="var(--color-surface)"
                      stroke="var(--color-contour)"
                      rx="2"
                    />
                    <text
                      x="30"
                      y="251"
                      className="font-mono text-[8px] fill-ink select-none font-semibold"
                    >
                      Admin RBAC [VERIFIED]
                    </text>
                  </g>
                )}

                {/* STAGE 4: Cloudinary Direct Stream */}
                {activeStep === 4 && (
                  <g className="transition-all duration-500">
                    <line
                      x1="290"
                      y1="198"
                      x2="330"
                      y2="235"
                      stroke="var(--color-water)"
                      strokeWidth="2"
                    />
                    <rect
                      x="260"
                      y="235"
                      width="125"
                      height="26"
                      fill="var(--color-surface)"
                      stroke="var(--color-water)"
                      rx="2"
                    />
                    <text
                      x="270"
                      y="251"
                      className="font-mono text-[9px] fill-water font-semibold select-none"
                    >
                      ⚡ Cloudinary Stream (Live)
                    </text>
                  </g>
                )}
              </svg>
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] text-ink-muted border-t border-contour pt-3 mt-3">
              <span>SCHEMA: 4 BRANCHES</span>
              <span>AUTH: RBAC JWT</span>
              <span>SPEED: ~60% FASTER</span>
            </div>
          </div>

          {/* Scrolling Steps Column (Item 5: Crisp text contrast) */}
          <div className="space-y-36 py-8 md:py-16">
            {EDU_STEPS.map((step, idx) => (
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
          {EDU_STEPS.map((step) => (
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
