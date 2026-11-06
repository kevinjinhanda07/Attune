---
name: roblox-first-session-onboarding
description: Design and implement the first session (FTUE) of a Roblox game - first 5/15/60 seconds, no-text guided tutorials with beams/arrows, early rewards, progressive disclosure of features, onboarding funnels with AnalyticsService, and fixing early drop-off. Use when new players leave quickly, D1 is low, the tutorial is confusing, or building a new game's opening minutes.
---

# First-Session Onboarding

## Timeline targets
| Time | Player should have… |
|---|---|
| 0–5 s | spawned facing the main action; can move and do the core action |
| 15 s | first reward (sound + VFX + number pop) |
| 60 s | first upgrade bought; understands the loop |
| 3 min | first rare-ish item / "wow" moment |
| 5–10 min | a goal for later (next zone, collection %, timer) and a reason to return |

## Techniques
- **Show, don't tell**: Beam/arrow from player to next target; pulsing button; hand icon on mobile.
- One instruction at a time, ≤ 6 words ("Collect the glowing seeds!").
- Lock/hide advanced UI until needed (progressive disclosure).
- Free first item of rare-ish tier to show the ladder.
- Spawn in a populated, readable area; no long walks.
- Skip button for returning players; never force rewatching.
- Don't ask for purchases in the first minutes (except a non-blocking starter offer after the first upgrade).

## Guide arrow
```lua
local function guideTo(target: BasePart)
	local char = Players.LocalPlayer.Character
	local root = char and char:FindFirstChild("HumanoidRootPart")
	if not root then return end
	local a0 = root:FindFirstChild("GuideA0") or Instance.new("Attachment")
	a0.Name = "GuideA0"; a0.Parent = root
	local a1 = target:FindFirstChild("GuideA1") or Instance.new("Attachment")
	a1.Name = "GuideA1"; a1.Parent = target
	local beam = root:FindFirstChild("GuideBeam") or ReplicatedStorage.VFX.GuideBeam:Clone()
	beam.Name = "GuideBeam"; beam.Attachment0 = a0; beam.Attachment1 = a1; beam.Parent = root
end
```

## Measure
```lua
AnalyticsService:LogOnboardingFunnelStepEvent(player, 1, "Spawned")
AnalyticsService:LogOnboardingFunnelStepEvent(player, 2, "FirstCollect")
AnalyticsService:LogOnboardingFunnelStepEvent(player, 3, "FirstSell")
AnalyticsService:LogOnboardingFunnelStepEvent(player, 4, "FirstUpgrade")
AnalyticsService:LogOnboardingFunnelStepEvent(player, 5, "FirstRare")
```
Log each step once per player (server). Fix the step with the biggest drop first. Test with real new players on phones; watch silently.

## Checklist
- [ ] Core action possible in 5 s
- [ ] Reward in 15 s, upgrade in 60 s
- [ ] Works with no reading, on mobile
- [ ] Funnel steps logged
- [ ] Returning players skip tutorial
