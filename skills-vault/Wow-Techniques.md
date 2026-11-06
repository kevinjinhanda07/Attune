---
tags: [web-design, cheatsheet]
---
# Wow Techniques

What makes award-winning sites stand out, and what builds each one.
Skill = Claude skill in this vault · Lib = library you add to the site.

## Scroll & motion
| Technique | How | Lib | Skill |
|---|---|---|---|
| Buttery smooth scroll | Inertia scroll synced to animations | Lenis | [[GSAP Skills]] (ScrollTrigger + Lenis) |
| Pinned scrollytelling | Pin a section, scrub a timeline through it | GSAP ScrollTrigger | [[GSAP Skills]] |
| Split-text reveals | Lines/words/chars stagger in on scroll | GSAP SplitText | [[GSAP Skills]] |
| Shared-element transitions | Card morphs into the next page's hero | View Transitions API / GSAP Flip | [[Modern Web Guidance]], [[Vercel Agent Skills]] (react-view-transitions) |
| Page transitions | Curtain/wipe between pages, no white flash | Astro View Transitions, Barba.js, Next.js | [[Modern Web Guidance]] |
| CSS-only scroll effects | Parallax, progress bars, reveals with no JS | `animation-timeline: scroll()/view()` | [[Modern Web Guidance]] |
| SVG shape morphing | Logo/icon morphs between shapes | GSAP MorphSVG | [[GSAP Skills]] |
| Springy UI | Layout animations, drag, gestures in React | Motion | [[Context7]] (Motion docs) |

## 3D & shaders
| Technique | How | Lib | Skill |
|---|---|---|---|
| Hero 3D scene | Model/particles reacting to scroll and cursor | Three.js / React Three Fiber + drei | [[Threejs Skills]] |
| Image hover distortion | Displacement/noise shader on hover | Three.js or OGL + GLSL | [[Threejs Skills]] (shaders) |
| Animated gradient / noise backgrounds | Fragment shader, simplex noise | GLSL, OGL | [[Threejs Skills]], [[Anthropic Creative Skills]] |
| Post-processing | Bloom, grain, chromatic aberration | three/postprocessing | [[Threejs Skills]] |
| No-code 3D embeds | Design in Spline, embed scene | Spline | (skill unverified: see [[Inbox]]) |

## Interaction
| Technique | How | Lib | Skill |
|---|---|---|---|
| Custom cursor | Follower dot/blob, changes on hover targets | GSAP `quickTo` | [[GSAP Skills]] |
| Magnetic buttons | Button pulls toward cursor within radius | GSAP `quickTo` | [[GSAP Skills]], [[Impeccable]] (`animate`) |
| Drag / throw physics | Items you can fling and stack | Matter.js, GSAP Draggable + Inertia | [[GSAP Skills]] |
| Interactive vector characters | State-machine animations reacting to input | Rive | — |
| Micro-interactions | Hover, press, focus states with intent | CSS + Motion/GSAP | [[Impeccable]] (`delight`), [[Taste Skill]] |

## Type, layout, colour
| Technique | How | Skill |
|---|---|---|
| Kinetic / oversized type | Variable-font axes animated, huge display type | [[Impeccable]] (`typeset`), [[GSAP Skills]] |
| Strong art direction | One bold idea, editorial grid, deliberate whitespace | [[Frontend Design]], [[Taste Skill]] |
| Anti-slop | No purple gradients, emoji icons, generic hero + 3 cards | [[Taste Skill]], [[Impeccable]] (`critique`) |
| Design tokens | Colour/type/spacing as CSS variables, one system | [[Figma MCP]] (variables), [[UI UX Pro Max]] |
| Real assets | Real photos/product UI, not stock filler | [[Taste Skill]] |

## Don't skip (judges notice)
| Rule | How | Skill |
|---|---|---|
| Respect `prefers-reduced-motion` | Swap scroll-jacking/parallax for fades | [[Web Quality Skills]] (accessibility), [[UI Skills]] |
| Core Web Vitals | LCP < 2.5s, CLS < 0.1, INP < 200ms | [[Web Quality Skills]], [[Chrome DevTools MCP]] |
| Lazy-load heavy 3D | Load canvas after first paint / on visibility; low-power fallback image | [[Threejs Skills]] (performance) |
| Animate only transform/opacity | Avoid layout thrash; `will-change` sparingly | [[UI Skills]] (fixing-motion-performance), [[GSAP Skills]] (performance) |
| Mobile first-class | Touch-friendly; disable heavy effects on low-end devices | [[Playwright MCP]] screenshots at 390px |
| Keyboard + screen reader | Focus states, real buttons, alt text | [[Web Quality Skills]] |

Stack and install order: [[Web-Design-Starter-Pack]] · [[Categories/Web-Design|Web Design]] · [[Home]]
