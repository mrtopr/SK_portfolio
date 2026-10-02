---
description: Scaffold the Next.js project and wire up content and tokens
---
1. Confirm a direction is APPROVED in `docs/DESIGN_BRIEF.md`. If not, stop and run `/design-directions`.
2. Create a Next.js App Router project with TypeScript and Tailwind in the current folder without deleting AGENTS.md, GEMINI.md, `.agents/`, `content/`, or `docs/`.
3. Add a typed loader in `lib/content.ts` that reads and validates `content/profile.json`.
4. Translate the approved tokens into CSS variables and the Tailwind theme. Set up next/font.
5. Create the layout with skip link, landmarks, theme handling, and metadata from profile.json.
6. Run lint, typecheck, and build. Report the result and the initial JS size.
