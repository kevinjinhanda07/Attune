---
tags: [skills, setup]
type: guide
source: https://code.claude.com/docs/en/skills
risk: low
updated: 2026-11-06
---
# 🧠 Install the Claude skills
Back: [[Home]] · List: [[MOC-Skills]]

22 skills: 12 core + 10 hit-game skills ([[MOC-Skills]]).

Each skill = a folder with `SKILL.md`. Claude loads it automatically when your request matches its `description`.

## Option A – for all your projects (user level)
```sh
git clone -b roblox-vault https://github.com/kevinjinhanda07/attune.git
mkdir -p ~/.claude/skills
cp -r attune/roblox-games-developing-vault/skills/* ~/.claude/skills/
```
Windows (PowerShell):
```powershell
New-Item -ItemType Directory -Force "$HOME\.claude\skills"
Copy-Item -Recurse attune\roblox-games-developing-vault\skills\* "$HOME\.claude\skills\"
```

## Option B – one game project (shared with your team via git)
```sh
cd my-game
mkdir -p .claude/skills
cp -r /path/to/vault/skills/* .claude/skills/
git add .claude/skills && git commit -m "Add Roblox skills"
```

## Check
In Claude Code: ask *"what skills do you have?"* or type `/` – you should see `roblox-luau-scripting` etc. Invoke directly with `/roblox-ui`.

## Update
Re-copy after pulling the vault. Edit a skill's `description` if it triggers too often/too rarely.

## Tips
- Keep the vault notes for **you**, skills for **Claude**.
- Pair with a project `CLAUDE.md` ([[Project-Template]]).
- Only install community skills after reading them ([[Community-Claude-Skills]]).
