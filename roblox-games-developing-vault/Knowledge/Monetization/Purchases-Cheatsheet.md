---
tags: [monetization]
type: cheatsheet
source: https://create.roblox.com/docs/production/monetization
risk: high
updated: 2026-11-06
---
# Purchases cheatsheet
Up: [[MOC-Monetization]]

| Want | Use | Grant where |
|---|---|---|
| Permanent perk | Game Pass | on join + `PromptGamePassPurchaseFinished` |
| Consumable | Developer Product | `ProcessReceipt` (idempotent, save PurchaseId) |
| Monthly perk | Subscription | `GetUserSubscriptionStatusAsync` + status changed event |
| VIP server | Private servers | Creator Hub |

Golden rules
- Server grants, server saves, then returns `PurchaseGranted`.
- Product IDs in Config; prices from `GetProductInfo`.
- Creator payouts (Premium engagement / Creator Rewards / subscriptions revenue share) change – read Creator Hub before planning revenue.
