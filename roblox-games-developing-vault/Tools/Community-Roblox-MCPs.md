---
tags: [tool, ai, mcp, community]
type: tool
source: github: boshyxd/robloxstudio-mcp (archived), Chrrxs/robloxstudio-mcp fork, justice219/roblox-studio-mcp
risk: high
verdict: CAUTION
updated: 2026-11-06
---
# Community Roblox MCPs
Up: [[MOC-Tools]] · Prefer: [[Roblox-Studio-MCP]]

**Verdict: ⚠️ CAUTION** – the official built-in server now covers most needs. Use community ones only for a specific missing tool.

| Server | Status | Note |
|---|---|---|
| boshyxd/robloxstudio-mcp | archived Jun 2026 | → [[Rejected]] |
| Chrrxs/robloxstudio-mcp | fork, maintained | has a **read-only "inspector"** edition – safest option |
| justice219/roblox-studio-mcp | small | `execute_luau` runs arbitrary code |
| Roblox/studio-rust-mcp-server | official but deprecated | → [[Rejected]] |

## Rules
- Prefer read-only variants.
- Needs "Allow HTTP Requests" in a place → only in dev places.
- `npx -y pkg@latest` pulls whatever is newest: pin a version.
