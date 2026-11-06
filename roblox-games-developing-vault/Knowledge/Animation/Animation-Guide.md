---
tags: [animation]
type: guide
source: https://create.roblox.com/docs/animation
risk: low
updated: 2026-11-06
---
# Animation guide
Up: [[MOC-Animation]]

1. Rig: R15 (avatars) or custom (Motor6D / Bones).
2. Animate: Animation Editor (IK, curves) or [[Moon-Animator]] or Blender FBX.
3. Publish under the **same owner (user/group) as the game**.
4. Play: `Animator:LoadAnimation(anim)` once → `track:Play()`.
5. Set Priority (Idle/Movement/Action) and Looped.
6. Markers (`GetMarkerReachedSignal`) to sync SFX/VFX → [[MOC-AudioVFX]].

Feel: anticipation → action → follow-through; ease in/out; attacks 0.2–0.4 s.
