---
tags: [tool, ai, official]
type: tool
source: https://about.roblox.com/newsroom/2026/04/roblox-studio-going-agentic
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# Roblox Studio Assistant
Up: [[MOC-Tools]] · Related: [[Roblox-Studio-MCP]]

**Verdict: ✅ APPROVE** – official, in Studio, free.

## What it is (late 2026)
- Chat AI inside Studio: writes/explains scripts, builds, inserts assets.
- **Planning Mode** (Apr 2026): proposes a plan → you edit → it executes → it **playtests** to verify.
- **Mesh Generation** + (announced) Procedural Model Generation.
- Material / Texture generators (texture gen still beta-flagged in 2026 per third parties).
- "External LLM support": Assistant can be pointed at other models (see DevForum post "Studio MCP Server Updates and External LLM Support for Assistant").

## When to use vs Claude Code
| Task | Use |
|---|---|
| Quick in-place builds, asset gen | Assistant |
| Multi-file code, refactors, tests, git | Claude Code + [[Rojo]] + [[Roblox-Studio-MCP]] |

## Caveats
- Check generated meshes for tri counts ([[Blender-For-Roblox]]).
- Review all generated scripts for remote security ([[MOC-Security]]).
