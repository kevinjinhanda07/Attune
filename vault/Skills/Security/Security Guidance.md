---
tags: [plugin, security]
category: Security
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/security-guidance
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Security Guidance

Warns on risky edits; reviews the diff for vulnerabilities when Claude stops.

## What it does
- Pattern warnings (eval, innerHTML, SQL concat…) on edits, plus an LLM diff review at Stop.

## Install
```
/plugin install security-guidance@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- Runs automatically.

## Caveats/risks
- Hooks on SessionStart, UserPromptSubmit, PostToolUse, Stop: adds some tokens per turn.

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin. Read hooks.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/security-guidance
- Category: [[Categories/Security|Security]] · [[Home]]
