---
tags: [plugin, security]
category: Security
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Claude Security

Deep vulnerability scan of your own code at a chosen effort level.

## What it does
- Agentic scan with exploitability checks; runs inside your session.

## Install
```
/plugin install claude-security@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- *"Run a security scan on this repo."*

## Caveats/risks
- High effort = many tokens.

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugin. Read README and hook.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security
- Category: [[Categories/Security|Security]] · [[Home]]
