---
tags: [testing, performance]
type: guide
source: https://create.roblox.com/docs/performance-optimization
risk: low
updated: 2026-11-06
---
# Testing & profiling
Up: [[MOC-Testing]]

| Need | Tool | Open |
|---|---|---|
| Lint/format/types | [[Selene]], [[StyLua]], [[luau-lsp]] | CLI |
| Unit tests | [[Jest-Lua]] | in Studio |
| Replication bugs | Test → Clients & Server | Studio |
| Logs live | Developer Console | F9 |
| Frame time | MicroProfiler | Ctrl+F6 |
| CPU per function | Script Profiler | View tab |
| Leaks | Luau Heap (Dev Console → Memory) | F9 |

Targets: 16.6 ms/frame (60 FPS); scripts ≲ 2–3 ms.
With Claude + [[Roblox-Studio-MCP]]: "playtest, read output, fix errors, repeat".
