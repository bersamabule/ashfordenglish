# How to work in this repo (for the AI)
- Before changing files, read /ops/DEPLOYING.md and /ops/CONTENT_STYLE.md.
- When proposing changes, show:
  1) A concise plan,
  2) The list of files to be added/changed/deleted,
  3) A minimal diff (only what’s required),
  4) Test steps: `npm run dev` and what to click.

- Never touch DNS or email records. Never add secrets to the repo.
- For Next.js (App Router, src/):
  - Put pages in /src/app/**.
  - Update shared nav/footer in /src/app/layout.tsx.
  - Global styles in /src/app/globals.css.
- After edits, run `next build` locally (if requested) to confirm it compiles.
