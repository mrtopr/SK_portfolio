# Design rules: no generic AI look

Goal: the site must look like one person made deliberate choices, not like a template.

## Process (mandatory)
1. Read `docs/DESIGN_BRIEF.md`. If no direction is marked APPROVED there, do not write UI code. Run `/design-directions` and wait for my choice.
2. Define tokens first (CSS variables): 4-6 named colours, type scale, spacing scale, radii, motion durations. Components use tokens only, never raw hex.
3. Build the hero and the SentinelLink story first. They carry the identity. Everything else stays quiet and disciplined.

## Banned (these are the usual tells)
- Purple/indigo to pink/blue gradients, gradient text, glow shadows, glassmorphism, aurora blobs
- Near-black background with one neon accent as the whole personality
- Warm cream background + high-contrast serif + terracotta accent as a default
- Inter, Roboto, Poppins, or Space Grotesk as the identity typeface
- A wall of identical rounded cards with the same soft shadow
- Emoji used as icons or section decoration
- Hero lines like "Hi, I'm X", typing effects, bouncing scroll arrows, particle backgrounds, cursor followers, tilt-on-hover cards
- Fade-up on every section and hover lift on every card
- Tracked-out ALL CAPS eyebrow labels above every heading
- Numbered 01/02/03 markers unless the content is truly a sequence
- A grid of tech logos, skill bars, or percentage meters
- An arrow appended to every link or button

## Required
- Two typefaces at most, chosen deliberately for this brief and self-hosted. Body line length under 75 characters.
- One memorable moment (the SentinelLink scroll story). Hero motion is one short orchestrated entrance, nothing looping.
- Structure (borders, rules, labels) must carry information, not decorate.
- Contrast WCAG AA minimum. Visible focus styles on every interactive element.
- Light and dark themes both designed on purpose, not auto-inverted.
- Copy: plain, specific, first person, sentence case. Banned words: passionate, cutting-edge, seamless, leverage, synergy, innovative, robust (unless describing an actual property).

## Slop test (answer before finishing any UI task)
1. Could this page belong to any other developer by swapping the name? If yes, revise.
2. Is any element there only because templates have it?
3. Is there more than one thing competing to be the memorable one?
4. Does every animation answer a user action or direct attention to one thing?
5. Would a recruiter find the projects in under 5 seconds on a phone?
