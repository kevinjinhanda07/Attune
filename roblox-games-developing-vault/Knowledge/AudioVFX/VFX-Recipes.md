---
tags: [vfx]
type: cheatsheet
source: https://create.roblox.com/docs/effects
risk: low
updated: 2026-11-06
---
# VFX recipes
Up: [[MOC-AudioVFX]]

- **Coin pickup**: 8 yellow sparkles `:Emit(8)`, LightEmission 1, Lifetime 0.3–0.5, + UI number pop.
- **Hit**: white flash particle (1 frame size 3→0), 6 sparks, PointLight tween 4→0 in 0.15 s, camera shake small.
- **Dash**: Trail on character (Lifetime 0.2), FOV +5 tween.
- **Laser**: Beam between two Attachments, Texture scroll (`TextureSpeed`), Width0>Width1.
- **Magic aura**: ParticleEmitter Rate 10, ring texture, Rotation, ZOffset 1, colored PointLight.
- Clean up with Debris or pool.
