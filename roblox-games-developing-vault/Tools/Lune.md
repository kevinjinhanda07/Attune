---
tags: [tool, toolchain, runtime]
type: tool
source: https://github.com/lune-org/lune
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# Lune
Up: [[MOC-Tools]]

**Verdict: ✅ APPROVE** – standalone Luau runtime for scripts outside Studio (build steps, file tools, place-file editing via `@lune/roblox`).

```sh
rokit add lune-org/lune
lune run scripts/build
```
Use for: codegen, asset manifests, batch-editing `.rbxl`. Not for running game code (no engine).
