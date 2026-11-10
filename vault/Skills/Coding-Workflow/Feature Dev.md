---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/feature-dev
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Feature Dev

Guided feature build: explore → architect → implement → review.

## What it does
- `/feature-dev` with code-explorer, code-architect and code-reviewer agents.

## Install
```
/plugin install feature-dev@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- `/feature-dev add dark mode toggle`

## Caveats/risks
- Overlaps with [[Superpowers]].

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin. Agents + commands only.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/feature-dev
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
