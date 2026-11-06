---
name: roblox-audio-vfx
description: Add Roblox sound design and visual effects - Sound/SoundGroup and the newer Audio API (AudioPlayer, AudioEmitter, AudioListener, effects), ambience and music, 3D sound rolloff, ParticleEmitter, Beam, Trail, Attachments, Highlight, light flashes, hit/explosion/magic effect recipes, and VFX performance. Use for any sound, music, particle, beam, trail, impact, or "make it feel juicier" request.
---

# Roblox Audio & VFX

## Audio
- Classic: `Sound` in a part = 3D positional; in SoundService/PlayerGui = 2D. Group with `SoundGroup` (Music, SFX, UI) for volume sliders.
- New Audio API: `AudioPlayer` → wires → `AudioEmitter` (in world) heard by `AudioListener` (camera/character); effects like `AudioEqualizer`, `AudioReverb`, `AudioCompressor`. Use for advanced mixing/voice. Check docs for current status.
- Rolloff: `RollOffMode = InverseTapered`, set `RollOffMinDistance`/`MaxDistance` per sound.
- Assets: use Creator Store licensed audio or upload your own (you must own rights). Private audio only plays in experiences you own.
- Play SFX on the client for responsiveness; server tells clients via remote/attributes.
- Randomize: `PlaybackSpeed = 1 + (math.random() - 0.5) * 0.1` stops repetition fatigue.
- Ambience: low-volume loop + random one-shots (birds, creaks) every 5–20 s.

## VFX building blocks
| Effect | Use |
|---|---|
| ParticleEmitter | sparks, smoke, magic. `:Emit(n)` for bursts, `Rate` for continuous |
| Beam | lasers, lightning, tethers between two Attachments |
| Trail | sword swings, dash streaks |
| Highlight | outlines (limit ~31 active) |
| PointLight flash | impact light, tween Brightness to 0 |

## Impact recipe (client)
```lua
local function impact(pos: Vector3)
	local fx = ReplicatedStorage.VFX.Impact:Clone() -- Attachment with emitters
	local holder = Instance.new("Part")
	holder.Anchored, holder.CanCollide, holder.CanQuery, holder.Transparency = true, false, false, 1
	holder.Size = Vector3.one
	holder.Position = pos
	fx.Parent = holder
	holder.Parent = workspace
	for _, e in fx:GetChildren() do
		if e:IsA("ParticleEmitter") then e:Emit(e:GetAttribute("Burst") or 10) end
	end
	game:GetService("Debris"):AddItem(holder, 2)
end
```
- Pool frequent effects instead of cloning each time.
- Particle tips: `LightEmission` 0.5–1 for glow, `ZOffset` to sit in front, `Squash`, `FlipbookLayout` for animated textures, size/transparency NumberSequences.

## Performance
- Total particles on screen matters more than emitters. Lower `Rate` and `Lifetime` on mobile (check `UserSettings().GameSettings.SavedQualityLevel` or let Roblox auto-scale).
- VFX visual-only on client; never let a client-side effect decide damage.

## Checklist
- [ ] SoundGroups + volume settings
- [ ] Audio license/ownership OK
- [ ] Effects pooled or Debris-cleaned
- [ ] Looks fine on low graphics quality
