---
tags: [project, aura-clash, setup]
type: guide
source: vault research + Hit-Game-Patterns
risk: low
updated: 2026-11-06
---
# Connect Roblox Studio + Claude Code (your PC)
Up: [[MOC-Aura-Clash]] · General: [[Starter-Pack]] · MCP: [[Roblox-Studio-MCP]]

Cloud sessions (claude.ai/code) can't reach Studio. Run Claude Code **on the same PC as Studio**.

## 1. Install
- Roblox Studio (latest), Git, VS Code
- Claude Code: Claude desktop app (has Claude Code) or the CLI – current installer at https://code.claude.com
- Rokit + tools → [[Starter-Pack]] steps 3–4

## 2. Get the vault + skills
```powershell
git clone -b roblox-vault https://github.com/kevinjinhanda07/attune.git
New-Item -ItemType Directory -Force "$HOME\.claude\skills"
Copy-Item -Recurse attune\roblox-games-developing-vault\skills\* "$HOME\.claude\skills\"
```

## 3. Make the game project
```powershell
mkdir aura-clash; cd aura-clash
rokit init
rokit add rojo-rbx/rojo
rokit add UpliftGames/wally
rokit add JohnnyMorganz/StyLua
rokit add Kampfkarren/selene
rojo init .
rojo plugin install
git init
```
Copy the `Projects/Aura-Clash-RNG` notes into the project (or keep the vault folder next to it).

## 4. Connect Studio to Claude Code
1. Open Studio → open/create a Baseplate place for the game.
2. **Assistant → Manage MCP Servers → Enable Studio as MCP server.**
3. Add it to Claude Code with the command/config Studio shows there.
4. In Claude Code run `/mcp` (or `claude mcp list`) → Studio should show as connected.

## 5. Sync code
- Terminal: `rojo serve` → Studio Rojo plugin → **Connect**.

## 6. First message to Claude Code (in the aura-clash folder)
"Read the Aura Clash notes (Pitch, Economy-v1, Build-Plan). Set up the project per Project-Template with a CLAUDE.md, then start Week 1. Use Studio MCP to playtest and read output after each step."

## Optional: control it from your phone
Run `claude remote-control` in the project folder (or enable Remote Control in the desktop app) – the session shows up in the Claude app.

## Safety
- Commit before big changes. Studio MCP can edit your open place.
- Don't paste your Roblox password/cookie or API keys into chat.
