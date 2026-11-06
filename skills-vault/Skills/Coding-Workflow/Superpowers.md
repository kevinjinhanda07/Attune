---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/obra/superpowers
license: MIT
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Superpowers

Brainstorm → plan → TDD → debug → review workflow skills.

## What it does
- 14 skills: brainstorming, writing plans, executing plans, test-driven development, systematic debugging, code review, git worktrees, subagent-driven development.
- Forces design-before-code and red/green tests.

## Install
```
/plugin install superpowers@claude-plugins-official
(If the official marketplace is missing: `/plugin marketplace add anthropics/claude-plugins-official`.)
```
Scan first: `skillspector scan https://github.com/obra/superpowers --no-llm`

## Usage
- *"Let's brainstorm this feature"* → it writes a spec, then a plan, then builds with tests.

## Caveats/risks
- SessionStart hook loads its intro text into every session (local script, no network).
- Heavier process: slower for tiny fixes.

**Verdict: APPROVE** (2026-11-06). Read the 14 SKILL.md files and `hooks/session-start`: instructions only; hook just prints the bootstrap skill.

## Links
- Repo: https://github.com/obra/superpowers
- Copies: [[Skills/Coding-Workflow/Superpowers/brainstorming.SKILL|brainstorming]] · [[Skills/Coding-Workflow/Superpowers/diagnosing-superpowers.SKILL|diagnosing-superpowers]] · [[Skills/Coding-Workflow/Superpowers/dispatching-parallel-agents.SKILL|dispatching-parallel-agents]] · [[Skills/Coding-Workflow/Superpowers/executing-plans.SKILL|executing-plans]] · [[Skills/Coding-Workflow/Superpowers/finishing-a-development-branch.SKILL|finishing-a-development-branch]] · [[Skills/Coding-Workflow/Superpowers/receiving-code-review.SKILL|receiving-code-review]] · [[Skills/Coding-Workflow/Superpowers/requesting-code-review.SKILL|requesting-code-review]] · [[Skills/Coding-Workflow/Superpowers/subagent-driven-development.SKILL|subagent-driven-development]] · [[Skills/Coding-Workflow/Superpowers/systematic-debugging.SKILL|systematic-debugging]] · [[Skills/Coding-Workflow/Superpowers/using-git-worktrees.SKILL|using-git-worktrees]] · [[Skills/Coding-Workflow/Superpowers/using-superpowers.SKILL|using-superpowers]] · [[Skills/Coding-Workflow/Superpowers/verification-before-completion.SKILL|verification-before-completion]]
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
