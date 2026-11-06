---
name: blender-for-roblox
description: Create Roblox-ready 3D assets in Blender - low-poly modeling, triangle budgets, UV unwrapping, textures/PBR SurfaceAppearance, scale and orientation, rigging (R15, custom rigs, skinned meshes), export to FBX/OBJ/glTF, and importing with the Studio 3D Importer. Use when the user models props, buildings, characters, accessories in Blender for Roblox, uses Blender MCP, or hits import errors/limits.
---

# Blender for Roblox

## Scene setup
- Units: Metric, Unit Scale 1. **1 stud ≈ 0.28 m** for characters, but many devs model at "1 Blender unit = 1 stud" and fix scale on import. Pick one and keep it. With FBX export set "Apply Scalings: FBX Units Scale".
- Forward = -Z, Up = Y for FBX export (Roblox is Y-up).
- Apply transforms (Ctrl+A → All Transforms) before export. Origin where you want the pivot.

## Modeling (low-poly)
- Budget per asset: small prop 50–500 tris, medium 500–2k, hero 2k–8k. Importer cap per mesh ≈ 20k triangles (verify in current docs); split larger models.
- Triangulate or check with Statistics overlay (show triangles).
- No n-gons on curved/deforming areas; delete hidden faces; merge by distance.
- Create a simple collision proxy if the mesh is complex (or set CollisionFidelity Box/Hull in Studio).

## UVs & textures
- One UV map. Mark seams, Unwrap, pack islands with ~4 px margin.
- Texture sizes: 256–1024 (1024 max for most; Roblox downsizes huge images). Power of two.
- Simple style: vertex/flat colors via a palette texture (one 256 atlas for a whole kit = great batching).
- PBR: bake ColorMap, NormalMap (OpenGL / +Y), RoughnessMap, MetalnessMap → `SurfaceAppearance` in Studio.

## Rigging
- Characters: start from Roblox's official R15 rig/template files (Creator Hub: avatar/body specs) for compatibility with avatar animations.
- Custom rigs: bones in an Armature, skin with weights (max 4 influences/vertex), keep bone names clean (no spaces). Import as skinned MeshPart → animate in Animation Editor via the generated rig (Bones under the mesh).
- Rigid multi-part rigs: separate meshes + Motor6Ds made in Studio (RigEdit plugin or code).

## Export
- **FBX**: select objects → Export FBX → Selected Objects, Mesh (+ Armature), Apply Modifiers, Path Mode Copy + Embed Textures (optional).
- **OBJ**: static meshes only, simple.
- **glTF/glb**: supported by the 3D Importer too; good for PBR.
- Name objects meaningfully – names become MeshPart names.

## Import to Studio
1. Avatar tab / File → **Import 3D**. Review warnings, scale, "Anchored", "Merge meshes" off for kits.
2. Fix texture links / add SurfaceAppearance.
3. Set CollisionFidelity, RenderFidelity, CastShadow, Anchored.
4. Save the result as a Model/Package for reuse.

## Blender MCP tips (see vault note Blender-MCP)
- Ask for: tri count, wireframe screenshot, applied transforms, single UV map, then FBX export path.
- Save the .blend before letting it run code.

## Checklist
- [ ] Transforms applied, origin set, Y-up export
- [ ] Under tri budget; no hidden faces
- [ ] One clean UV map; textures ≤1024
- [ ] Names clean; licenses OK for any downloaded asset
