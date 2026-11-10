---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Hookify

Turn "don't do X" into hooks from plain English.

## What it does
- `/hookify` writes rules (e.g. block `rm -rf`, warn on console.log) enforced by hooks.

## Install
```
/plugin install hookify@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- `/hookify warn me before editing .env files`

## Caveats/risks
- Installs Pre/PostToolUse, Stop and UserPromptSubmit hooks (local Python rule engine).

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin. Read hooks.json and rule engine: local pattern matching only.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
