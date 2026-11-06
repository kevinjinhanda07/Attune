---
name: roblox-core-loop-progression
description: Design and tune Roblox game economies and progression - core loop definition, currency sources and sinks, exponential cost curves, income multipliers, rarity tables and weighted drops with pity, mutations/modifiers, rebirth/prestige math, offline earnings, and spreadsheet-style simulation in Luau. Use for simulators, tycoons, idle/grow games, egg/pet systems, balancing, "players progress too fast/slow", or inflation.
---

# Core Loop & Progression

## 1. Define the loop
`ACTION → REWARD → UPGRADE → better ACTION` (30 s) inside `ZONE/TIER → REBIRTH` (hours) inside `COLLECTION/EVENTS` (weeks). Write each step and its time.

## 2. Curves
- Upgrade cost: `cost(n) = base * g^n`, g = 1.12–1.25 for frequent upgrades, 1.5–3 for tiers/zones.
- Income: additive within a tier, multiplicative across tiers/rebirths.
- Target: each new tier takes ~1.5–2× the time of the previous. Early tiers fast (minutes), later hours.
- Number display: abbreviate (1.2K, 3.4M, 5.6B…) – big numbers feel good.

```lua
local function cost(base: number, g: number, n: number): number
	return math.floor(base * g ^ n)
end
local SUFFIX = { "", "K", "M", "B", "T", "Qa", "Qi" }
local function short(x: number): string
	local i = 1
	while x >= 1000 and i < #SUFFIX do x /= 1000; i += 1 end
	return string.format(if x < 10 then "%.2f%s" else "%.0f%s", x, SUFFIX[i])
end
```

## 3. Rarity tables
```lua
local Egg = { -- weights, not percents
	{ id = "Common", w = 6000 }, { id = "Uncommon", w = 2800 }, { id = "Rare", w = 900 },
	{ id = "Epic", w = 250 }, { id = "Legendary", w = 45 }, { id = "Secret", w = 5 },
}
local rng = Random.new()
local function roll(t, luck: number?): string
	local total = 0
	local adj = {}
	for i, e in t do
		local w = if i >= 4 then e.w * (luck or 1) else e.w -- luck boosts rare tiers only
		adj[i] = w; total += w
	end
	local r = rng:NextNumber() * total
	for i, e in t do r -= adj[i]; if r <= 0 then return e.id end end
	return t[1].id
end
```
- Roll on the **server** only. Show odds (from the same table) in UI.
- Pity: guarantee a tier after N misses (store counter in profile).
- Modifiers (size, shiny, weather mutation) multiply value; roll independently with small chances.

## 4. Rebirth / prestige
- Unlock when progress slows (e.g. cost of next tier > ~30 min of income).
- Reset: currency + upgrades. Keep: collection, rebirth count, cosmetics.
- Multiplier: `1 + 0.5 * rebirths` (linear) or `1.25^rebirths` (capped) – simulate 20 rebirths before choosing.
- Rebirth cost grows faster than the multiplier.

## 5. Offline earnings
`earned = min(now - lastSeen, cap) * rate * offlineFactor` (cap 8–12 h, factor 0.25–0.5). Server time only (`os.time()`), saved in profile.

## 6. Sinks (fight inflation)
Upgrades, rebirth, cosmetics, crafting/fusing, consumable boosts, trade tax. Log sources/sinks with `AnalyticsService:LogEconomyEvent`.

## 7. Simulate
Write a quick Lune/Luau script: simulate a player tapping/idling for 1 h, 1 day, 1 week; print time per tier. Tune before launch, then use analytics.

## Output
Loop diagram, tier table (cost, income, time-to-reach), rarity table with %s, rebirth formula, sinks list, and the Luau config module.
