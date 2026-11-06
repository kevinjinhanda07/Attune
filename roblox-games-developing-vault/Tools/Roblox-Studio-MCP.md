---
tags: [tool, ai, mcp]
type: tool
source: https://create.roblox.com/docs/studio/mcp ; https://github.com/Roblox/studio-rust-mcp-server
risk: medium
verdict: APPROVE
updated: 2026-11-06
---
# Roblox Studio MCP (built-in)
Up: [[MOC-Tools]] · Related: [[Roblox-Studio-Assistant]], [[Community-Roblox-MCPs]]

**Verdict: ✅ APPROVE** – official, built into Studio. Best way to let Claude Code read/edit an open place.

## What it does
Studio itself acts as an MCP server. An MCP client (Claude Code, Claude Desktop, Cursor, Codex…) can:
- explore the DataModel (instances, properties)
- read / edit scripts
- run Luau in Studio
- start / stop playtests, read output
- generate assets (where enabled)

## Install
1. Update Roblox Studio to latest.
2. Open **Assistant → Manage MCP Servers** → turn on **Enable Studio as MCP server**.
3. Add Studio to your client using the command/config Studio shows on that screen. (Roblox docs were not reachable from the sandbox that wrote this note – copy the exact command from https://create.roblox.com/docs/studio/mcp.)
4. In Claude Code: `claude mcp list` → Studio server should be listed.

## Usage tips
- Keep one place open; tell Claude which place/script it's touching.
- Pair with [[Rojo]]: let Claude edit files on disk for code, use MCP for instances/props/playtests.
- Ask Claude to **playtest and read the output** after changes.

## Caveats
- Any connected client can read **and change** the open place. Connect only clients you trust.
- Work on a copy / commit first. Studio undo doesn't cover everything.
- Old repo `Roblox/studio-rust-mcp-server` says *"no longer being actively developed"* → use built-in instead.
- Aug 2026 Studio update fixed "method not implemented" + auto-disable bugs (third-party report). If tools fail, update Studio.
