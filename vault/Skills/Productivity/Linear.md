---
tags: [server, productivity]
category: Productivity
source: https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/linear
license: Apache-2.0
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Linear

Linear issues and projects (official remote MCP).

## What it does
- Find, create and update issues, projects, comments.

## Install
```
/plugin install linear@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- *"Create Linear issues from this TODO list."*

## Caveats/risks
- OAuth into your workspace.

**Verdict: APPROVE** (2026-11-06). Config points to `https://mcp.linear.app/mcp` (Linear's own).

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/linear
- Category: [[Categories/Productivity|Productivity]] · [[Home]]
