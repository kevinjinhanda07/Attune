---
tags: [server, productivity]
category: Productivity
source: https://github.com/taylorwilsdon/google_workspace_mcp
license: MIT
type: server
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Google Workspace MCP

Gmail, Drive, Docs, Sheets, Calendar, Slides in one MCP.

## What it does
- Most complete Google Workspace MCP; tool tiers to limit scope.

## Install
```
claude mcp add google -- uvx workspace-mcp --tool-tier core
```
Scan first: `skillspector scan https://github.com/taylorwilsdon/google_workspace_mcp --no-llm`

## Usage
- *"Draft a reply to the latest email from X."*

## Caveats/risks
- Community project (very popular, maintained), not by Google.
- You create your own Google OAuth client; it gets broad access to mail and files. Use `--tool-tier core` or `--tools` to limit.

**Verdict: CAUTION** (2026-11-06). Read README and skill: clean. Caution = breadth of access.

## Links
- Repo: https://github.com/taylorwilsdon/google_workspace_mcp
- Category: [[Categories/Productivity|Productivity]] · [[Home]]
