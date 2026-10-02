import { type Project, type OtherProject } from "@/lib/content";

interface ProjectsSectionProps {
  projects: Project[];
  otherProjects: OtherProject[];
}

export function ProjectsSection({ projects, otherProjects }: ProjectsSectionProps) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="space-y-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-contour pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
            FEATURED ENGINEERING WORK
          </span>
          <h2 id="projects-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-ink mt-1">
            Projects &amp; Production Systems
          </h2>
        </div>
        <span className="font-mono text-xs text-ink-muted">
          {projects.length} FEATURED PLATFORMS
        </span>
      </div>

      {/* Featured Projects Cards */}
      <div className="space-y-10">
        {projects.map((project, idx) => (
          <article
            key={project.id}
            id={project.id}
            className="border border-contour bg-surface p-6 sm:p-8 rounded-sm shadow-sm hover:border-ink/50 transition-all space-y-6"
          >
            {/* Top Badge & Project Title */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-contour pb-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-accent font-semibold uppercase mb-1.5">
                  <span>PROJECT 0{idx + 1}</span>
                  <span className="text-contour">•</span>
                  <span>{project.tagline}</span>
                  {project.status && (
                    <span className="text-ink-muted">[{project.status}]</span>
                  )}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink">
                  {project.name}
                </h3>
              </div>

              {/* Action Buttons: Live Demo + GitHub + Walkthrough */}
              <div className="flex flex-wrap items-center gap-2.5 font-sans text-xs">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-ink text-bg font-semibold rounded-sm hover:bg-accent hover:text-white transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <span>Live Demo</span>
                    <span>↗</span>
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-contour bg-surface text-ink hover:border-ink hover:text-accent transition-colors font-semibold rounded-sm shadow-sm flex items-center gap-1.5"
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>
                )}
                {project.id === "sentinellink" && (
                  <a
                    href="#sentinellink-story"
                    className="px-3.5 py-2 border border-contour-subtle bg-bg text-ink-muted hover:text-ink transition-colors font-medium rounded-sm"
                  >
                    Architecture Story ↓
                  </a>
                )}
                {project.id === "eduarchive" && (
                  <a
                    href="#eduarchive-story"
                    className="px-3.5 py-2 border border-contour-subtle bg-bg text-ink-muted hover:text-ink transition-colors font-medium rounded-sm"
                  >
                    Architecture Story ↓
                  </a>
                )}
              </div>
            </div>

            {/* Measurable Systems Outcomes Grid (Item 2) */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-bg border border-contour p-3.5 rounded-sm font-mono text-xs">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="space-y-0.5">
                    <span className="text-[10px] text-ink-muted uppercase tracking-wider block">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-semibold text-accent text-sm block">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Problem & Architectural Breakdown (Item 18 Responsive) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-bg border border-contour p-5 sm:p-6 rounded-sm">
              <div>
                <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wide block mb-2">
                  PROBLEM STATEMENT
                </span>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs font-semibold text-ink uppercase tracking-wide block mb-2">
                  KEY ENGINEERING IMPLEMENTATIONS
                </span>
                <ul className="space-y-2 text-sm text-ink-muted">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-accent font-mono text-xs select-none">↳</span>
                      <span>{h.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack & Deployment Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-ink-muted pt-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-ink font-semibold mr-1">Stack:</span>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 border border-contour bg-bg text-ink rounded-sm text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.deployedOn && (
                <div className="flex items-center gap-1.5">
                  <span className="text-ink font-semibold">Deployment:</span>
                  <span>{project.deployedOn.join(", ")}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Item 13: Additional Builds in Compact Row with Tech Stack & Direct Links */}
      {otherProjects && otherProjects.length > 0 && (
        <div className="border-t border-contour pt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-xl font-semibold text-ink">
              Additional Builds &amp; Explorations
            </h3>
            <span className="font-mono text-xs text-ink-muted">OPEN-SOURCE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherProjects.map((item, idx) => (
              <div
                key={idx}
                className="border border-contour bg-surface p-4 sm:p-5 rounded-sm hover:border-ink/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-semibold text-ink font-sans text-base">{item.name}</h4>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-accent hover:underline font-semibold"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed font-sans mb-3">{item.note}</p>
                </div>

                {item.stack && (
                  <div className="font-mono text-[11px] text-ink-muted border-t border-contour/50 pt-2 flex items-center gap-1.5">
                    <span className="text-ink font-semibold">Tech:</span>
                    <span>{item.stack}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
