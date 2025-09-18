# PLAN — Site Foundation (Ashford English)

Timestamp: 2025-09-18T09:10:43+07:00
Branch target: `feat/site-foundation`
Diff budget: ≤8 files, ≤~150 LOC total, ≤~60 LOC/file
Primary CTA: “Book Assessment” → `/contact`

## A) File Diffs and Rationale (≤8 files)
1) `src/app/layout.tsx`
   - Global metadata (title template, description), `metadataBase`, Open Graph defaults.
   - Sitewide header nav and footer with CTA.
   - Inject JSON-LD (`ProfessionalService`) using known business details.
2) `src/app/page.tsx`
   - Home hero and value pillars; CTA → `/contact`.
3) `src/app/courses/page.tsx`
   - Offers overview sections with concise copy and a CTA.
4) `src/app/contact/page.tsx`
   - WhatsApp link (`wa.me/6281321267709`), email, hours, area; clear instructions.
5) `src/app/robots.ts`
   - Allow all; disallow `/api/*`; host + sitemap references.
6) `src/app/sitemap.ts`
   - Static entries for `/`, `/courses`, `/contact` with monthly changeFreq.
7) `src/app/globals.css`
   - Minimal brand tokens; ensure font family uses Geist variable; maintain AA+ contrast.
8) `public/og-default.jpg`
   - Placeholder OG image path (user to drop a 1200×630 JPG; we’ll add once provided).

Note: We will reference `/og-default.jpg` immediately; if not present, build still succeeds. We’ll attach the actual image in a follow-up tiny commit when available.

## B) Page Specs

### Home (`/`)
- Purpose/KPI
  - Establish executive positioning; drive assessment bookings.
- SEO
  - Title: Ashford English — Executive English Coaching in PIK & PIK2
  - Description: Bespoke, intensive English coaching for high-stakes communication in PIK & PIK2. Private, discreet sessions. Book an assessment.
- Hero
  - H1: Bespoke, intensive English coaching for high‑stakes communication
  - Sub: PIK & PIK2 — private, executive‑focused training. NDA on request.
  - Primary CTA: Book Assessment → `/contact`
- Sections
  - Value pillars (3): Personalised to your next meeting; Executive presence & clarity; Confidential, punctual, discreet.
  - Snapshot of offers: 1:1 coaching; Executive writing; Assessment & plan.
- Accessibility
  - Proper heading order; descriptive CTA; keyboard focus styles.
- JSON-LD Plan
  - Provided centrally in `layout.tsx`.

### Courses (`/courses`)
- Purpose/KPI
  - Clarify offers and outcomes; set expectations; repeat CTA.
- SEO
  - Title: Executive Coaching & Writing — Ashford English (PIK & PIK2)
  - Description: 1:1 executive coaching for meetings, presentations, negotiations; executive writing reviews; initial assessment and plan.
- Sections
  - 1:1 Executive Coaching — scenarios, outcomes, session format.
  - Executive Writing — deliverables and editing approach.
  - Assessment & Plan — diagnostic; goals; milestones.
  - Who it’s for — executives, founders, senior managers.
  - CTA: Book Assessment → `/contact`.
- Accessibility
  - Semantic sections with headings; avoid long paragraphs.

### Contact (`/contact`)
- Purpose/KPI
  - Frictionless booking and contact options.
- SEO
  - Title: Contact — Book an Assessment | Ashford English
  - Description: WhatsApp or email to book your assessment. Hours Mon–Fri 08:00–18:00. PIK & PIK2.
- Content
  - WhatsApp: `https://wa.me/6281321267709` (label: “WhatsApp Ashford English”).
  - Email: `mailto:andrew@ashfordenglish.com`.
  - Hours: Mon–Fri, 08:00–18:00.
  - Area: PIK & PIK2 (North Jakarta). NDA available on request.
- Accessibility
  - Use `aria-label` on external actions; maintain clear focus outlines.

## C) Design Tokens (Tailwind, minimal)
- Colors
  - Background: `#ffffff`
  - Foreground: `#171717`
  - Emphasis (borders/hover): use gray-900 on white for AA+
- Typography
  - Sans: `var(--font-geist-sans)` (already configured)
  - Headings scale: `text-3xl`/`text-2xl`/`text-xl`
- Spacing
  - Section rhythm: `py-12` / `py-16` on lg

## D) SEO Defaults
- In `src/app/layout.tsx`
  - `metadataBase`: `https://www.ashfordenglish.com`
  - Title template, description, Open Graph siteName & image: `/og-default.jpg`.
  - Robots: allow all; disallow `/api/*`.
- `src/app/robots.ts` and `src/app/sitemap.ts` configured accordingly.

## E) Tests & Preview Checklist
- Commands (after Node 20 via nvm-windows)
  - `bun run lint`
  - `bun run build`
- Manual checks
  - Metadata present (title/description/OG), robots/sitemap compile.
  - Nav links and CTAs route correctly; 404 behaves.
  - Responsive layout at sm/md/lg; no overflow; AA+ contrast.
  - No console errors in dev.

## F) Open Questions / Placeholders
- LinkedIn URL / sameAs list: none yet (we’ll leave empty for now).
- OG image asset: please provide `public/og-default.jpg` (1200×630). We’ll attach in a follow-up tiny commit.
- Confirm E.164 WhatsApp format: `+6281321267709` (derived from 0813‑2126‑7709).

## G) Implementation Notes (for PR)
- Keep diffs very small; semantic HTML; clear ARIA labels on external links.
- JSON-LD `ProfessionalService` fields:
  - name: Ashford English Private Training
  - url: https://www.ashfordenglish.com
  - email: andrew@ashfordenglish.com
  - telephone: +6281321267709
  - areaServed: PIK & PIK2 (North Jakarta)
  - openingHours: Mo-Fr 08:00-18:00
  - sameAs: [] (no LinkedIn yet)
  - image/logo: `/og-default.jpg`, `/favicon.ico`

## H) After Merge / Roadmap (not in this diff)
- About; Testimonials/Case Studies; Resources; FAQ; Corporate Training.
- Replace placeholder OG; add analytics via env vars when approved.
