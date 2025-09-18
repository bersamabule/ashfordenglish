# AGENT_LOG — Environment, Implementation & QA

Timestamp: 2025-09-18T09:10:43+07:00
Working dir: c:/Sites/ashfordenglish/

## Environment Commands (Stage 0)
- node -v → v22.14.0
- npm -v → 10.9.2
- git --version → git version 2.48.1.windows.1
- vercel --version → not found (before install)
- bun -v → 1.2.21
- where.exe node → C:\\Program Files\\nodejs\\node.exe
- where.exe bun → C:\\Users\\andre\\.bun\\bin\\bun.exe
- where.exe vercel → not found (before install)

## CLI Install
- bun add -g vercel → installed vercel@48.0.2 (binaries: vc, vercel)
- vercel --version → Vercel CLI 48.0.2

## Files Added/Modified (Stage 3)
- Modified: `src/app/layout.tsx`
  - Set global metadata, OG defaults, header/nav/footer, skip link, JSON-LD (ProfessionalService).
- Modified: `src/app/page.tsx`
  - Hero, value pillars, CTA to /contact.
- Modified: `src/app/globals.css`
  - Use Geist variable font for body.
- Added: `src/app/courses/page.tsx`
  - Offers overview sections and CTA.
- Added: `src/app/contact/page.tsx`
  - WhatsApp link (wa.me/6281321267709), email, hours, area, NDA note.
- Added: `src/app/robots.ts`
  - Allow all, disallow /api/*; host + sitemap.
- Added: `src/app/sitemap.ts`
  - Routes: /, /courses, /contact.

Note: `public/og-default.jpg` referenced but not added yet (awaiting asset). Builds should succeed without the file; OG will fallback.

## Lint/Build
Executed under Node 20:
- bun run lint → PASS (0 errors)
- bun run build → PASS
  - Next.js 15.5.3 (Turbopack)
  - All routes compiled as static:
    - `/`, `/courses`, `/contact`, `/robots.txt`, `/sitemap.xml`, `/_not-found`

Notes:
- Replaced internal anchors with `next/link` to satisfy `@next/next/no-html-link-for-pages`.
- Tailwind v4 `@theme` inline rule remains; acceptable.

## Next Actions
- Install/use Node 20.x via nvm-windows, then run lint/build.
- Provide Business PDF + Web Dev Brief for content refinement.
- Provide `public/og-default.jpg` (1200×630) placeholder asset or approve us to attach a simple branded placeholder.
