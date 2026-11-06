---
tags: [tool, toolchain, lint]
type: tool
source: https://github.com/Kampfkarren/selene
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# Selene
Up: [[MOC-Tools]] · Pair: [[StyLua]]

**Verdict: ✅ APPROVE** – Luau linter.

```sh
rokit add Kampfkarren/selene
```
`selene.toml`:
```toml
std = "roblox"
```
Run: `selene src`

Catches unused vars, shadowing, bad globals, deprecated calls. Add to CI and pre-commit.
