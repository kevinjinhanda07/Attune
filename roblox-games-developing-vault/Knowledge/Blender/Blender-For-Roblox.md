---
tags: [blender, art]
type: guide
source: https://create.roblox.com/docs/art/modeling
risk: low
updated: 2026-11-06
---
# Blender → Roblox pipeline
Up: [[MOC-Blender]] · Animation: [[Animation-Guide]]

1. Model low-poly; check triangle count (Overlays → Statistics).
2. Apply transforms; set origin = pivot.
3. One UV map; textures ≤1024 (palette atlas for kits).
4. Rig (if needed) with Roblox R15 template / clean bone names.
5. Export FBX (selected, Y-up, apply modifiers) or glTF.
6. Studio → Import 3D → check scale, warnings.
7. Set Anchored, CollisionFidelity, CastShadow; add SurfaceAppearance.
8. Save as Model / Package.

| Asset | Tri budget |
|---|---|
| Small prop | 50–500 |
| Building piece | 200–2k |
| Hero/character | 2k–10k |
| Hard per-mesh cap | ~20k (verify current docs) |
