---
tags: [design, hits, plan]
type: plan
source: Hit-Game-Patterns + vault skills
risk: low
updated: 2026-11-06
---
# 🗺️ Hit Game Blueprint
Back: [[Home]] · Why: [[Hit-Game-Patterns]]

Concept → launch → 3 months of live-ops. Original designs only. Skills in `skills/` ([[MOC-Skills]]).

## Phase 0 – Concept (week 1)
1. `roblox-viral-game-concept`: generate 10 original concepts, score them, pick top 2.
2. Paper prototype the loop; 1-page GDD ([[Core-Loop-Template]]).
3. Title + icon mock **before** building (`roblox-thumbnail-icon-title`). If you can't make a great icon, rethink the concept.

## Phase 1 – Prototype (weeks 2–3)
1. Set up [[Starter-Pack]] + [[Project-Template]].
2. Build the core loop only, grey-box (`roblox-luau-scripting`, `roblox-game-architecture`).
3. Economy sheet & rarity table (`roblox-core-loop-progression`).
4. Playtest with 5–10 kids/friends on **phones**. Watch: do they get it in 10 s?
✅ Gate: testers ask to play again.

## Phase 2 – Vertical slice (weeks 4–6)
1. Onboarding first 60 s (`roblox-first-session-onboarding`).
2. Data + inventory + (if needed) trading (`roblox-trading-inventory`, `roblox-anti-exploit`).
3. Juice: VFX/SFX on every reward (`roblox-audio-vfx`).
4. Mobile perf budgets (`roblox-mobile-first-performance`).
5. Analytics funnels (`roblox-analytics-retention`).
6. Shop: starter pack, VIP pass, 2–3 products (`roblox-ethical-monetization-policy`).

## Phase 3 – Soft launch (weeks 7–8)
1. Maturity questionnaire; [[Launch-Checklist]].
2. 3–5 thumbnails active for personalization; icon variants.
3. Small ad spend; invite friends/communities.
4. Read D1, session length, funnel. Targets: D1 ≥ 15%, session ≥ 12 min before scaling.
5. Fix the biggest drop-off; repeat weekly.

## Phase 4 – Launch (week 9)
- Fixed update day/time announced. First event ready.
- Creator outreach: codes, private servers, clip-worthy update (`roblox-social-virality`).

## Months 1–3 – Live-ops (`roblox-liveops-events`)
| Week | Ship |
|---|---|
| Every week | new items/rarity tier or zone + balance + changelog, same day/time |
| Every 2 weeks | timed event (server-wide moments, limited items) |
| Month 1 end | new mode/zone + battle/event pass |
| Month 2 end | social feature (trading, clans, co-op boss) |
| Month 3 end | seasonal update + new thumbnails/icon |
Weekly review: D1/D7, revenue/DAU, economy inflation, exploits, top feedback.

## Kill / pivot rules
- After 2 weeks of iteration: D1 < 8% and session < 6 min → pivot theme or loop.
- Strong retention, weak revenue → fix shop. Strong revenue, weak retention → fix loop.
