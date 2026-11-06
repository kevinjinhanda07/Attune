---
name: roblox-ethical-monetization-policy
description: Plan ethical, non-pay-to-win monetization for trending Roblox games and keep it compliant with Roblox policy and age guidance - fair PvP, value-first offers, starter packs, VIP and event passes, luck/time boosts, paid random items rules (odds disclosure, PolicyService restrictions), age-appropriate design, maturity labels, no dark patterns. Use when designing a shop or offers for a game with young players, adding eggs/crates/gacha, or checking if a monetization idea is allowed. Complements roblox-monetization (implementation).
---

# Ethical Monetization & Policy

## Principles
1. **Never pay-to-win against other players.** In PvP/raiding, sell protection-neutral cosmetics, convenience, or capped boosts; give free players defense tools.
2. **Value first**: player should feel the purchase was worth it on day 1.
3. **No dark patterns**: no fake scarcity, fake timers, pressure pop-ups after losses, confusing currencies hiding Robux cost, or "accidental" purchase buttons.
4. **Young audience**: assume many players are kids. Clear prices in Robux, confirm dialogs (Roblox provides), no begging NPCs.

## Offer menu (fair)
| Offer | Notes |
|---|---|
| Starter pack (once) | big value, shown after first upgrade, not at spawn |
| VIP pass | cosmetic tag, chat color, small QoL, extra slot |
| 2× income / auto-collect | time saver; fine in PvE |
| Luck boost (timed) | raises odds of rare tiers; show exact new odds |
| Extra inventory/storage | convenience |
| Event pass | free + paid track; all event gameplay free |
| Cosmetics | trails, skins, effects – safest PvP monetization |
| Private servers | for friends/creators |
| Subscriptions | monthly perks; cancelable; no gameplay lock-outs |

## Paid random items (eggs/crates bought with Robux or Robux-bought currency)
- Show odds for every item **before** purchase (from the same server table).
- `PolicyService:GetPolicyInfoForPlayerAsync(player)` → if `ArePaidRandomItemsRestricted`, hide/disable those purchases for that player; offer direct-purchase alternatives.
- Consider pity counters. Never let random outcomes convert to Robux value (no gambling, no cash-out).
- Check current Roblox rules: create.roblox.com/docs/production/promotion/experience-guidelines and monetization docs.

## Age & content
- Complete the maturity questionnaire honestly. Minimal/Mild = widest reach (non-age-checked users are limited to these).
- Horror: aim for Mild/Moderate per content; avoid gore for broad reach.
- No social-hazard features for young players without filtering (all text through TextService/TextChatService).

## Review checklist (before any shop change)
- [ ] Would a parent call this fair?
- [ ] Free player can enjoy and progress
- [ ] PvP balance unaffected by purchases (or tightly capped)
- [ ] Odds shown; PolicyService checks in code
- [ ] Prices clear; no fake urgency
- [ ] Implementation follows skill `roblox-monetization` (idempotent receipts)
