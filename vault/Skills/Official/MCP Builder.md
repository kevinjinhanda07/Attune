---
tags: [skill, official]
category: Official
source: https://github.com/anthropics/skills
license: Apache-2.0
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# MCP Builder

Guide for building good MCP servers (Python or TypeScript).

## What it does
- Step-by-step guide to design tools, write the server and test it with evaluations.

## Install
```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```
Scan first: `skillspector scan https://github.com/anthropics/skills --no-llm`

## Usage
- *"Build an MCP server for my Supabase project's admin tasks."*

## Caveats/risks
- `example-skills` also installs the other example skills (art, GIFs, themes…). Fine, they only load when relevant.

**Verdict: APPROVE** (2026-11-06). Read SKILL.md and reference docs: instructions only.

## Links
- Repo: https://github.com/anthropics/skills
- Copies: [[Skills/Official/MCP Builder/mcp-builder.SKILL|mcp-builder]]
- Category: [[Categories/Official|Official]] · [[Home]]
