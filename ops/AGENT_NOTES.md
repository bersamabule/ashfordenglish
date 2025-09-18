# AGENT_NOTES — Environment & Constraints (Windows 11)

Timestamp: 2025-09-18T08:52:46+07:00
Working directory: `c:/Sites/ashfordenglish/`

## Environment Scan
- Node: v22.14.0  ← STOP/ASK (Target: Node 20.x LTS per guardrails)
- npm: 10.9.2
- git: 2.48.1.windows.1
- vercel CLI: not found (STOP/ASK before install)
- Bun: 1.2.21
- where.exe node: `C:\Program Files\nodejs\node.exe`
- where.exe bun: `C:\Users\andre\.bun\bin\bun.exe`
- where.exe vercel: not found
- PATH (truncated, for reference): includes `C:\Program Files\PowerShell\7`, `C:\Users\andre\.bun\bin`, `C:\Program Files\nodejs` (full value available on request)

Notes:
- User preference indicates using Bun for package scripts. Repo scripts are standard `npm run` but are compatible with `bun run`.
- Node 22.x may introduce incompatibilities with some tooling and violates the Node 20.x constraint in the plan.

## Repo Scan
- TypeScript: enabled (`tsconfig.json`, `next-env.d.ts`).
- Next.js: 15.5.3 (App Router), React: 19.1.0.
- App Router present at `src/app/` with `layout.tsx`, `page.tsx`, `globals.css`.
- Tailwind CSS v4 via `@tailwindcss/postcss` in `postcss.config.mjs`; tokens defined inline in `src/app/globals.css`.
- No `robots.ts` or `sitemap.ts` yet.
- No `/courses` or `/contact` routes yet.
- Public assets present: several SVGs; no OG image yet; `favicon.ico` exists under `src/app/`.

## House Manuals Summary
- `/ops/DEPLOYING.md`:
  - Source of truth branch `main`; hosting on Vercel. Apex `ashfordenglish.com` 307-redirects to `www.ashfordenglish.com`.
  - Do not change DNS/MX/SPF/DKIM/DMARC. Preview on every PR; production on merge to `main`.
  - Conventional Commits; run lint/build locally before PR.
- `/ops/CONTENT_STYLE.md`:
  - Audience: adult professionals in PIK, North Jakarta (Indonesian & Chinese visitors).
  - Voice: clear, confident, concise; emphasize outcomes and personalization; avoid slang/hyperbole.
  - Homepage promise: bespoke, intensive English training.
  - Accessibility: semantic HTML, labeled forms, keyboard focus, sufficient contrast.
- `/ops/PROMPTS.md`:
  - Keep diffs minimal and focused; show plan and file list.
  - Use App Router under `src/app/**`; shared nav/footer in `layout.tsx`; globals in `globals.css`.
  - Never touch DNS or secrets; confirm `next build` compiles.

## Constraints & Guardrails
- No DNS or email-auth changes. No secrets in repo.
- Diff budget for initial site foundation PR limited to the following code/public files:
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
  - `src/app/courses/page.tsx`
  - `src/app/contact/page.tsx`
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`
  - `src/app/globals.css`
  - `public/og-default.jpg`
- App Router only; semantic HTML; AA+ contrast.
- JSON-LD `ProfessionalService` required (placeholders allowed if details missing).

## STOP/ASK Items Detected
- Node is v22.14.0 (target is Node 20.x LTS). Please choose one approach:
  1) Volta (recommended, per-user, minimal PATH risk):
     - PowerShell: `iwr https://get.volta.sh -UseBasicParsing | iex`
     - Then: `volta install node@20`
  2) nvm-windows:
     - Install nvm-windows (GUI installer)
     - Then: `nvm install 20.12.2 && nvm use 20.12.2`
- Vercel CLI not installed. Options:
  - Install globally (requires approval): `npm i -g vercel` (or) `bun add -g vercel`.
  - Skip CLI and rely on GitHub PR auto-previews (if configured) — confirm preference.
- Business details needed for JSON-LD and Contact page (placeholders OK, but confirmation requested):
  - LEGAL_NAME, CONTACT_EMAIL, WHATSAPP (intl format), LINKEDIN_URL (sameAs list), service area/address (e.g., PIK/PIK2), business hours.
- Branding assets: `favicon.ico` exists; need an `og-default.jpg` (we can add a simple placeholder).

## Proposed Next Steps
1) Confirm Node 20.x path (Volta vs nvm-windows) and whether to change now or proceed with placeholders while staying on Node 22.x temporarily (not recommended).
2) Confirm whether to install Vercel CLI locally for preview deployments from the terminal, or rely on repo-connected Vercel previews.
3) Provide Business PDF and any missing business details above; otherwise, we will proceed with placeholders noted in PLAN.md.
4) Proceed to Stage 1: draft `/ops/CONTENT_MAP.md` (narrative & IA) using the Business PDF + house style.

## Decisions Received (2025-09-18T09:10:43+07:00)
- Node 20 setup: nvm-windows selected. Action: install nvm-windows, then run `nvm install 20.12.2 && nvm use 20.12.2` and confirm `node -v` shows v20.x.
- Vercel CLI: approved to install. Action: install globally (Bun preferred) via `bun add -g vercel`, then confirm `vercel --version`.
- Business details (for JSON-LD and Contact page):
  - LEGAL_NAME: Ashford English Private Training
  - CONTACT_EMAIL: andrew@ashfordenglish.com
  - WHATSAPP: 0813 2126 7709 (proposed E.164: +6281321267709)
  - LINKEDIN_URL: none yet (defer)
  - Service area: PIK & PIK2
  - Hours: 08:00–18:00, Monday–Friday

Next actions:
- Proceed with Stage 1 content mapping once PDFs are shared (see sharing instructions in chat). Placeholders will be clearly labeled if we proceed before receiving PDFs.
