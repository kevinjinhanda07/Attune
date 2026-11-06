---
tags: [server, testing-browser]
category: Testing-Browser
source: https://github.com/ChromeDevTools/chrome-devtools-mcp
license: Apache-2.0
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Chrome DevTools MCP

Live Chrome with DevTools: performance traces, network, console.

## What it does
- Record performance traces and get Core Web Vitals insights (LCP, CLS, INP).
- Inspect network requests and console errors.

## Install
```
/plugin install chrome-devtools-mcp@claude-plugins-official
# or
/plugin marketplace add ChromeDevTools/chrome-devtools-mcp
/plugin install chrome-devtools-mcp@chrome-devtools-plugins
```
Scan first: `skillspector scan https://github.com/ChromeDevTools/chrome-devtools-mcp --no-llm`

## Usage
- *"Trace the homepage load and tell me why LCP is slow."*

## Caveats/risks
- Can see everything in the browser profile it uses; use a separate profile.

**Verdict: APPROVE** (2026-11-06). Google Chrome team official. Read 7 SKILL.md files: instructions only.

## Links
- Repo: https://github.com/ChromeDevTools/chrome-devtools-mcp
- Copies: [[Skills/Testing-Browser/Chrome DevTools MCP/a11y-debugging.SKILL|a11y-debugging]] · [[Skills/Testing-Browser/Chrome DevTools MCP/chrome-devtools-cli.SKILL|chrome-devtools-cli]] · [[Skills/Testing-Browser/Chrome DevTools MCP/chrome-devtools.SKILL|chrome-devtools]] · [[Skills/Testing-Browser/Chrome DevTools MCP/cookie-debugging.SKILL|cookie-debugging]] · [[Skills/Testing-Browser/Chrome DevTools MCP/debug-optimize-lcp.SKILL|debug-optimize-lcp]] · [[Skills/Testing-Browser/Chrome DevTools MCP/memory-leak-debugging.SKILL|memory-leak-debugging]] · [[Skills/Testing-Browser/Chrome DevTools MCP/troubleshooting.SKILL|troubleshooting]]
- Category: [[Categories/Testing-Browser|Testing-Browser]] · [[Home]]
