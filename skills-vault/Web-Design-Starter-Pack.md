---
tags: [starter, web-design]
---
# Web Design Starter Pack

For award-level sites that don't look AI-made. Install in this order (scan each with [[SkillSpector]] first).

## Install order
**1. [[Frontend Design]]**: sets a bold, specific aesthetic direction.
```
/plugin install frontend-design@claude-plugins-official
```
**2. [[Taste Skill]]**: anti-slop house rules + browser checker.
```
/plugin marketplace add Leonxlnx/taste-skill
/plugin install taste-skill@taste-skill
```
**3. [[Impeccable]]**: `/impeccable critique`, `polish`, `animate`, `typeset`.
```
/plugin marketplace add pbakaus/impeccable
/plugin install impeccable@impeccable
```
**4. [[GSAP Skills]]**: correct ScrollTrigger, SplitText, Flip, timelines.
```
/plugin marketplace add greensock/gsap-skills
/plugin install gsap-skills@gsap-skills
```
**5. [[Playwright MCP]]**: screenshot → critique → fix loop.
```
/plugin install playwright@claude-plugins-official
```
**6. [[Modern Web Guidance]]**: View Transitions, scroll-driven CSS, modern APIs.
```
/plugin install modern-web-guidance@claude-plugins-official
```
**7. [[Web Quality Skills]]**: Core Web Vitals, accessibility, SEO.
```
/plugin marketplace add addyosmani/web-quality-skills
/plugin install web-quality-skills@addy-web-quality-skills
```
**8. [[Figma MCP]]**: if you design in Figma first.
```
/plugin install figma@claude-plugins-official
```
**9. [[Threejs Skills]]**: when the site needs WebGL/3D.
```
npx skills add cloudai-x/threejs-skills
```
**10. [[Chrome DevTools MCP]]**: performance traces on heavy pages.
```
/plugin install chrome-devtools-mcp@claude-plugins-official
```
Also useful: [[Context7]] (current Three.js/GSAP/Motion docs), [[Vercel Agent Skills]] (React/Next.js), [[UI Skills]] (`fixing-motion-performance`).

Don't stack all the design-taste skills on one task. Pick **Taste Skill** *or* **Impeccable** as the lead; they have different opinions.

## Recommended stack
| Layer | Pick | Why |
|---|---|---|
| Framework | **Astro** (content/portfolio) or **Next.js** (app-like) | Astro ships little JS and has built-in View Transitions |
| Smooth scroll | **Lenis** | Industry standard on Awwwards sites; syncs with ScrollTrigger |
| Animation | **GSAP** + ScrollTrigger, SplitText, Flip | All plugins free; timeline control |
| React UI motion | **Motion** (ex-Framer Motion) | Layout animations, gestures, springs |
| Page transitions | View Transitions API → Barba.js for non-Astro static sites | Native first |
| 3D / WebGL | **Three.js** or **React Three Fiber** + drei; **OGL** for light effects | Three.js powers most 3D award sites |
| Shaders | Custom GLSL (noise, displacement, gradients) | The "signature" look |
| Vector animation | **Rive** (interactive) / Lottie (simple) | Rive has state machines |
| Physics | Matter.js | Drag/throw/fall interactions |
| Styling | CSS custom properties as design tokens (+ Tailwind if you like) | One system for colour, type, spacing |
| Type | Variable fonts, self-hosted (`font-display: swap`) | Kinetic type without layout shift |
| QA | Playwright MCP screenshots + Lighthouse/Chrome DevTools MCP | Look and speed checks |

## The loop
1. Pick a direction (references + [[Frontend Design]]).
2. Build a section → Playwright screenshots at 390, 768, 1440 px.
3. `/impeccable critique` or Taste Skill check → fix.
4. Test with `prefers-reduced-motion` on and a throttled CPU. Keep LCP < 2.5s and CLS < 0.1.

See [[Wow-Techniques]] for what makes these sites stand out. Category: [[Categories/Web-Design|Web Design]] · [[Home]]
