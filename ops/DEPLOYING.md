# Deploying & Hosting
- Source of truth: this repo, branch `main`.
- Hosting: Vercel. Production domain is **www.ashfordenglish.com**.
- Apex (ashfordenglish.com) 307-redirects to **www**.
- DNS is managed at SiteGround. **Do not change MX/SPF/DKIM/DMARC**.
- Preview deployments: every pull request/branch.
- Production updates: merge to `main`.

# Workflow
1) Create a feature branch: feat/<short-name>.
2) Make changes. Keep diffs small and focused.
3) `npm run dev` locally; fix errors and `npm run lint`.
4) Commit with Conventional Commit style (e.g., `feat: add courses page`).
5) Push and open PR; review the Preview URL on Vercel.
6) Merge to `main` when approved; Production auto-deploys.
