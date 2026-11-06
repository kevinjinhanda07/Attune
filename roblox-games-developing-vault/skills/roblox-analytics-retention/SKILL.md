---
name: roblox-analytics-retention
description: Measure and improve Roblox retention and monetization with analytics - D1/D7/D30 targets and benchmarks, session length, funnels (onboarding, shop, custom), economy events, custom events, Creator Hub Analytics dashboards, experiments, cohort reading, and retention systems (daily rewards, streaks, quests, offline progress, notifications). Use when reading metrics, setting KPIs, adding tracking, or when players don't come back.
---

# Analytics & Retention

## Targets (GameAnalytics Roblox benchmarks, Aug 2025–Jul 2026)
| | Median | Good | Top 1% |
|---|---|---|---|
| D1 | ~10% | 15%+ | ~22% |
| D7 | ~1.6% | 5%+ | ~9% |
| D30 | ~0.5% | 2%+ | ~4.7% |
| Session | ~10 min | 15–20 min | 19+ min |
Discovery favors games strong in **both** retention and monetization (payers/DAU, ARPDAU).

## Instrument (server side)
```lua
local AS = game:GetService("AnalyticsService")
AS:LogOnboardingFunnelStepEvent(player, step, name)          -- FTUE
AS:LogFunnelStepEvent(player, "Shop", sessionId, step, name) -- recurring funnels
AS:LogEconomyEvent(player, Enum.AnalyticsEconomyFlowType.Sink, "Coins", cost, balance,
	Enum.AnalyticsEconomyTransactionType.Shop.Name, itemId)
AS:LogProgressionEvent(player, "World", Enum.AnalyticsProgressionType.Complete, 2)
AS:LogCustomEvent(player, "RebirthDone", rebirths)
```
Check exact signatures in current docs. Use a small wrapper so names stay consistent.

## Reading data (weekly)
1. Acquisition: impressions, CTR, qPTR (→ `roblox-thumbnail-icon-title`).
2. FTUE funnel: biggest drop step (→ `roblox-first-session-onboarding`).
3. D1/D7 by cohort (new update days vs others).
4. Session length distribution.
5. Economy: sources vs sinks per day; inflation.
6. Monetization: conversion, ARPPU, top products, first purchase timing.
Change one major thing per week; compare cohorts.

## Retention systems
- Daily reward calendar (7-day, escalating, day 7 big); streak with grace (1 missed day).
- Daily/weekly quests (3 quick + 1 longer).
- Timed restocks / growing / hatching = appointments.
- Offline progress (capped).
- Collections index with % complete.
- Weekly update day; events.
- Experience notifications (opt-in) where available – check current Roblox notification APIs/policies.
```lua
local DAY = 86400
local function claimDaily(data)
	local today = os.time() // DAY
	if data.LastClaimDay == today then return false end
	data.Streak = if data.LastClaimDay and today - data.LastClaimDay <= 2 then (data.Streak % 7) + 1 else 1
	data.LastClaimDay = today
	return true, data.Streak
end
```
