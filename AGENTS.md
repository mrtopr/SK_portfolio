# Sachin Kumar: SDE portfolio

## Purpose
A portfolio that gets Sachin interviews for software engineering internships and entry-level roles.
Primary readers: recruiters (60-90 seconds, often on a phone) and engineers who will open the code.
The site is itself a project. It must be fast, accessible, and well built.

## Source of truth
- All facts live in `content/profile.json`. Components read from it. Never hardcode content in JSX.
- Never invent facts, numbers, links, quotes, or dates. If something is missing, leave a `TODO(sachin)` and tell me.
- Fields with `"verify": true` are claims I must be able to defend in an interview. Do not make them bolder than the text I wrote.

## Stack (use latest stable versions)
- Next.js App Router, TypeScript (strict), Tailwind CSS
- `motion` (Framer Motion) for UI motion. GSAP ScrollTrigger only if the scroll story needs scrubbing, and only inside that component, dynamically imported.
- next/font for self-hosted fonts, next/image for images
- Deploy to Vercel. No backend, no database, no analytics trackers.

## Structure
- `app/`           routes and layout
- `components/`    UI; `components/story/` holds the SentinelLink scroll story
- `content/`       profile.json (and MDX case studies later)
- `lib/`           typed content loader, helpers
- `public/media/`  optimised images and short videos
- `docs/`          DESIGN_BRIEF.md, PLAN.md
- `.agents/`       rules (always on), skills (on demand), workflows (slash commands)

## Commands
- `npm run dev`, `npm run build`, `npm run lint`, `npx tsc --noEmit`

## Boundaries
Always: read `docs/DESIGN_BRIEF.md` before touching UI. Keep content and presentation separate. Respect `prefers-reduced-motion`. Run `/slop-audit` before calling UI work finished.
Ask first: adding any dependency, changing the chosen design direction, adding a new page, anything that adds more than 30 KB gzipped JS.
Never: use placeholder lorem ipsum, stock photos of people, fake metrics, skill percentage bars, autoplay audio, or copy another portfolio's layout or text.

## Definition of done
Builds without warnings. Lighthouse mobile: performance 95+, accessibility 100, best practices 100, SEO 100. Works at 375px, 768px, and 1440px. Fully usable with keyboard only and with motion reduced. `/slop-audit` passes.
