---
tags: [plugin, memory-context]
category: Memory-Context
source: https://github.com/thedotmack/claude-mem
license: Apache-2.0
type: plugin
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Claude-Mem

Auto-captures every session and injects relevant memory later.

## What it does
- Hooks record tool use, compress it with an AI model, and feed context back into new sessions.

## Install
```
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem@thedotmack
```
Scan first: `skillspector scan https://github.com/thedotmack/claude-mem --no-llm`

## Usage
- Automatic after install; search with its skills.

## Caveats/risks
- Records all sessions (code, outputs) to a local DB via a background worker.
- **Opt-out PostHog telemetry**: run `npx claude-mem telemetry disable` or set `CLAUDE_MEM_TELEMETRY=0`.
- Compression can use extra model calls (OpenRouter option).

**Verdict: CAUTION** (2026-11-06). Read hooks and telemetry docs: telemetry says it excludes prompts/code. Heavy, always-on: caution.

## Links
- Repo: https://github.com/thedotmack/claude-mem
- Category: [[Categories/Memory-Context|Memory-Context]] · [[Home]]
