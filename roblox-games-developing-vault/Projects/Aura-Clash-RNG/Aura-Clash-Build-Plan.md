---
tags: [project, aura-clash, plan]
type: plan
source: vault research + Hit-Game-Patterns
risk: low
updated: 2026-11-06
---
# Build plan (8 weeks)
Up: [[MOC-Aura-Clash]] · Setup first: [[Aura-Clash-Local-Setup]]

**Roles:** 🧑 You (Studio, playtesting, decisions, community) · 🤖 Claude Code on your PC (code, UI, systems, debugging) · 🎨 Artist (original characters)

## Week 0 – setup (1–2 days)
- 🧑 [[Starter-Pack]] + [[Aura-Clash-Local-Setup]]; private GitHub repo for the game
- 🧑 Find artist: brief = 6 original fighters (2 per element), anime style, Roblox-ready ([[Blender-For-Roblox]])
- 🤖 Scaffold Rojo project ([[Project-Template]]), CLAUDE.md rules

## Week 1 – rolling
- 🤖 Data: ProfileStore DataService (`roblox-game-architecture`)
- 🤖 Server roll + rarity table + pity ([[Aura-Clash-Economy-v1]])
- 🤖 Roll button + reveal (slow dice, rarity colors, sound) (`roblox-ui`, `roblox-audio-vfx`)
- 🤖 Placeholder fighters: R15 rigs, colored + glowing by rarity
- ✅ Done: roll, see reveal, fighters saved after rejoin

## Week 2 – plot & cash
- 🤖 Personal plot with 3 zones, place/remove fighters, income ticking, offline earnings
- 🤖 Dice shop, slot + zone upgrades, number abbreviations
- 🧑 Playtest on your phone
- ✅ Done: 10-minute loop is fun without anything else

## Week 3 – auras, boss, Clash vs bots
- 🤖 Weather events (server time), aura rolls, aura VFX
- 🤖 Hourly boss (server-wide)
- 🤖 Auto-battle Clash vs bot teams, elements
- ✅ Done: an aura storm feels exciting

## Week 4 – polish for players
- 🤖 First 60 s onboarding (`roblox-first-session-onboarding`)
- 🤖 Mobile pass (`roblox-mobile-first-performance`)
- 🤖 Analytics funnels (`roblox-analytics-retention`)
- 🤖 Shop + receipts + odds + PolicyService (`roblox-monetization`, `roblox-ethical-monetization-policy`)
- 🎨 Swap in the 6 real fighters
- 🧑 Playtest with 5–10 kids aged 10–15, watch silently, note confusion
- ✅ Done: new player gets it with no help

## Weeks 5–8 → [[Aura-Clash-Launch-Test]]
- W5 soft launch · W6 real PvP Clash matchmaking + fix biggest drop · W7 first weekly update + event · W8 decision gate
- Trading only in month 2–3, and only if metrics are good (`roblox-trading-inventory`)

## Weekly prompt for Claude Code
"Read Projects/Aura-Clash-RNG/Aura-Clash-Build-Plan.md. We're on week N. Do the 🤖 items one at a time, playtest through Studio MCP after each, and tell me what to check by hand."
