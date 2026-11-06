# Attune

Static marketing site (`index.html`, `privacy.html`, `terms.html`, `taskpane.html`) with Supabase (`supabase-setup.sql`, `config.js`).

## Building or redesigning a webpage

When asked to create, redesign or polish a webpage, use the installed web-design skills in this order. Goal: a standout, award-level page that doesn't look AI-made.

1. **Direction:** `frontend-design` sets a bold, specific aesthetic. Lead with `design-taste-frontend` (Taste Skill) house rules: plain copy, real product UI/photos, one system, no generic gradients/emoji icons/hero-plus-3-cards.
2. **Copy & conversion:** `copywriting`, `cro`, then `copy-editing`. `seo-audit` + `schema` for metadata and structured data.
3. **Build:** reuse blocks via the `watermelon` MCP / `watermelon-ui` only as a starting point, then restyle to the page's tokens. Design tokens as CSS custom properties. Follow `baseline-ui`, `web-design-guidelines`, `make-interfaces-feel-better`.
4. **Motion:** `animate` / `choreograph` (Emil Kowalski) decide *whether* and how to animate. GSAP via `gsap-skills` (ScrollTrigger, SplitText, Flip) with Lenis for smooth scroll. Native View Transitions and scroll-driven CSS first (`modern-web-guidance`, `vercel-react-view-transitions` for React).
5. **3D (only if it serves the idea):** `threejs-*` skills; lazy-load the canvas after first paint, with a static fallback image.
6. **Assets:** `web-asset-generator` for favicons, app icons and the OG image.
7. **Look at it:** Playwright MCP screenshots at 390, 768 and 1440 px. Run `/impeccable critique`, fix, then `/impeccable polish`. `review-animations` for motion.
8. **Quality gate:** `web-quality-skills` (Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms; accessibility; SEO), `fixing-accessibility`, `fixing-motion-performance`. Always respect `prefers-reduced-motion`; animate only transform/opacity.

If Taste Skill and Impeccable disagree, Taste Skill wins for marketing pages; use Impeccable for critique and polish passes.
Backend work: follow `supabase` and `supabase-postgres-best-practices` skills; never put the service-role key in client code.

## Adding skills

Vet first (scan with SkillSpector, read SKILL.md, hooks and `.mcp.json`). Vetting notes for every skill live in the Obsidian vault on the `skills-vault` branch. Vendored skills and their sources: `.claude/skills/README.md`.
