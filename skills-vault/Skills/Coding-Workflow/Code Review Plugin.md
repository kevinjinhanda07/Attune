---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Code Review Plugin

Multi-agent PR review with confidence scores.

## What it does
- `/code-review` runs several specialised reviewer agents and keeps only high-confidence findings.

## Install
```
/plugin install code-review@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- `/code-review` on a branch or PR.

## Caveats/risks
- Several agents = more tokens per review.

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin. Read command file: no hooks, no MCP.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
