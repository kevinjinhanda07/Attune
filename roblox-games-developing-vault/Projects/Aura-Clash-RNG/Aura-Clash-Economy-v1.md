---
tags: [project, aura-clash, economy]
type: spec
source: vault research + Hit-Game-Patterns
risk: low
updated: 2026-11-06
---
# Economy v1 (starting numbers – tune with playtests)
Up: [[MOC-Aura-Clash]] · Skill: `roblox-core-loop-progression`

## Rarities (shown as "1 in X")
| Tier | Chance | Base income/s | Power |
|---|---|---|---|
| Common | 1 in 2 | 1 | 10 |
| Uncommon | 1 in 5 | 3 | 25 |
| Rare | 1 in 20 | 10 | 60 |
| Epic | 1 in 100 | 40 | 150 |
| Legendary | 1 in 1,000 | 250 | 400 |
| Mythic | 1 in 10,000 | 2,000 | 1,000 |
| Secret | 1 in 100,000 | 20,000 | 2,500 |
Roll on the **server**. Odds UI reads the same table. Pity: guaranteed Epic+ every 150 rolls.

## Dice
| Die | Cost (cash) | Luck |
|---|---|---|
| Basic | free, 2 s cooldown | 1× |
| Bronze | 100 | 1.5× |
| Silver | 2,500 | 2× |
| Gold | 50K | 3× |
| Diamond | 1M | 5× |
Luck multiplies the chance of Rare+ tiers only.

## Slots & upgrades
- Start 3 zone slots; slot n costs `500 × 3^n`.
- Zone level: income `× (1 + 0.1 × level)`, cost `200 × 1.15^level`.
- Offline: up to 8 h at 40% rate.

## Auras (per weather event, fighters in matching zone)
| Aura | Chance | Multiplier |
|---|---|---|
| Thunder | 8% | ×1.5 |
| Blood Moon | 4% | ×2 |
| Void | 1% | ×3 |
One aura per fighter; a new roll can replace a weaker one.

## Clash
- Team power = sum of power × aura × element bonus (+25% vs weak element).
- Win → Luck Charge +0.25× (max +1×, fades 10%/min) + 10 tokens. Lose → 3 tokens.

## Rebirth (week 6+)
Unlock at 1M lifetime cash. Reset cash/zones; keep fighters. Income ×(1 + 0.5 × rebirths).
