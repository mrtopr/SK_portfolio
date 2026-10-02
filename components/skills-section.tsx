import { type Skills } from "@/lib/content";

interface SkillsSectionProps {
  skills: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills-section" aria-labelledby="skills-heading" className="space-y-8 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-contour pb-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
            CORE PROFICIENCIES &amp; STACK
          </span>
          <h2 id="skills-heading" className="font-serif text-3xl font-semibold text-ink mt-1">
            Technical Skills
          </h2>
        </div>
        <span className="font-mono text-xs text-ink-muted">CS FUNDAMENTALS FIRST</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(skills).map(([category, items], idx) => {
          const isFundamentals = idx === 0 || category.toLowerCase().includes("fundamental");

          return (
            <div
              key={category}
              className={`border p-5 rounded-sm shadow-sm transition-all ${
                isFundamentals
                  ? "border-accent/60 bg-accent/5 md:col-span-2 lg:col-span-3"
                  : "border-contour bg-surface hover:border-ink/40"
              }`}
            >
              <div className="flex items-center justify-between border-b border-contour/60 pb-2.5 mb-3">
                <h3 className="font-mono text-xs uppercase font-semibold text-ink tracking-wider flex items-center gap-2">
                  {isFundamentals && (
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  )}
                  <span>{category}</span>
                </h3>
                <span className="font-mono text-[10px] text-ink-muted">
                  [{items.length} items]
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`font-mono text-xs px-2.5 py-1 rounded-sm border ${
                      isFundamentals
                        ? "bg-surface border-accent/40 text-ink font-semibold"
                        : "bg-bg border-contour text-ink"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
