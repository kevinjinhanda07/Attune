---
name: roblox-animation
description: Create and play Roblox animations - Animation Editor, Moon Animator, IK, curve editor, R15/R6 and custom rigs, Blender-to-Roblox animation export, Animator/AnimationTrack scripting, priorities, events/markers, replacing default animations, and animation ownership/permissions. Use for any character, NPC, tool, emote, cutscene or rig animation task in Roblox.
---

# Roblox Animation

## Tools
- **Animation Editor** (built-in): keyframes, IK, Curve Editor, face animation. Fine for most.
- **Moon Animator 2** (paid plugin): cutscenes, cameras, multiple rigs, lights.
- **Blender**: complex/long animations; export FBX with Armature + animation, import via Animation Editor → Import from FBX onto a matching rig.

## Rigs
- Characters: use R15 (avatar compatible). R6 only for retro style.
- Custom: Motor6Ds (rigid) or Bones (skinned). Root part named `HumanoidRootPart`; use `AnimationController` + `Animator` for non-humanoids.

## Publishing & ownership
- Publish from the editor → get `rbxassetid://`. Animations only play in experiences owned by the **same user or group** that owns the animation. Publish under the group that owns the game.

## Playing
```lua
local animator = humanoid:WaitForChild("Animator") :: Animator
local anim = Instance.new("Animation")
anim.AnimationId = "rbxassetid://000"
local track = animator:LoadAnimation(anim) -- load once, reuse
track.Priority = Enum.AnimationPriority.Action
track:Play(0.1)                -- fade time
track:GetMarkerReachedSignal("Hit"):Connect(function() --[[ server validates hits separately ]] end)
```
- Play character animations on the **client** that owns the character – they replicate.
- NPC animations: play on the server (or client for pure visuals).
- Priorities: Core < Idle < Movement < Action (Action2–4 above). Use `AdjustWeight`, `AdjustSpeed`.
- Replace defaults: edit the `Animate` LocalScript's StringValues, or set `HumanoidDescription` animation IDs.

## Feel tips
- Anticipation → action → follow-through. Ease in/out on most keys; snappy attacks ~0.2–0.4 s.
- Loop idle/walk seamlessly (first = last key). Match walk speed to `Humanoid.WalkSpeed` via `AdjustSpeed`.
- Keep keyframe markers for SFX/VFX timing (skill `roblox-audio-vfx`).

## Checklist
- [ ] Owned by same user/group as game
- [ ] Loaded once per Animator, not per play
- [ ] Correct priority; looped flag right
- [ ] Gameplay effects (damage) decided on server, not by animation events alone
