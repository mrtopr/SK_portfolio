# Portfolio kit for Antigravity

## Set up
1. Create an empty folder, copy everything from this kit into it (keep the dotfolder `.agents/`).
2. Open the folder in Antigravity. In Customizations, confirm the workspace rules from `.agents/rules/` show as active. If your build looks for `.agent/` (singular), rename the folder.
3. Fill the TODOs in `content/profile.json` and drop media into `public/media/`.
4. Use Planning mode so the agent shows a plan before editing.

## First prompt
Read AGENTS.md, docs/DESIGN_BRIEF.md, and content/profile.json. Then run /design-directions. Do not write production code until I approve a direction.

## Then, in order
`/bootstrap`, then `/build-section hero`, then the SentinelLink story, and so on per docs/PLAN.md. Run `/slop-audit` after each visual milestone and `/ship` at the end.

## Tips
- Review each plan and every screenshot yourself. The rules reduce generic output, they do not replace your taste.
- If the agent adds a dependency or changes the direction without asking, point to AGENTS.md "Ask first".
- Keep rule files under about 12,000 characters each.
