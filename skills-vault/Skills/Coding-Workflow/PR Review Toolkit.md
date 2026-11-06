---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# PR Review Toolkit

Specialist reviewers: tests, error handling, types, comments.

## What it does
- Agents for silent-failure hunting, test coverage, type design, comment accuracy, simplification.

## Install
```
/plugin install pr-review-toolkit@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- *"Review this PR's error handling"* or `/pr-review-toolkit:review-pr`.

## Caveats/risks
- Overlaps with [[Code Review Plugin]]; pick one as default.

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin. Agents + commands only.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
