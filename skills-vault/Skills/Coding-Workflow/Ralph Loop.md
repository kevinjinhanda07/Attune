---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop
license: Apache-2.0
type: plugin
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Ralph Loop

Keep Claude iterating on a task until done ("Ralph Wiggum" loop).

## What it does
- A Stop hook re-feeds the same prompt so Claude keeps working until a completion promise is met.

## Install
```
/plugin install ralph-loop@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- `/ralph-loop "make all tests pass" --max-iterations 20`

## Caveats/risks
- Can burn a lot of usage. **Always set `--max-iterations`.**
- Best in a branch or worktree.

**Verdict: CAUTION** (2026-11-06). Official Anthropic plugin. Stop hook + script only. Caution is cost, not safety.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
