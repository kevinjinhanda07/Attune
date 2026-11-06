---
name: roblox-game-design
description: Design original Roblox games - core loops, progression, retention hooks, first-time user experience, economy balancing, social features, and genre templates (simulator, obby, tycoon, tower defense, horror, roleplay, fighting). Use when the user brainstorms a game idea, writes a GDD, plans progression/economy, or asks "what should my game be". Produces original designs only, never clones of specific existing games.
---

# Roblox Game Design

## Rule: original only
Use genre mechanics freely; do **not** copy a specific game's name, characters, art, maps, items or exact systems. If asked to clone, offer an original twist instead.

## One-page GDD
1. **Hook** (one sentence a 10-year-old repeats to a friend)
2. **Core loop** (30 s): act → reward → upgrade → act better
3. **Meta loop** (days): progression, collections, rebirth/prestige, social goals
4. **First 60 s**: what the player does at second 5, 30, 60
5. **Session end hook**: reason to come back (daily reward, unfinished timer, friend)
6. **Monetization**: what's for sale, fair-play limits (skill `roblox-monetization`)
7. **Scope**: MVP in 2–4 weeks; cut list

## Retention toolkit
Daily login streak, timed rewards, quests (daily/weekly), collections/index with % complete, rebirth with permanent multiplier, leaderboards, group/friend bonuses, limited events, achievements/badges (`BadgeService`).

## Economy basics
- Track sources vs sinks per hour; target each upgrade tier taking ~1.5–2× longer than the last.
- Exponential costs (`base * growth^level`, growth 1.12–1.5), multiplicative rewards from rebirths.
- Sink currency into cosmetics/upgrades to fight inflation. Use AnalyticsService economy events to verify.

## Genre templates (original framing)
**Simulator** – click/auto-collect resource → sell → upgrade tool/backpack → new zones gated by cost → pets/helpers boost → rebirth. Twist ideas: collect sounds to compose music; terraform a planet.
**Obby** – stages with checkpoints, difficulty curve (easy-easy-hard-rest), skip-stage product, timed modes, themed worlds. Twist: obby where the course reshapes every round from a modular kit.
**Tycoon** – plot, droppers → conveyor → collector, buy buttons unlock next tier, rebirth. Twist: run a monster hotel where guests have needs.
**Tower defense** – lanes, waves, place/upgrade units, economy per wave, co-op. Twist: towers are plants you grow between waves.
**Horror** – tension curve (calm → hint → threat → release), limited light, audio cues, short rounds, co-op. Keep within Mild/Moderate maturity unless you deliberately target older players; avoid gore for wide reach.
**Roleplay/hangout** – jobs, homes, customization, social spaces, events.
**Fighting/arena** – few readable moves, cooldowns, server-validated hits, short matches, skill-based matchmaking or casual FFA.

## Fun checks
- Can a new player understand the goal without reading? 
- Is there a satisfying feedback moment every few seconds (sound, number pop, VFX)?
- Is there something to show friends?
- Does mobile play feel as good as PC?

## Output format
When asked for a design, return: Hook · Core loop diagram (text) · First-60-s script · Progression table · Monetization list · MVP task list linked to the other roblox-* skills.
