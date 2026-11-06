---
tags: [tool, toolchain, sync]
type: tool
source: https://github.com/rojo-rbx/rojo ; https://rojo.space/docs
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# Rojo
Up: [[MOC-Tools]] · Uses: [[Rokit]] · Layout: [[Project-Template]]

**Verdict: ✅ APPROVE** – the standard for code-on-disk + git.

## Install
```sh
rokit add rojo-rbx/rojo
rojo plugin install        # Studio plugin
```
## Usage
```sh
rojo init my-game          # scaffold
rojo serve                 # then Connect in the Studio plugin
rojo build -o game.rbxl    # build a place file
rojo sourcemap default.project.json -o sourcemap.json --watch   # for luau-lsp
rojo syncback              # place file → project (7.7+)
```
## Caveats
- 7.7 (RC in late 2026): websocket sync + `syncback`. Plugin on Roblox updates only at stable release – keep CLI and plugin versions matched.
- Rojo owns what it syncs: edits in Studio to synced scripts get overwritten (unless two-way sync on).
- Keep big art/maps in Studio (or `.rbxm` files), code in Rojo.
