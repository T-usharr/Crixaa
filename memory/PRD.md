# Crixaa — Marketing Landing Page PRD

## Original problem statement
Build a credible, pre-launch B2B fintech landing page for Crixaa — an underwriting decisioning layer for new-to-credit MSME loans (₹2L–10L) in India, sold to NBFCs and Small Finance Banks. Visual register: Stripe / Ramp / Modern Treasury / Razorpay. Credibility must come only from real third-party evidence (SIDBI, TransUnion CIBIL, SBFC, Aye, Five-Star, NeoGrowth, RBI) with small muted inline attribution captions — no fabricated customers, logos, investors, or stats. One CTA ("Start a conversation") at top and bottom only. 12-beat narrative arc supplied verbatim by the user. Awwwards-level craft: kinetic hero with masked line reveal, one slow editorial marquee, numbered manifesto chapters, framer-motion reveals, lenis smooth scroll, subtle hero parallax.

## User choices (explicit)
- Contact: simple form (name, work email, organization, message), submissions stored + viewable later.
- Theme: light, calm neutral + one sharp accent (deep emerald #047857, CTA only).
- Footer email: placeholder founders@crixaa.com.
- Accent color: no preference (design system chose deep emerald).

## Architecture
- Frontend: React 19 + Tailwind + framer-motion 11 + lenis. Single-page composition in `src/App.js`; components in `src/components/` (Nav, Hero, Marquee, Paradox, Population, Personas, Proof, Counterfactual, HowItWorks, TwoRoles, Compliance, Pilot, WhyCrixaa, Contact, Footer, Reveal, Caption). Fonts: Outfit (display), Plus Jakarta Sans (body), JetBrains Mono (numerals/captions). Source URLs centralized in `Caption.jsx` (SOURCES map).
- Backend: FastAPI `server.py` — POST /api/leads (validated with EmailStr), GET /api/leads (newest first). MongoDB via MONGO_URL/DB_NAME env.
- Design system: `/app/design_guidelines.json` (light slate theme, single emerald CTA accent, tabular-nums for all figures).

## User personas
- Head of Credit / Underwriting at an NBFC-BL or Small Finance Bank (primary buyer).
- Model Risk / Compliance officer evaluating RBI non-delegation + June 2026 Draft MRM fit.
- Larger NBFC-ML/UL credit leadership evaluating buy-vs-build.

## Core requirements (static)
- All 12 narrative beats in exact order, one continuous voice, no "Sources" page.
- Every number attributed with muted inline caption, caption text hyperlinked to source.
- Hero specimen card clearly labeled illustrative; "recommend, never decide" framing throughout.
- Single CTA wording repeated only top + bottom.
- data-testid on every interactive/info element.

## Implemented (2026-08-25)
- Full 12-beat landing page, light editorial theme, blueprint-grid textures.
- Kinetic hero: masked line-by-line headline reveal, tabbed specimen card (Overview / Reason codes / Audit trail), scroll parallax.
- Divergence chart (1.8× vs 1.0×) and weeks-vs-15-minutes to-scale timeline bars, animated in view.
- One slow editorial marquee (pauses on hover, respects reduced motion).
- Unnumbered chapter labels (diamond marker), dark compliance + final CTA bands; nav: The Gap / What lenders say / How It Works / Pilot with us.
- Working contact form → MongoDB, Sonner success/error toasts; GET /api/leads for reviewing submissions.
- Email notification to contact@crixaa.com on every new enquiry (Emergent managed email proxy, httpx async, guardrail-gated template; verified 202 Accepted).
- Instant branded auto-reply to every enquirer ("We've received your enquiry — Crixaa", what-happens-next copy, Reply-To contact@crixaa.com; verified 202 Accepted via delivered@resend.dev).
- Brand logomark: "Strata Funnel" (user-chosen from 6 concepts) — three data layers narrowing into an emerald check; used in nav + footer, light/dark variants; one-time on-load animation in the nav (layers settle top-down, check draws in via pathLength).
- Brand assets: favicon.svg + favicon-32.png + apple-touch-icon.png + 1200×630 og-image.png (generator script: /app/scripts/gen_brand.py); OG/Twitter meta in index.html.
- Final audit: no console errors (only a platform-script warning), no purple gradients/emoji/Inter/centered-layout slop; all sections visually re-verified desktop + mobile.
- Fully responsive (verified 390px + 1920px).

## Backlog
- P0: none blocking.
- P1: real founder email / mailbox wiring (currently placeholder founders@crixaa.com — form data lands in DB only); custom favicon/OG image.
- P2: leads admin view or email notification on new lead; Hindi/regional copy variant; downloadable one-page pilot brief PDF.

## Next tasks
1. Wire form submissions to a real inbox (e.g., Resend) or a password-protected /leads view.
2. Replace placeholder email + add favicon/OG share image.
3. Optional: case-study style deep-dive page on the 90-day shadow pilot.
