---
tags: [architecture, data]
type: guide
source: https://github.com/MadStudioRoblox/ProfileStore ; https://create.roblox.com/docs/cloud-services/data-stores
risk: high
updated: 2026-11-06
---
# Data & ProfileStore
Up: [[MOC-Architecture]] · Monetization: [[Purchases-Cheatsheet]]

**ProfileStore** (by loleris, successor to ProfileService): session-locks a player's key so only one server writes it → stops dupes/rollbacks. Install via Wally or the Creator Store model.

## Lifecycle
1. PlayerAdded → `Store:StartSessionAsync(userId, {Cancel=...})`
2. nil → **kick** (never play on empty data)
3. `Reconcile()` → `AddUserId()` → keep in `Profiles[player]`
4. Mutate `profile.Data` on server only
5. PlayerRemoving → `EndSession()`; ProfileStore autosaves + handles shutdown

## Rules
- One DataService. Template has `Version`.
- Not for leaderboards/global state → OrderedDataStore / MemoryStore.
- Test in a **test universe** with API access on.
- Risk: high – bugs here lose players' progress. Review every change.
