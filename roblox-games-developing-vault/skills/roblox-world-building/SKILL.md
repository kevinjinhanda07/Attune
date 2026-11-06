---
name: roblox-world-building
description: Plan and build Roblox maps and worlds - Terrain API, Lighting/Atmosphere/Sky/post-effects, modular building kits, StreamingEnabled and model streaming modes, level design flow, part/triangle/draw-call budgets and performance on low-end mobile. Use when the user builds a map, level, lobby, environment, sets up lighting, or the game lags from map size.
---

# Roblox World Building

## Workflow
1. Paper/blockout: grey parts, scale to the default character (≈5 studs tall; doors ≥ 8 studs high, 6 wide; corridors ≥ 10 wide for groups).
2. Playtest the blockout for flow (spawn → goal → loop back).
3. Swap blockout for modular kit pieces.
4. Lighting pass, then detail, then performance pass.

## Modular kits
- Grid snap (e.g. 4 or 8 studs). Pivot at a corner/center consistently (`Model.WorldPivot`).
- Build pieces as MeshParts from Blender (skill `blender-for-roblox`) or Studio parts; **reuse the same MeshId** – instancing is cheap, unique meshes aren't.
- Store kits in `ServerStorage/Kits` or as packages (Packages auto-update across places).
- Tag interactive pieces with `CollectionService` and drive behavior from one script.

## Terrain
```lua
workspace.Terrain:FillBlock(CFrame.new(0, -10, 0), Vector3.new(512, 20, 512), Enum.Material.Grass)
workspace.Terrain:FillBall(Vector3.new(0, 0, 0), 30, Enum.Material.Air) -- carve
```
Use Terrain Editor (Generate, Sculpt, Paint), MaterialService for custom terrain materials. Water: keep it limited on mobile.

## Lighting recipe
- `Lighting.Technology = Future` (best, degrades gracefully on low-end), `EnvironmentDiffuseScale/SpecularScale ≈ 0.5–1`.
- `Atmosphere`: Density 0.3–0.4, Haze 0–2, Color/Decay for mood.
- `Sky` + `ColorCorrectionEffect` (subtle saturation/contrast), `BloomEffect` low, `SunRaysEffect` optional, `DepthOfField` off for gameplay.
- Mood presets: cozy (warm ClockTime 17, orange decay), horror (ClockTime 0, fog, low ambient, flashlights via SpotLight), sci-fi (cool, neon accents, low bloom).
- Limit shadow-casting lights; set `CastShadow = false` on small decor.

## Streaming (turn on for anything bigger than a lobby)
- `Workspace.StreamingEnabled = true`; tune `StreamingTargetRadius`, `StreamingMinRadius`.
- Per-model `ModelStreamingMode`: `Atomic` (stream as a unit), `Persistent` (always loaded for everyone – use rarely), `PersistentPerPlayer`.
- Client code **must** handle parts not existing: `WaitForChild` with timeout, `CollectionService:GetInstanceAddedSignal`.
- `player:RequestStreamAroundAsync(pos)` before teleports.

## Budgets (start points; profile to confirm)
| Item | Mobile target |
|---|---|
| Visible parts/meshes in view | a few thousand |
| Unique meshes/textures | keep low; reuse |
| Single mesh | well under the importer cap (~20k tris); props 50–2k |
| Moving unanchored parts | minimal; anchor all scenery |
| Lights with shadows | a handful in view |
- `CanCollide/CanTouch/CanQuery = false` on decor; `CollisionFidelity = Box/Hull` for meshes; `RenderFidelity = Automatic`.
- Union heavy CSG → prefer meshes.
- Check with MicroProfiler + Developer Console Memory tab; test on a real low-end phone.

## Level design checklist
- [ ] Clear landmark visible from spawn
- [ ] Critical path readable by light/color
- [ ] Out-of-bounds kill/teleport volumes
- [ ] Spawn protection
- [ ] Streaming on and client code tolerant of missing parts
