import {
  type Achievement,
  type Experience,
  type Skills,
  type Education,
} from "@/lib/content";

interface ExperienceSkillsSectionProps {
  achievements: Achievement[];
  experience: Experience[];
  skills: Skills;
  education: Education[];
}

export function ExperienceSkillsSection({
  achievements,
  experience,
  skills,
  education,
}: ExperienceSkillsSectionProps) {
  return (
    <section
      id="experience-skills"
      aria-labelledby="experience-heading"
      className="space-y-16"
    >
      {/* 1. Leadership Experience */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-contour pb-3 mb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
              WORK &amp; LEADERSHIP
            </span>
            <h2 id="experience-heading" className="font-serif text-3xl font-semibold text-ink mt-1">
              Experience
            </h2>
          </div>
          <span className="font-mono text-xs text-ink-muted">RESPONSIBILITY &amp; IMPACT</span>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="border border-contour bg-surface p-6 sm:p-7 rounded-sm shadow-sm hover:border-ink/40 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-contour pb-3">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-ink">{exp.role}</h3>
                  <div className="font-mono text-xs text-accent font-semibold mt-0.5">{exp.org}</div>
                </div>
                <div className="font-mono text-xs text-ink-muted">{exp.period}</div>
              </div>

              <ul className="space-y-2 text-sm text-ink-muted">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-accent font-mono text-xs select-none">↳</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Track Record & Competitive Work */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-contour pb-3 mb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
              HONORS &amp; COMPETITIVE WORK
            </span>
            <h2 className="font-serif text-3xl font-semibold text-ink mt-1">
              Achievements &amp; Track Record
            </h2>
          </div>
          <span className="font-mono text-xs text-ink-muted">VERIFIED RECORDS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="border border-contour bg-surface p-5 sm:p-6 rounded-sm shadow-sm hover:border-ink/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-accent font-semibold mb-1.5 flex items-center justify-between">
                  <span>HONOR 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Technical Skills Matrix */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-contour pb-3 mb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
              TECHNICAL PROFICIENCIES
            </span>
            <h2 className="font-serif text-3xl font-semibold text-ink mt-1">
              Skills &amp; Technologies
            </h2>
          </div>
          <span className="font-mono text-xs text-ink-muted">CORE CAPABILITIES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items]) => {
            const skillList = items as string[];
            return (
              <div
                key={category}
                className="border border-contour bg-surface p-5 rounded-sm shadow-sm hover:border-ink/40 transition-all"
              >
                <h3 className="font-mono text-xs uppercase font-semibold text-ink tracking-wider mb-3 pb-2 border-b border-contour-subtle flex items-center justify-between">
                  <span>{category}</span>
                  <span className="text-[10px] text-ink-muted font-normal">[{skillList.length}]</span>
                </h3>
                <ul className="space-y-1.5 text-sm text-ink-muted">
                  {skillList.map((skill: string, sIdx: number) => (
                    <li key={sIdx} className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-accent select-none">•</span>
                      <span className="text-ink font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Education */}
      <div>
        <div className="border-b border-contour pb-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
            ACADEMIC FOUNDATION
          </span>
          <h2 className="font-serif text-3xl font-semibold text-ink mt-1">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="border border-contour bg-surface p-6 rounded-sm shadow-sm hover:border-ink/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-ink-muted mb-2">
                  <span>{edu.period || edu.year}</span>
                  {edu.cgpa && (
                    <span className="px-2 py-0.5 bg-bg border border-contour text-ink font-semibold rounded-sm">
                      CGPA {edu.cgpa}
                    </span>
                  )}
                  {edu.score && (
                    <span className="px-2 py-0.5 bg-bg border border-contour text-ink font-semibold rounded-sm">
                      SCORE {edu.score}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-1">{edu.school}</h3>
                {edu.degree && (
                  <p className="text-sm text-ink-muted font-mono">{edu.degree}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
