---
tags: [tools, rejected]
type: list
source: READMEs read 2026-11-06
risk: low
updated: 2026-11-06
---
# ❌ Rejected tools
Back: [[Home]] · [[MOC-Tools]]

| Tool | Why | Use instead |
|---|---|---|
| [[Aftman]] | README: no longer maintained | [[Rokit]] |
| Roblox/studio-rust-mcp-server | README: no longer actively developed | [[Roblox-Studio-MCP]] (built-in) |
| boshyxd/robloxstudio-mcp | archived Jun 2026 (author lost npm access) | built-in MCP, or Chrrxs fork (CAUTION) |
| Foreman | Roblox-internal focus; Rokit is drop-in | [[Rokit]] |
| Free-model "admin"/"anti-cheat" scripts from Toolbox | frequent backdoors (`require(id)`, `getfenv`) | write your own → [[MOC-Security]] |
| Executors / "exploit test" tools | violate Roblox ToS, malware risk | test in Studio with server-side checks |
| Any skill/MCP that asks for your Roblox cookie or Open Cloud key in chat | credential theft risk | Open Cloud keys in env vars, scoped |

Re-check yearly – status changes.
