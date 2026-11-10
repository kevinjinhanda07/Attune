---
tags: [plugin, memory-context]
category: Memory-Context
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# CLAUDE-md Management

Audit and update CLAUDE.md with what each session learned.

## What it does
- `/revise-claude-md` captures learnings; improver skill grades CLAUDE.md quality.

## Install
```
/plugin install claude-md-management@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- `/revise-claude-md` at the end of a session.

## Caveats/risks
- None.

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management
- Category: [[Categories/Memory-Context|Memory-Context]] · [[Home]]
