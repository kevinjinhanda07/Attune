---
name: roblox-trading-inventory
description: Build secure, server-authoritative inventory and player-to-player trading in Roblox - item data model with unique IDs, stacking, equip slots, two-sided trade sessions with confirm/countdown, atomic swaps with ProfileStore session locks, anti-dupe and anti-scam safeguards, trade logs, and PolicyService trading checks. Use for pets/items inventories, trading UIs, gifting, marketplaces, item duplication bugs, or scams.
---

# Trading & Inventory

## Data model
```lua
export type Item = { uid: string, id: string, mods: { [string]: any }?, locked: boolean? }
-- profile.Data.Inventory: { [uid]: Item }   (unique items)
-- profile.Data.Stacks:    { [id]: number }  (stackables)
```
- `uid = HttpService:GenerateGUID(false)` made **on the server** at creation. Never accept uids from the client except to reference items the player owns.
- Cap inventory size; compact storage (ids + small mod tables).

## Trade flow (server state machine)
`Request → Accepted → Editing → BothReady → Countdown(5 s) → Commit | Cancel`
- Any edit resets Ready + countdown (prevents bait-and-switch).
- Both players must be in the same server, alive, not in another trade.
- Show both sides' items with rarity and value hints; warn on very uneven trades.

## Atomic commit
```lua
local function commit(t)
	local a, b = DataService.getProfile(t.a), DataService.getProfile(t.b)
	if not (a and b and a:IsActive() and b:IsActive()) then return cancel(t, "data") end
	-- re-verify ownership at commit time
	for uid in t.offerA do if not a.Data.Inventory[uid] or a.Data.Inventory[uid].locked then return cancel(t, "own") end end
	for uid in t.offerB do if not b.Data.Inventory[uid] or b.Data.Inventory[uid].locked then return cancel(t, "own") end end
	for uid in t.offerA do b.Data.Inventory[uid] = a.Data.Inventory[uid]; a.Data.Inventory[uid] = nil end
	for uid in t.offerB do a.Data.Inventory[uid] = b.Data.Inventory[uid]; b.Data.Inventory[uid] = nil end
	TradeLog.write(t) -- DataStore/Analytics: who, what, when
end
```
- No yields between verify and swap. Both profiles session-locked (ProfileStore) → no cross-server dupes.
- Cross-server trades/gifting: use a server-to-server mailbox (MemoryStore/DataStore with idempotent claim IDs), never "remove here, add there" without a receipt.

## Anti-dupe checklist
- [ ] Items created only by server code paths with logging
- [ ] Session-locked data; kick on lock loss
- [ ] Commit re-verifies everything; no yields mid-swap
- [ ] Rate-limit trade remotes; one trade per player
- [ ] Rejoin/leave during countdown cancels cleanly
- [ ] Audit job: flag uids seen in two inventories

## Anti-scam UX
Countdown, item lock while in trade, clear value display, "are you sure?" for big imbalances, trade history screen, block trades with new accounts (optional age-of-account).

## Policy
- `PolicyService:GetPolicyInfoForPlayerAsync(p).IsPaidItemTradingAllowed` – if false, block trading items bought with Robux for that player.
- Never allow real-money/off-platform trading; don't build Robux-for-item trades.
