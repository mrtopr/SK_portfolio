---
description: Audit the UI against the no-slop rules with screenshots
---
1. Start the dev server and open the home page in the browser.
2. Screenshot at 375px, 768px, and 1440px in light and dark.
3. Check each item in the Banned list in `.agents/rules/design-no-slop.md` and report pass or fail with the file and line where it fails.
4. Run the five-question slop test and answer each honestly.
5. Check keyboard navigation, focus styles, and reduced motion (emulate it).
6. List fixes ordered by impact. Apply the ones clearly within the rules; ask before changing the direction.
