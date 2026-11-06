---
tags: [skill, web-design]
category: Web-Design
source: https://github.com/Leonxlnx/taste-skill
license: MIT
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Taste Skill

"Anti-slop" frontend art direction with a real-browser checker.

## What it does
- Strict house rules (plain copy, real photos/UI, one system), layout library, and scripts that screenshot pages in Chrome and flag slop.

## Install
```
/plugin marketplace add Leonxlnx/taste-skill
/plugin install taste-skill@taste-skill
```
Scan first: `skillspector scan https://github.com/Leonxlnx/taste-skill --no-llm`

## Usage
- *"Redesign this page, it looks AI-made."*

## Caveats/risks
- Needs Node 22+ and Chrome.
- Opinionated: "figma.com / x.ai" bar; not for wild experimental art sites.

**Verdict: APPROVE** (2026-11-06). Read SKILL.md and scripts: they launch local Chrome via DevTools on 127.0.0.1 only; no outbound calls besides fonts/CDN in templates.

## Links
- Repo: https://github.com/Leonxlnx/taste-skill
- Copies: [[Skills/Web-Design/Taste Skill/taste-skill.SKILL|taste-skill]]
- Category: [[Categories/Web-Design|Web-Design]] · [[Home]]
