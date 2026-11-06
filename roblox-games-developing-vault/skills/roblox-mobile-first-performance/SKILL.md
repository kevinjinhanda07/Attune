---
name: roblox-mobile-first-performance
description: Make Roblox games mobile-first and fast on low-end devices - thumb-friendly controls and UI, device budgets (parts, triangles, textures, lights, particles, memory), StreamingEnabled, instance and script cost, network traffic, battery/thermal, graphics-quality scaling, and testing on real phones. Use when the game lags on mobile, crashes on low memory, or when designing for the ~70% of players on phones.
---

# Mobile-First & Performance

## Design for thumbs
- Core action = one big button (right thumb) or tap/auto; movement = left thumb.
- Buttons ≥ ~44 px, away from screen edges and the Roblox top bar; respect safe insets.
- Portrait-safe? Most play landscape; test both if you allow.
- Avoid hover-only info, tiny text, precise aiming (add aim assist / auto-target).
- Auto-collect / auto-sell options reduce tapping fatigue.

## Budgets (low-end phone starting points – confirm with profiling)
| Resource | Target |
|---|---|
| Client memory | stay well under ~1–1.5 GB on low-end; watch Dev Console Memory |
| Instances near player | low thousands |
| Unique meshes/textures | minimal; atlas + reuse |
| Mesh tris | props < 2k, hero < 10k |
| Textures | ≤ 1024, most 256–512 |
| Shadow-casting lights | a few |
| Particles on screen | a few hundred |
| Remote events | ≲ 20/s per client, small payloads |
| Frame | 30–60 FPS stable; script time < 3 ms |

## Must-dos
- `StreamingEnabled` on; client code tolerant of missing parts.
- Anchor scenery; disable `CanTouch/CanQuery` on decor; simple CollisionFidelity.
- Pool and reuse effects; Debris cleanup.
- Hide/disable UI and effects not on screen; stop RenderStepped work when idle.
- Throttle cosmetic updates by distance (no VFX for far players).
- Use `UnreliableRemoteEvent` for cosmetic streams; batch others.
- Avoid huge part counts from building/placing systems: cap per player, merge into meshes when possible.
- Respect `UserGameSettings.SavedQualityLevel`: scale particle rates/extra effects down at low quality.

## Testing
- Studio Device Emulator for layout only; **real low-end Android** for performance.
- MicroProfiler on device (Settings → MicroProfiler), Dev Console Memory/Network.
- Test long sessions (30 min) for memory growth and heat.

## Checklist
- [ ] One-thumb core loop
- [ ] Stable FPS on a cheap phone
- [ ] Memory flat over 30 min
- [ ] Streaming on, no infinite yields
- [ ] Effects scale with quality level
