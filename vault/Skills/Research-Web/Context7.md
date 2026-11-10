---
tags: [server, research-web]
category: Research-Web
source: https://github.com/upstash/context7
license: MIT
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Context7

Current, version-specific library docs inside Claude.

## What it does
- Fetches up-to-date docs and examples for thousands of libraries, so Claude stops using stale APIs.

## Install
```
/plugin install context7@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/upstash/context7 --no-llm`

## Usage
- *"Use context7 for the GSAP ScrollTrigger docs."*

## Caveats/risks
- Hosted service (Upstash); your library queries go to it. Free tier has rate limits; API key optional.

**Verdict: APPROVE** (2026-11-06). Read README, plugin config (remote HTTP MCP) and skills: instructions only.

## Links
- Repo: https://github.com/upstash/context7
- Copies: [[Skills/Research-Web/Context7/context7-cli.SKILL|context7-cli]] · [[Skills/Research-Web/Context7/context7-mcp.SKILL|context7-mcp]] · [[Skills/Research-Web/Context7/find-docs.SKILL|find-docs]]
- Category: [[Categories/Research-Web|Research-Web]] · [[Home]]
