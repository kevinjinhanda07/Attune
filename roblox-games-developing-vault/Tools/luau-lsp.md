---
tags: [tool, toolchain, editor]
type: tool
source: https://github.com/JohnnyMorganz/luau-lsp
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# luau-lsp
Up: [[MOC-Tools]] · Needs: [[Rojo]] sourcemap

**Verdict: ✅ APPROVE** – types, autocomplete, diagnostics in VS Code / any LSP editor.

## Install
- VS Code: extension **Luau Language Server** (JohnnyMorganz).
- CLI (for CI / Claude): `rokit add JohnnyMorganz/luau-lsp`

## Usage
- Extension auto-generates `sourcemap.json` from `default.project.json`.
- CLI type check:
```sh
rojo sourcemap default.project.json -o sourcemap.json
luau-lsp analyze --sourcemap=sourcemap.json --defs=globalTypes.d.luau src
```
(download Roblox `globalTypes.d.luau` from the luau-lsp repo/releases.)
- Put `--!strict` at the top of new files.
