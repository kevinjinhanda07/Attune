---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Code Simplifier

Agent that cleans up recently changed code without changing behaviour.

## What it does
- Refines for clarity and consistency; keeps functionality.

## Install
```
/plugin install code-simplifier@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- *"Simplify what we just wrote."*

## Caveats/risks
- Review its diff; refactors can hide subtle changes.

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin. One agent file.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
