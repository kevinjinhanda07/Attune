---
tags: [server, research-web]
category: Research-Web
source: https://github.com/brave/brave-search-mcp-server
license: MIT
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Brave Search MCP

Web, news, image and local search via Brave's API.

## What it does
- Independent search index; good free tier.

## Install
```
claude mcp add brave-search -e BRAVE_API_KEY=... -- npx -y @brave/brave-search-mcp-server --transport stdio
```
Scan first: `skillspector scan https://github.com/brave/brave-search-mcp-server --no-llm`

## Usage
- *"Search Brave for…"*

## Caveats/risks
- Needs a Brave Search API key.

**Verdict: APPROVE** (2026-11-06). Official Brave. Read README: plain API client.

## Links
- Repo: https://github.com/brave/brave-search-mcp-server
- Category: [[Categories/Research-Web|Research-Web]] · [[Home]]
