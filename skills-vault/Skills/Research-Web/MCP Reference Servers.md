---
tags: [server, research-web]
category: Research-Web
source: https://github.com/modelcontextprotocol/servers
license: MIT
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# MCP Reference Servers

Official MCP examples: fetch, filesystem, git, memory, time, sequential thinking.

## What it does
- `fetch`: read web pages as markdown.
- `memory`: knowledge-graph memory.
- `sequentialthinking`: structured step-by-step reasoning.
- `git`, `filesystem`, `time`.

## Install
```
claude mcp add fetch -- uvx mcp-server-fetch
claude mcp add memory -- npx -y @modelcontextprotocol/server-memory
claude mcp add seq-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
```
Scan first: `skillspector scan https://github.com/modelcontextprotocol/servers --no-llm`

## Usage
- *"Fetch this URL and summarise it."*

## Caveats/risks
- They're reference implementations, not hardened products.
- Claude Code already has file, git and web-fetch tools; `memory` and `fetch` add the most.

**Verdict: APPROVE** (2026-11-06). Read src/ READMEs for all 7 servers: no hidden network calls.

## Links
- Repo: https://github.com/modelcontextprotocol/servers
- Category: [[Categories/Research-Web|Research-Web]] · [[Home]]
