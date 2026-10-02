# Engineering rules

- TypeScript strict. No `any` without a comment explaining why. Content is typed from `content/profile.json` via a loader in `lib/`.
- Server components by default. Add `"use client"` only for interactivity, and keep client components small.
- Initial JS budget: under 120 KB gzipped for the home route. Check with `npm run build`.
- Images: next/image, AVIF/WebP, explicit width/height, descriptive alt text. Hero image never lazy-loaded.
- Video: muted, looped, short (under 15 s), under 2 MB, with a poster, preload="none" below the fold. Offer a pause control.
- Motion: animate transform and opacity only. Gate everything with `prefers-reduced-motion` and give a static equivalent that carries the same information.
- Accessibility: semantic landmarks, one h1, logical heading order, skip link, keyboard-reachable everything, aria labels on SVG diagrams, 44px minimum touch targets.
- SEO: real title and description, Open Graph image that exists, canonical URL, sitemap, robots, JSON-LD Person.
- No localStorage for anything important. No third-party scripts. Fonts self-hosted.
- Commits: small and descriptive. Do not commit secrets or large raw media.
