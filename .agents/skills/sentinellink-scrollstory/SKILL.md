---
name: sentinellink-scrollstory
description: Build the scroll-driven SentinelLink case study that explains duplicate-incident detection and room-based Socket.IO broadcasting. Use when working on components/story or the featured project section.
---

# SentinelLink scroll story

## What it must teach
A reader with no context should understand, in about 20 seconds of scrolling, the hard problem: many people report the same emergency, and the system must merge duplicates and alert only the right clients.

## Four states (a small state machine, not a timeline hack)
1. Report arrives: one incident pin appears with a single pulse.
2. Check window: a 200 m radius ring and a 10 min label appear around the pin.
3. Duplicate suppressed: a second report lands inside the ring and is visibly merged or marked suppressed.
4. Broadcast: alerts travel only to clients in the relevant room; clients outside stay dim.

Use real values from `content/profile.json` (200 m, 10 min). Do not invent latency or user numbers.

## Implementation
- Inline SVG in a sticky container. Drive it with a single `state` (1-4) derived from which text step is in view (IntersectionObserver or `useScroll`). Style by state with CSS classes or data attributes.
- Desktop: map left and sticky, steps right. Mobile: map sticky at the top (max 40vh), steps scroll beneath.
- Reduced motion: show a static four-panel storyboard with the same captions. No information may exist only in motion.
- Give the SVG `role="img"` and an `aria-label` describing the final state. Steps are real text, selectable and readable.
- Keep it under 15 KB gzipped. No map tiles, no external requests. Draw a stylised map from simple paths.
- Never fake a live connection. If a live demo link exists, link to it. Do not simulate a server.

## Quality bar
Smooth at 60 fps on a mid-range phone. One idea per step. Each step has one sentence a recruiter can quote back.
