---
tags: [server, web-design]
category: Web-Design
source: https://github.com/WatermelonCorp/watermelon-platform
license: MIT
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: yes (Attune repo)
---
# Watermelon UI

Free React + Tailwind component and landing-page catalog Claude can search and install.

## What it does
- Components, animated components, page blocks, dashboards and templates (React, Tailwind v4, Radix, Motion).
- Read-only hosted MCP: `search`, `get_inspiration`, `get_component`, `compose_page` (builds a landing page from sections).
- Bonus skill `make-interfaces-feel-better`: polish details (shadows, borders, hover, micro-interactions).

## Install
```
claude mcp add --transport http watermelon https://mcp.watermelon.sh/mcp
npx skills add WatermelonCorp/watermelon-platform
```
Scan first: `skillspector scan https://github.com/WatermelonCorp/watermelon-platform --no-llm`

## Usage
- *"Find a Watermelon hero block with an animated gradient and install it."*
- *"Compose a SaaS landing page from Watermelon sections, then restyle it to our tokens."*

## Caveats/risks
- Pre-made blocks are the opposite of a unique look: use as a starting point, then art-direct with [[Taste Skill]] or [[Impeccable]].
- Some reports mention paid components alongside the free MIT ones; the MCP says it returns free ones.

**Verdict: APPROVE** (2026-11-06). Read README, `.mcp.json` (hosted read-only endpoint, no API key), plugin.json and both SKILL.md files: instructions only, no hooks for Claude Code. Found via a vibe-coding video.

## Links
- Repo: https://github.com/WatermelonCorp/watermelon-platform
- Copies: [[Skills/Web-Design/Watermelon UI/make-interfaces-feel-better.SKILL|make-interfaces-feel-better]] · [[Skills/Web-Design/Watermelon UI/watermelon-ui.SKILL|watermelon-ui]]
- Category: [[Categories/Web-Design|Web-Design]] · [[Home]]
