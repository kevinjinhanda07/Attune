---
tags: [setup, rojo, architecture]
type: template
source: https://rojo.space/docs ; https://create.roblox.com/docs/projects/external-tools
risk: low
updated: 2026-11-06
---
# 📁 Project Template (Rojo)
Back: [[Home]] · Before: [[Starter-Pack]] · Arch: [[MOC-Architecture]]

## Layout
```
my-game/
├─ default.project.json
├─ rokit.toml  wally.toml  selene.toml  stylua.toml
├─ CLAUDE.md              # rules for Claude (see below)
├─ src/
│  ├─ server/            → ServerScriptService.Server
│  │  ├─ init.server.luau   # bootstrap: loads services
│  │  └─ Services/          # DataService, ShopService …
│  ├─ client/            → StarterPlayer.StarterPlayerScripts.Client
│  │  ├─ init.client.luau
│  │  ├─ Controllers/       # InputController, UIController …
│  │  └─ UI/                # React/Fusion components
│  └─ shared/            → ReplicatedStorage.Shared
│     ├─ Config/            # tunables, prices, IDs
│     ├─ Types.luau
│     └─ Net.luau           # remotes defined in one place
├─ assets/               # .rbxm models, maps (not code)
├─ tests/                # Jest-Lua specs
└─ Packages/ ServerPackages/ DevPackages/  (wally, gitignored)
```

## default.project.json
```json
{
  "name": "my-game",
  "tree": {
    "$className": "DataModel",
    "ReplicatedStorage": {
      "Shared": { "$path": "src/shared" },
      "Packages": { "$path": "Packages" }
    },
    "ServerScriptService": {
      "Server": { "$path": "src/server" },
      "ServerPackages": { "$path": "ServerPackages" }
    },
    "StarterPlayer": {
      "StarterPlayerScripts": { "Client": { "$path": "src/client" } }
    },
    "Workspace": { "$properties": { "StreamingEnabled": true } }
  }
}
```

## .gitignore
```
Packages/
ServerPackages/
DevPackages/
sourcemap.json
*.rbxl.lock
```

## Daily workflow
1. `rojo serve` → Studio plugin **Connect**.
2. Code in VS Code (or Claude Code) on disk.
3. Build/props/maps in Studio; save models as `.rbxm` in `assets/` if versioned.
4. Playtest (F5 / Start Server + 2 players).
5. `stylua src && selene src && luau-lsp analyze …` → commit.
6. Publish from Studio to a **test place** first, then prod ([[Publishing-and-LiveOps]]).

## CLAUDE.md starter
```md
# Rules
- Luau, `--!strict`, tabs. Run stylua + selene before commit.
- Server is authoritative; validate every RemoteEvent arg (see skill roblox-anti-exploit).
- All remotes defined in src/shared/Net.luau.
- Data only via DataService (ProfileStore). Never call DataStoreService elsewhere.
- Prices/IDs live in src/shared/Config.
- Use Studio MCP to playtest after changes and read output.
```
