---
name: roblox-game-architecture
description: Design and scaffold Roblox game architecture - services/controllers (Knit-style without Knit), single-script bootstrap, shared config, networking layer, player data with ProfileStore and DataStoreService, session locking, autosave, migrations, cross-server messaging. Use when starting a new Roblox project, structuring code, adding player data/saving, or debugging data loss and duplication.
---

# Roblox Game Architecture

## Shape (one Script + one LocalScript)
- `src/server/init.server.luau` requires every module in `Services/`, calls `:Init()` on all, then `:Start()` on all.
- `src/client/init.client.luau` does the same for `Controllers/`.
- Init = set up state, no yielding, no cross-calls. Start = connect events, may use other services.
- Services talk via direct `require`, not a global registry. Avoid circular requires: shared logic goes in `shared/`.
- Knit itself is unmaintained; reproduce the pattern in ~30 lines:
```lua
--!strict
local services = {}
for _, m in script.Services:GetChildren() do
	if m:IsA("ModuleScript") then services[m.Name] = require(m) :: any end
end
for _, s in services do if s.Init then s:Init() end end
for name, s in services do
	if s.Start then task.spawn(function() s:Start() end) end
end
```

## Folders
`shared/Config` (prices, IDs, tunables – data only), `shared/Types.luau`, `shared/Net.luau` (remotes), `server/Services`, `client/Controllers`, `client/UI`.

## Player data – use ProfileStore
Why: session locking stops two servers writing the same key → prevents item dupes and rollbacks. Wally/GitHub: MadStudioRoblox/ProfileStore.
```lua
--!strict
local ProfileStore = require(ServerScriptService.ServerPackages.ProfileStore)
local TEMPLATE = { Coins = 0, Inventory = {}, Version = 1 }
local Store = ProfileStore.New("PlayerData_v1", TEMPLATE)
local Profiles: { [Player]: any } = {}

local function onPlayerAdded(player: Player)
	local profile = Store:StartSessionAsync(`{player.UserId}`, {
		Cancel = function() return player.Parent ~= Players end,
	})
	if not profile then player:Kick("Data failed to load, please rejoin.") return end
	profile:AddUserId(player.UserId) -- GDPR
	profile:Reconcile()               -- fill new template fields
	profile.OnSessionEnd:Connect(function()
		Profiles[player] = nil
		player:Kick("Data session ended, please rejoin.")
	end)
	if player.Parent == Players then Profiles[player] = profile else profile:EndSession() end
end
Players.PlayerAdded:Connect(onPlayerAdded)
for _, p in Players:GetPlayers() do task.spawn(onPlayerAdded, p) end
Players.PlayerRemoving:Connect(function(p) local pr = Profiles[p]; if pr then pr:EndSession() end end)
```
Verify method names against the current ProfileStore README before shipping.

## Data rules
- Only `DataService` touches data. Others call `DataService.addCoins(player, n)`.
- Never trust the client for currency. Server changes data, then replicates (attributes or a remote).
- Version field + migration function for schema changes. Never rename keys silently.
- Global/leaderboard data: OrderedDataStore or MemoryStoreService, **not** ProfileStore.
- Cross-server events: MessagingService (best-effort) or MemoryStore queues.
- Developer Product receipts: grant inside `ProcessReceipt` and only return `PurchaseGranted` after the profile holds the grant (see `roblox-monetization`).

## DataStore limits (check docs: create.roblox.com/docs/cloud-services/data-stores)
- Request budgets scale with player count; batch writes; autosave ~every few minutes, not every change.
- 4 MB per key value. Keep inventories compact (IDs + counts).
- Wrap all calls in `pcall`, retry with backoff.
- Test in Studio with "Enable Studio Access to API Services" on a **test** universe.

## Checklist
- [ ] One bootstrap per side, Init/Start lifecycle
- [ ] All remotes in Net module
- [ ] ProfileStore with session lock, Reconcile, EndSession on leave
- [ ] Kick on load failure (never play with empty data that later saves)
- [ ] BindToClose handled (ProfileStore does this; custom code must)
