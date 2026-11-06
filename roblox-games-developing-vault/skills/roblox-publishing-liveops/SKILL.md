---
name: roblox-publishing-liveops
description: Publish and grow a Roblox experience - test vs production places, Creator Hub settings, thumbnails/icons/description, maturity questionnaire, localization, analytics (Creator Analytics dashboards, AnalyticsService funnels/economy/custom events), retention metrics, updates and shutdowns, events and live-ops calendar, sponsored ads and growth, Open Cloud automation. Use when launching, updating, marketing, reading analytics, or planning events for a Roblox game.
---

# Roblox Publishing, Analytics & Live-ops

## Environments
- Two universes (or places): **Test** (private/friends) and **Prod**. Publish to test, playtest with real servers, then publish prod.
- Use Rojo builds + Open Cloud place publishing for repeatable deploys (API key scoped to that universe; never commit keys).
- Update flow: publish → "Restart servers for updates" or soft shutdown (migrate players). Do it at low-CCU times.

## Launch checklist
- [ ] Icon (512×512, readable at tiny size), 3–5 thumbnails/videos showing gameplay
- [ ] Title clear (genre + hook), description first line = hook; keywords natural
- [ ] Maturity questionnaire done; genre set
- [ ] Devices enabled: phone, tablet, desktop, console (test each!)
- [ ] Server size and fill settings
- [ ] Automatic translation on; review key strings (localization tables)
- [ ] Social links (only allowed ones), group ownership

## Analytics (Creator Hub → Analytics)
Watch: D1/D7/D30 retention, session length, playtime per user, conversion (payers/DAU), ARPDAU, new-user funnel, QPTR (qualified play-through of the thumbnail).
Custom tracking with `AnalyticsService`:
```lua
AnalyticsService:LogOnboardingFunnelStepEvent(player, 1, "Spawned")
AnalyticsService:LogOnboardingFunnelStepEvent(player, 2, "FirstQuest")
AnalyticsService:LogEconomyEvent(player, Enum.AnalyticsEconomyFlowType.Source, "Coins", 50, balance, Enum.AnalyticsEconomyTransactionType.Gameplay.Name)
AnalyticsService:LogCustomEvent(player, "BossDefeated", 1)
```
Fix the biggest funnel drop first.

## Growth
- First 30 seconds: action within 5 s, clear goal, no wall of text.
- Thumbnails + icon A/B tests (Creator Hub experiments where available).
- Sponsored experiences / ads with small budgets; scale only when D1 and session time are healthy.
- Social features: invite prompts (`SocialService:PromptGameInvite`), friend bonuses, group rewards (respect policy).
- Short-form video of real gameplay.

## Live-ops calendar
- Weekly: small content or balance update + changelog.
- Monthly: event (limited quest, themed map, cosmetic). Events = timed via server time (`os.time()` / `DateTime`), configured in data (Config or MemoryStore/Open Cloud), not hard-coded publishes.
- Seasonal: larger updates around holidays.
- Always: monitor errors (Dev Console / error reports), economy inflation, exploit reports.

## Checklist
- [ ] Test place first, then prod
- [ ] Analytics funnels instrumented
- [ ] Update notes in-game
- [ ] Event toggles in config
