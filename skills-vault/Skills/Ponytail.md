---
tags: [plugin, coding, token-savings]
source: https://github.com/DietrichGebert/ponytail
license: MIT
type: plugin
risk: low
vetted: 2026-11-06
installed: no
---
# Ponytail

"Lazy senior dev" mode: the smallest change that fully solves the task, in short replies.

## What it does
- Before writing code, climbs a ladder: does this need to exist → already in the codebase → standard library → platform feature → installed dependency → one line → only then the minimum.
- Never cuts validation, security, data-loss handling or accessibility.
- Leaves `shortcut:` comments for things it deferred.

Skills:
- `ponytail`: the always-on mode (`lite` / `full` / `ultra` / `off`)
- `ponytail-review`: review the current diff
- `ponytail-audit`: whole-repo review, ranked
- `ponytail-debt`: list deferred `shortcut:` comments
- `ponytail-gain`: show benchmark savings
- `ponytail-help`: quick reference

## Install
In Claude Code, as two separate prompts:
```
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```
Use this repo only, not forks. The author says real copies never ship `.exe`/`.dll` files.

## Usage
```
/ponytail full
/ponytail-review          # or: /ponytail-review staged
/ponytail-audit
/ponytail band off        # hide the band above the prompt
```

## Caveats/risks
- **Savings claim:** author says ~50%. [JetBrains measured ~10–15%](https://blog.jetbrains.com/ai/2026/07/ponytail-skill-claude-tested/).
- Active every session through plugin hooks (startup, mode tracking, status-line band). Turn it off with `/ponytail off`.
- `/ponytail band import` reads your past Claude Code sessions to show their cost.
- Vetted: all six SKILL.md files are plain instructions. The hook scripts weren't reviewed line by line.

## Links
- Repo: https://github.com/DietrichGebert/ponytail
- Copies: [[Skills/Ponytail/ponytail.SKILL|ponytail]] · [[Skills/Ponytail/ponytail-review.SKILL|review]] · [[Skills/Ponytail/ponytail-audit.SKILL|audit]] · [[Skills/Ponytail/ponytail-debt.SKILL|debt]] · [[Skills/Ponytail/ponytail-gain.SKILL|gain]] · [[Skills/Ponytail/ponytail-help.SKILL|help]]
- Back to [[Home]]
