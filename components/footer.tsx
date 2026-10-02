import { getProfile } from "@/lib/content";

export function Footer() {
  const profile = getProfile();

  return (
    <footer className="w-full border-t border-contour bg-bg mt-auto transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-ink-muted">
        <div>
          <span>{profile.person.name}</span>
          <span className="mx-2">•</span>
          <span>{profile.person.location}</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={profile.person.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.person.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.person.email}`}
            className="hover:text-ink transition-colors"
          >
            {profile.person.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
