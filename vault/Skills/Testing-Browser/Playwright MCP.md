---
tags: [server, testing-browser]
category: Testing-Browser
source: https://github.com/microsoft/playwright-mcp
license: Apache-2.0
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: yes (Attune repo)
---
# Playwright MCP

Claude drives a real browser: click, type, screenshot.

## What it does
- Uses the accessibility tree (fast, no vision model needed).
- Core of the **screenshot → critique → fix** loop for web design.

## Install
```
/plugin install playwright@claude-plugins-official
# or
claude mcp add playwright npx @playwright/mcp@latest
```
Scan first: `skillspector scan https://github.com/microsoft/playwright-mcp --no-llm`

## Usage
- *"Open localhost:3000, screenshot desktop and mobile, list what looks off."*

## Caveats/risks
- Runs `@latest` from npm each start (unpinned).
- Don't let it log into real accounts unsupervised.

**Verdict: APPROVE** (2026-11-06). Microsoft official. Read README and plugin `.mcp.json` (just `npx @playwright/mcp@latest`).

## Links
- Repo: https://github.com/microsoft/playwright-mcp
- Category: [[Categories/Testing-Browser|Testing-Browser]] · [[Home]]
