---
tags: [skill, web-design]
category: Web-Design
source: https://github.com/alonw0/web-asset-generator
license: MIT
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: yes (Attune repo)
---
# Web Asset Generator

Favicons, PWA app icons and social share (Open Graph) images.

## What it does
- Makes every favicon/app-icon size and OG images for Facebook, X, WhatsApp, LinkedIn from a logo, text or emoji.
- Outputs the HTML `<meta>`/`<link>` tags too.

## Install
```
/plugin marketplace add alonw0/web-asset-generator
/plugin install web-asset-generator@web-asset-generator-marketplace
```
Scan first: `skillspector scan https://github.com/alonw0/web-asset-generator --no-llm`

## Usage
- *"Generate favicons and an OG image from logo.svg."*

## Caveats/risks
- Needs Python + Pillow on your computer.
- Last updated Jan 2026, but small and stable.

**Verdict: APPROVE** (2026-11-06). Read SKILL.md and its Python scripts: local image generation with Pillow, no network calls.

## Links
- Repo: https://github.com/alonw0/web-asset-generator
- Copies: [[Skills/Web-Design/Web Asset Generator/web-asset-generator.SKILL|web-asset-generator]]
- Category: [[Categories/Web-Design|Web-Design]] · [[Home]]
