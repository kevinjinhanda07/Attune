---
tags: [tool, ai, mcp, blender]
type: tool
source: https://github.com/ahujasid/blender-mcp (now mcp-for-blender)
risk: high
verdict: CAUTION
updated: 2026-11-06
---
# Blender MCP
Up: [[MOC-Tools]] · Guide: [[Blender-For-Roblox]]

**Verdict: ⚠️ CAUTION** – popular, active, useful. But it runs **arbitrary Python in Blender** and pulls third-party assets.

## Install
1. Install uv (official installer, not `pip install uv`).
2. Claude Code:
```sh
claude mcp add blender uvx mcp-for-blender
```
(PyPI renamed `blender-mcp` → `mcp-for-blender`; old name still works.)
3. Blender addon: `uvx mcp-for-blender install-addon`, or download `addon.py` → Edit › Preferences › Add-ons › Install → enable. In 3D view press **N** → **BlenderMCP** tab → Connect.

## Usage
"Make a low-poly crate, 200 tris, one UV map, export FBX to ./art/crate.fbx". Ask it to show wireframe + tri count.

## Caveats
- `execute_blender_code` = arbitrary Python. **Save first.**
- Minimal anonymous telemetry on by default (content telemetry opt-in). Disable via env var in README.
- Poly Haven / Sketchfab / AI-gen (Meshy, Tripo, Rodin, Hunyuan3D): check **licenses** before using in a Roblox game. Some gen features are paid ("premium").
- Only one client per port.
