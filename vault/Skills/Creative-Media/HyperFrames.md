---
tags: [plugin, creative-media]
category: Creative-Media
source: https://github.com/heygen-com/hyperframes
license: Apache-2.0
type: plugin
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# HyperFrames

HeyGen's HTML-to-MP4 video framework: demos, explainers, launch films.

## What it does
- Write a video as HTML + GSAP; renders frame-by-frame to MP4. Captions, charts, maps, slideshows, a block registry.

## Install
```
/plugin install hyperframes@claude-plugins-official
# or
/plugin marketplace add heygen-com/hyperframes
/plugin install hyperframes@hyperframes
```
Scan first: `skillspector scan https://github.com/heygen-com/hyperframes --no-llm`

## Usage
- *"Make a 20-second product demo video of the dashboard."*

## Caveats/risks
- **Telemetry:** the skill runs `npx hyperframes events` at start (usage beacon, account-linked if signed in); the CLI has an opt-out.
- HeyGen avatars/voices need `HEYGEN_API_KEY` and paid credits; plain HTML videos don't.
- Needs Node + ffmpeg.

**Verdict: CAUTION** (2026-11-06). Read the main SKILL.md files and plugin config: legit (HeyGen), but built-in usage beacon.

## Links
- Repo: https://github.com/heygen-com/hyperframes
- Copies: [[Skills/Creative-Media/HyperFrames/hyperframes.SKILL|hyperframes]] · [[Skills/Creative-Media/HyperFrames/hyperframes-cli.SKILL|hyperframes-cli]]
- Category: [[Categories/Creative-Media|Creative-Media]] · [[Home]]
