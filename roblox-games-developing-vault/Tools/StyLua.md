---
tags: [tool, toolchain, format]
type: tool
source: https://github.com/JohnnyMorganz/StyLua
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# StyLua
Up: [[MOC-Tools]] · Pair: [[Selene]]

**Verdict: ✅ APPROVE** – formatter for Lua/Luau.

```sh
rokit add JohnnyMorganz/StyLua
stylua src            # format
stylua --check src    # CI
```
`stylua.toml`:
```toml
syntax = "Luau"
column_width = 100
indent_type = "Tabs"
```
