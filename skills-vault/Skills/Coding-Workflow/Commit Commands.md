---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Commit Commands

`/commit`, `/commit-push-pr`, branch cleanup.

## What it does
- Writes the commit message from the diff, pushes, opens the PR.

## Install
```
/plugin install commit-commands@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- `/commit`
- `/commit-push-pr`

## Caveats/risks
- Pushes and opens PRs: check the branch first.

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin. Commands only.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
