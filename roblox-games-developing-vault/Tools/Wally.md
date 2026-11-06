---
tags: [tool, toolchain, packages]
type: tool
source: https://github.com/UpliftGames/wally
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# Wally
Up: [[MOC-Tools]] · Related: [[Rojo]]

**Verdict: ✅ APPROVE** – de-facto Roblox package manager.

## Install & use
```sh
rokit add UpliftGames/wally
wally init
# edit wally.toml [dependencies]
wally install          # → Packages/, ServerPackages/, DevPackages/
```
Add `Packages` to `default.project.json` under ReplicatedStorage.

## Good packages (check versions on wally.run)
- ProfileStore (data) → [[Data-and-ProfileStore]]
- Jest / JestGlobals (tests) → [[Jest-Lua]]
- React-lua (`jsdotlua/react`, `jsdotlua/react-roblox`), Fusion → [[MOC-UI]]
- Promise, Signal, Trove/Janitor (cleanup)

## Caveats
- Pin versions. Read a package before you depend on it – it runs in your game.
- Run `wally-package-types` (if using luau-lsp) to fix types on re-exports.
