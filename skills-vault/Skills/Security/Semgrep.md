---
tags: [plugin, security]
category: Security
source: https://github.com/semgrep/mcp-marketplace
license: MIT
type: plugin
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Semgrep

Semgrep static analysis + secrets/supply-chain scans in Claude.

## What it does
- Scan code with Semgrep rules; write custom rules; Malware Firewall (mfw).

## Install
```
/plugin install semgrep@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/semgrep/mcp-marketplace --no-llm`

## Usage
- *"Scan this diff with Semgrep."*

## Caveats/risks
- `install-mfw` skill runs `curl | sh` and `sudo mfw` (Semgrep's own installer). Skip it unless you want mfw.
- Old standalone `semgrep/mcp` repo is deprecated: see [[Rejected]].

**Verdict: CAUTION** (2026-11-06). Read 5 SKILL.md files and hooks: legit vendor, but installer pattern needs care.

## Links
- Repo: https://github.com/semgrep/mcp-marketplace
- Category: [[Categories/Security|Security]] · [[Home]]
