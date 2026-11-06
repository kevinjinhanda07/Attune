---
tags: [tool, toolchain]
type: tool
source: https://github.com/rojo-rbx/rokit
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# Rokit
Up: [[MOC-Tools]] · Next: [[Rojo]]

**Verdict: ✅ APPROVE** – `rojo-rbx` org, community-maintained, replaces Aftman/Foreman.

## Install
macOS/Linux:
```sh
curl -sSf https://raw.githubusercontent.com/rojo-rbx/rokit/main/scripts/install.sh | bash
```
Windows (PowerShell):
```powershell
Invoke-RestMethod https://raw.githubusercontent.com/rojo-rbx/rokit/main/scripts/install.ps1 | Invoke-Expression
```
Or download `rokit.exe` from Releases and double-click.

## Usage
```sh
rokit init                       # creates rokit.toml
rokit add rojo-rbx/rojo
rokit add UpliftGames/wally
rokit add JohnnyMorganz/StyLua
rokit add Kampfkarren/selene
rokit add JohnnyMorganz/luau-lsp
rokit add lune-org/lune
rokit install                    # on a fresh clone
rokit update                     # bump tools
```
Reads `aftman.toml` / `foreman.toml` too.

## Caveats
- Piping a script to bash: read it first (it's short) or use the release binary.
- GitHub rate limits → `rokit authenticate github`.
