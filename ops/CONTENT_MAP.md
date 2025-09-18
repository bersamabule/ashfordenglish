# CONTENT_MAP — Ashford English

Timestamp: 2025-09-18T09:10:43+07:00
Primary CTA: “Book Assessment” → `/contact`
Voice/Tone: executive, concise, outcome-focused; avoid slang/hyperbole; emphasize personalization and confidentiality.

## Audience
- Adult professionals and executives in PIK & PIK2, North Jakarta (Indonesian & Chinese visitors).
- High-stakes communicators: investor meetings, board presentations, negotiations, interviews, executive writing.
- Time-constrained; expect private, quiet, punctual, and discreet service.

## Value Propositions
- Bespoke, intensive English training tailored to professional scenarios (no one-size-fits-all curriculum).
- Outcome-driven: measurable improvements in clarity, confidence, and executive presence.
- Confidentiality-first: NDA available on request; private sessions.
- Concierge scheduling with clear arrival windows in PIK & PIK2.

## Offers (initial)
- 1:1 Executive Coaching (speaking, presentation, negotiation, interview prep).
- Executive Writing (emails, memos, decks; clarity and brevity reviews).
- Assessment & Program Plan (initial diagnostic; goals and milestones).
- Corporate options (TBD; by request).

## Common Objections / Responses
- “Not enough time” → Short, intensive sessions; homework optional; focus on the next important meeting.
- “Will this be relevant?” → Real materials (your deck, emails), not generic textbooks.
- “Is it confidential?” → NDA on request; private, discreet sessions.
- “What’s the ROI?” → Improved outcomes in meetings, hiring, investor relations; measurable objectives.

## Information Architecture (MVP)
- Home (`/`) — Positioning, value pillars, brief offers, credibility cues, primary CTA.
- Courses (`/courses`) — Structured overview of offers; who it’s for; what to expect; CTA.
- Contact (`/contact`) — Assessment booking details; WhatsApp link; email; hours; map/area note.

Roadmap (not in MVP): About, Testimonials/Case Studies, Resources/Articles, FAQ, Corporate Training page.

## Narrative Flow & Sample Copy

### Home (`/`)
- Hero: “Bespoke, intensive English coaching for high-stakes communication.”
  - Sub: “PIK & PIK2 — private, executive-focused training. NDA on request.”
  - Primary CTA: Book Assessment → `/contact`.
- Value Pillars (3):
  1) Personalised to your next meeting
  2) Executive presence & clarity
  3) Confidential, punctual, discreet
- Snapshot of Offers: 1:1 coaching; executive writing; assessment plan.
- Light proof cue (placeholder for testimonials later).

### Courses (`/courses`)
- Purpose: clarify offers and outcomes; expectation setting; CTA.
- Sections:
  - 1:1 Executive Coaching — scenarios, outcomes, session format.
  - Executive Writing — deliverables and editing approach.
  - Assessment & Plan — diagnostic, goals, milestone plan.
  - Who It’s For — executives, founders, senior managers.
  - CTA: Book Assessment.

### Contact (`/contact`)
- Purpose: frictionless booking and contact options.
- Content:
  - WhatsApp (preferred): +62 813-2126-7709 (link opens chat)
  - Email: andrew@ashfordenglish.com
  - Hours: Mon–Fri, 08:00–18:00
  - Area: PIK & PIK2 (Jakarta Utara)
  - Optional note: NDA available on request.

## Accessibility Notes
- Semantic HTML with proper landmark roles (header, nav, main, footer).
- Accessible link text on CTAs; keyboard focus styles; sufficient contrast (AA+).
- Labeled form fields if/when forms are added.

## SEO & Structured Data
- JSON-LD `ProfessionalService` in `layout.tsx` using:
  - name: Ashford English Private Training
  - url: https://www.ashfordenglish.com
  - areaServed: PIK & PIK2 (North Jakarta)
  - email: andrew@ashfordenglish.com
  - telephone: +6281321267709
  - openingHours: Mo-Fr 08:00-18:00
  - sameAs: [] (no LinkedIn yet)
  - image/logo: `/og-default.jpg` and `/favicon.ico` (placeholder OG)
- Robots: allow all; optionally disallow `/api/*` for now.
- Sitemap: static routes for `/`, `/courses`, `/contact`.

## Content TODOs / Placeholders
- Business PDF & Web Dev Brief ingestion (refine copy and ordering based on details).
- Provide OG image asset; current plan uses placeholder path.
- Address details (if desired) for schema; currently area-level only.
- LinkedIn URL and any other `sameAs` profiles when available.
