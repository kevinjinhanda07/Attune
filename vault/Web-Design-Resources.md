---
tags: [web-design, resources]
---
# Web Design Resources

Websites and libraries (not Claude skills) that help with the look. Most come from a "top 5 sites every vibe coder should know" video (added 2026-11-06).

## Use
| Resource | What | Verdict |
|---|---|---|
| **Godly** · https://godly.website | Free gallery of standout live sites, heavy on animation. Collect 3–5 references before you start, then give Claude the URLs or screenshots. | Use |
| **Realtime Colors** · https://realtimecolors.com | Try a palette + font pair on a sample UI before building. Exports CSS variables / Tailwind config. | Use |
| **React Spring** · https://github.com/pmndrs/react-spring | Spring-physics animation for React (MIT, maintained, same team as React Three Fiber). Alternative to Motion. | Use if you prefer it to Motion |
| **[[Watermelon UI]]** · https://ui.watermelon.sh | Free React/Tailwind blocks + read-only MCP. Has its own vetted note. | APPROVE |

## Skip
| Resource | Why |
|---|---|
| **Mocha** (the video's "Menace", most likely) · getmocha.com | No-code AI app builder (backend, auth, one-click publish). A directory lists it as **shutting down**, and it's a separate platform, not something Claude Code uses. If you want a hosted backend, use [[Supabase]] or [[Neon]]. |

## How to use them with Claude
1. **Taste first:** browse Godly and Awwwards, save 3–5 sites you like. Ask Claude (with [[Playwright MCP]]) to screenshot them and write down what makes each work: type, grid, motion, colour.
2. **Palette:** settle colours and fonts in Realtime Colors, export the variables, give them to Claude as design tokens.
3. **Build:** start from [[Watermelon UI]] blocks only if speed matters more than uniqueness. Then restyle with [[Taste Skill]] or [[Impeccable]] so it doesn't look like everyone else's.
4. **Motion:** GSAP for scroll/timelines ([[GSAP Skills]]); Motion or React Spring for React UI springs.

Notes: Realtime Colors' GitHub repo stopped updating in 2023 when the site moved hosts; the site itself is the product. Godly is free to browse.

[[Web-Design-Starter-Pack]] · [[Wow-Techniques]] · [[Categories/Web-Design|Web Design]] · [[Home]]
