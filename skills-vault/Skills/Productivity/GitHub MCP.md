---
tags: [server, productivity]
category: Productivity
source: https://github.com/github/github-mcp-server
license: MIT
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# GitHub MCP

Issues, PRs, Actions, code search on GitHub.

## What it does
- GitHub's official MCP server (hosted).

## Install
```
/plugin install github@claude-plugins-official
# needs GITHUB_PERSONAL_ACCESS_TOKEN in your environment
```
Scan first: `skillspector scan https://github.com/github/github-mcp-server --no-llm`

## Usage
- *"Summarise open PRs that need my review."*

## Caveats/risks
- Use a fine-grained token scoped to the repos you need.

**Verdict: APPROVE** (2026-11-06). Official GitHub. Read README and plugin config (hosted endpoint).

## Links
- Repo: https://github.com/github/github-mcp-server
- Category: [[Categories/Productivity|Productivity]] · [[Home]]
