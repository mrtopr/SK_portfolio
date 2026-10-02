---
description: Pre-deploy checks and deploy to Vercel
---
1. Run lint, `npx tsc --noEmit`, and `npm run build`. Stop on any error.
2. Run Lighthouse (mobile) on the production build. Report all four scores. Fix anything below the targets in AGENTS.md.
3. Verify: no dead links, OG image loads, resume PDF downloads, all `TODO(sachin)` items resolved or listed.
4. Tell me the exact steps to deploy to Vercel and what domain settings I need. Do not deploy without my confirmation.
