---
tags: [world, performance]
type: checklist
source: https://create.roblox.com/docs/performance-optimization
risk: low
updated: 2026-11-06
---
# Performance budgets (starting points)
Up: [[MOC-World]] · Measure: [[Testing-and-Profiling]]

- StreamingEnabled **on** for big maps
- Scenery anchored; `CanTouch/CanQuery` off on decor
- Reuse MeshIds/textures (kits, atlases)
- Props 50–2k tris; split meshes over ~20k
- Textures ≤1024
- Few shadow lights; limited particles
- Test on a cheap phone, not just your PC
