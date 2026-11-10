---
tags: [server, memory-context]
category: Memory-Context
source: https://github.com/basicmachines-co/basic-memory
license: AGPL-3.0
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Basic Memory

Long-term memory as plain Markdown files (works with Obsidian).

## What it does
- Claude reads/writes notes in a local folder as a knowledge graph. **Can point at an Obsidian vault.**

## Install
```
uv tool install basic-memory --prerelease=allow
claude mcp add basic-memory -- uvx --prerelease=allow basic-memory mcp
```
Scan first: `skillspector scan https://github.com/basicmachines-co/basic-memory --no-llm`

## Usage
- *"Remember that we chose Lenis + GSAP for the portfolio."*

## Caveats/risks
- AGPL license (fine for personal use).
- Cloud sync is an optional paid service.

**Verdict: APPROVE** (2026-11-06). Read README, hooks and sample skills: local files; no telemetry found.

## Links
- Repo: https://github.com/basicmachines-co/basic-memory
- Category: [[Categories/Memory-Context|Memory-Context]] · [[Home]]
