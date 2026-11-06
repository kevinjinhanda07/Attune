---
name: roblox-monetization
description: Implement and plan Roblox monetization and stay within policy - Game Passes, Developer Products and ProcessReceipt, experience Subscriptions, Premium benefits and creator payout programs, rewarded ads, private servers, pricing, PolicyService checks (paid random items, trading), maturity questionnaire and age/content rules. Use for shops, purchases, VIP/gamepasses, currency packs, subscriptions, loot/egg odds, pricing strategy, or "is this allowed on Roblox".
---

# Roblox Monetization & Policy

## Products
| Type | Use | Key API |
|---|---|---|
| Game Pass | permanent perk (VIP, 2x, gear) | `MarketplaceService:UserOwnsGamePassAsync`, `PromptGamePassPurchase`, `PromptGamePassPurchaseFinished` |
| Developer Product | repeatable (currency, revives, boosts) | `PromptProductPurchase`, **`ProcessReceipt`** |
| Subscription | monthly perks | `PromptSubscriptionPurchase`, `GetUserSubscriptionStatusAsync`, `UserSubscriptionStatusChanged` |
| Private servers | paid VIP servers | set price in Creator Hub |
| Rewarded ads | optional reward for watching | check current Ads docs/eligibility |
| Premium / engagement payouts | earned from Premium players' time | now part of Roblox's creator payout programs (Creator Rewards etc.) – check Creator Hub for current terms |

## ProcessReceipt (must be idempotent)
```lua
MarketplaceService.ProcessReceipt = function(receipt)
	local player = Players:GetPlayerByUserId(receipt.PlayerId)
	if not player then return Enum.ProductPurchaseDecision.NotProcessedYet end
	local profile = DataService.getProfile(player)
	if not profile then return Enum.ProductPurchaseDecision.NotProcessedYet end
	local seen = profile.Data.Receipts
	if seen[receipt.PurchaseId] then return Enum.ProductPurchaseDecision.PurchaseGranted end
	local grant = Products[receipt.ProductId]
	if not grant then return Enum.ProductPurchaseDecision.NotProcessedYet end
	local ok = pcall(grant, player, profile)
	if not ok then return Enum.ProductPurchaseDecision.NotProcessedYet end
	seen[receipt.PurchaseId] = os.time() -- trim old entries periodically
	return Enum.ProductPurchaseDecision.PurchaseGranted
end
```
- Set it **once**, on the server. Grant must be saved with the profile (ProfileStore helpers exist for this).
- Game pass ownership: check on join + handle `PromptGamePassPurchaseFinished`; cache result.
- Product/pass IDs live in `shared/Config`. Prices shown from `GetProductInfo`, never hard-coded.

## Pricing & design (fair, sustainable)
- Sell time-savers, cosmetics, convenience, social status. Avoid pay-to-win in PvP.
- Anchor: one cheap starter (≈25–100 R$), core passes (≈100–400 R$), premium tier.
- Show value clearly; no fake "limited" timers; no dark patterns.
- First purchase moment: after the player has felt the core loop (≈5–15 min), not at spawn.
- A/B test prices with Roblox's price-testing tools where available.

## Policy (verify current text: create.roblox.com/docs/production/promotion/experience-guidelines)
- Fill in the **Maturity & Compliance questionnaire** honestly; labels: Minimal, Mild, Moderate, Restricted. Unlabeled experiences lose reach (e.g. unplayable for under-9s).
- Under-age audiences: users not age-checked are limited to Minimal/Mild experiences; younger account types (e.g. Roblox Kids/Select) have stricter eligibility. Design for Minimal/Mild if you want the widest audience.
- **Paid random items** (eggs/crates bought with Robux or currency bought with Robux): show odds before purchase, and use `PolicyService:GetPolicyInfoForPlayerAsync(player)` → if `ArePaidRandomItemsRestricted`, disable them for that player. Also respect `IsPaidItemTradingAllowed`.
- No linking off-platform, no real-money trading, no gambling with Robux-value outcomes, no misleading ads/thumbnails.
- Don't target or collect personal info from players; chat via TextChatService with filtering (`TextService:FilterStringAsync` for any player text shown to others).

## Checklist
- [ ] ProcessReceipt idempotent + saved
- [ ] Odds shown; PolicyService checks
- [ ] Questionnaire done, label fits content
- [ ] Prices loaded from Marketplace, not hard-coded
