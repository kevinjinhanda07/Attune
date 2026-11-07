---
tags: [CLI, memory-context]
category: Memory-Context
source: https://github.com/Graphify-Labs/graphify
license: Apache-2.0
type: CLI
risk: caution
verdict: CAUTION
vetted: 2026-11-07
installed: no
---
# Graphify

Turns a codebase (plus docs, PDFs, images, video) into a knowledge graph Claude queries instead of grepping.

## What it does
- `/graphify .` builds `graphify-out/`: `graph.html` (clickable map), `GRAPH_REPORT.md` (key concepts), `graph.json`.
- Code is parsed locally with tree-sitter (~40 languages, no LLM). Docs/images/video use your assistant's model or an API key.
- Then `graphify query`, `graphify path A B`, `graphify explain X`. Can export an Obsidian vault (`--obsidian`).
- Claims big token savings on large repos; paid Graphify Cloud upsell (YC S26).

## Install
```
uv tool install graphifyy      # note: double y
graphify install               # registers the skill for Claude Code
```
Scan first: `skillspector scan https://github.com/Graphify-Labs/graphify --no-llm`

## Usage
- `/graphify .` in a big repo, then ask architecture questions.
- `graphify update .` after code changes (local, no API cost).

## Caveats/risks
- **PyPI name is `graphifyy` (two y's).** Don't install a package just called `graphify`.
- `graphify install` edits your global `~/.claude/CLAUDE.md` and adds **PreToolUse hooks on Bash, Grep, Read and Glob** (every search/read runs `graphify hook-guard`, ~170ms, 10s timeout) plus a SessionStart hook. Undo with `graphify uninstall`.
- Its CLAUDE.md rules tell Claude to query the graph before reading files: stale graphs mislead, so keep `graphify update .` running.
- Docs/PDF/image/video extraction sends that content to the LLM you configure. `/graphify <github URL>` clones and fetches remote content (SSRF-guarded).
- Overkill for small projects like Attune; worth it on large codebases.

**Verdict: CAUTION** (2026-11-07). Read README, pyproject, skill.md, always-on CLAUDE.md block, install.py hook code and network code: no telemetry (query log off by default), app.graphify.com only printed as a link. Caution = global config edits + hooks on every tool call.

## Links
- Repo: https://github.com/Graphify-Labs/graphify
- Copies: [[Skills/Memory-Context/Graphify/graphify.SKILL|graphify]]
- Category: [[Categories/Memory-Context|Memory-Context]] · [[Home]]
