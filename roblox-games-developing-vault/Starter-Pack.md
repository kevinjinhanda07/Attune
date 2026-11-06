---
tags: [setup, start]
type: guide
source: tool READMEs (rokit, rojo, wally, luau-lsp, blender-mcp)
risk: low
updated: 2026-11-06
---
# 🚀 Starter Pack
Back: [[Home]] · Next: [[Project-Template]]

Install in this order.

## 1. Roblox Studio
Download from https://create.roblox.com → sign in → enable 2-step verification.

## 2. Git + VS Code
- Git: https://git-scm.com
- VS Code + extensions: **Luau Language Server**, **Selene**, **StyLua**, **Rojo** (optional UI).

## 3. Rokit (toolchain manager) → [[Rokit]]
```sh
# macOS / Linux
curl -sSf https://raw.githubusercontent.com/rojo-rbx/rokit/main/scripts/install.sh | bash
```
```powershell
# Windows
Invoke-RestMethod https://raw.githubusercontent.com/rojo-rbx/rokit/main/scripts/install.ps1 | Invoke-Expression
```

## 4. Project tools
```sh
mkdir my-game && cd my-game
rokit init
rokit add rojo-rbx/rojo
rokit add UpliftGames/wally
rokit add JohnnyMorganz/StyLua
rokit add Kampfkarren/selene
rokit add JohnnyMorganz/luau-lsp
rokit add lune-org/lune
rojo plugin install
```

## 5. Scaffold → [[Project-Template]]
```sh
rojo init .
wally init
git init && git add -A && git commit -m "init"
```

## 6. Claude Code + Studio MCP → [[Roblox-Studio-MCP]]
- Install Claude Code: https://code.claude.com
- Studio → Assistant → Manage MCP Servers → enable Studio as MCP server → add to Claude Code per Studio's instructions.
- `claude mcp list` to confirm.

## 7. Claude skills → [[Install-Skills]]
```sh
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/
```

## 8. Optional: Blender + MCP → [[Blender-MCP]]
- Blender (LTS) from https://www.blender.org
- uv: https://docs.astral.sh/uv
```sh
claude mcp add blender uvx mcp-for-blender
uvx mcp-for-blender install-addon
```

## 9. Optional: Moon Animator → [[Moon-Animator]]

✅ Done when: `rojo serve` connects, Studio MCP is listed in Claude, `selene src` and `stylua --check src` pass.
