---
name: roblox-liveops-events
description: Plan and implement Roblox live-ops - weekly fixed-time updates, update countdowns, timed and limited-time events, server-wide live "admin" events, rotating shops and restocks, event currencies and passes, limited items, config-driven event scheduling with server time, MemoryStore/MessagingService broadcasts, and Open Cloud scheduling. Use when the user plans updates, events, seasons, countdowns, restock timers, or limited items.
---

# Live-ops & Events

## Cadence (proven)
| When | What |
|---|---|
| Weekly, fixed day + time (e.g. Sat 10:00 ET) | new items/tier/zone, balance, changelog |
| 1 h before update | live event in all servers (dev-hosted, rare spawns for everyone) |
| Every 2 weeks | timed event (3–7 days) with event currency + limited items |
| Monthly | pass/season, new zone/mode |
| Holidays | themed map dressing + cosmetics |

## Config-driven events (no publish needed to toggle)
```lua
-- shared/Config/Events.luau
return {
	{ id = "Meteor", startsAt = 1793300400, endsAt = 1793904000, luckMult = 2 },
}
-- server
local function activeEvents(): { any }
	local now = DateTime.now().UnixTimestamp
	local out = {}
	for _, e in require(Config.Events) do
		if now >= e.startsAt and now < e.endsAt then table.insert(out, e) end
	end
	return out
end
```
- Server time only. Replicate active event + `endsAt` via attributes so clients render countdowns.
- For changes without republishing: store schedule in a DataStore/MemoryStore key edited via Open Cloud or an admin panel; servers poll every 1–5 min.

## Server-wide live events
- Broadcast: `MessagingService:PublishAsync("LiveEvent", {id=..., at=...})` → every server subscribes and starts at `at` (sync on timestamp, not message arrival).
- Keep it fair: everyone online gets the same chance; no paid advantage during the event; never pay-to-enter random Robux prizes.

## Restocking shops
Seeded by time slot so all servers agree:
```lua
local slot = DateTime.now().UnixTimestamp // 300 -- every 5 min
local rng = Random.new(slot)
-- roll stock from rarity table with rng
```
Show "restocks in mm:ss". Optional paid instant restock = convenience (check odds/policy if random).

## Limited items
- Mark `limited = true, eventId`. Never re-release identical limited items (trust); release variants.
- Store `obtainedAt`. Show "Event exclusive" badge.

## Update day checklist
- [ ] Publish to test place, playtest
- [ ] Countdown visible in-game for 2–3 days
- [ ] Thumbnails/icon updated; title tag e.g. "[UPDATE]" (keep honest)
- [ ] Changelog board in lobby
- [ ] Shutdown/migrate servers at the announced time
- [ ] Watch error logs + economy for 2 h
