---
name: roblox-luau-scripting
description: Write, review, or fix Roblox Luau code - types and --!strict, ModuleScripts, client/server split, RemoteEvents/RemoteFunctions, task library, connections and memory leaks, performance. Use whenever the user writes or debugs a Script, LocalScript, ModuleScript, .luau file, or asks about Luau syntax, types, remotes, or script performance in Roblox.
---

# Roblox Luau Scripting

## Defaults for every file
- First line `--!strict`. Annotate public functions and table shapes.
- `local Players = game:GetService("Players")` – always `GetService`, cached at top.
- Use `task.spawn / task.defer / task.delay / task.wait`. Never `wait()`, `spawn()`, `delay()`.
- PascalCase modules and services, camelCase locals, UPPER_SNAKE constants.
- Tabs, ~100 col. Assume StyLua + Selene run on the result.

## Where code runs
| Container | Runs on | Script type |
|---|---|---|
| ServerScriptService, ServerStorage | server only | Script / modules |
| ReplicatedStorage | both (module source visible to clients) | ModuleScript |
| StarterPlayerScripts, StarterGui, StarterCharacterScripts | client | LocalScript |
Never put secrets, prices that must be trusted, or admin lists only in client code.

## Module pattern
```lua
--!strict
local Inventory = {}
Inventory.__index = Inventory

export type Inventory = typeof(setmetatable({} :: { items: { [string]: number } }, Inventory))

function Inventory.new(): Inventory
	return setmetatable({ items = {} }, Inventory)
end

function Inventory.add(self: Inventory, id: string, n: number?)
	self.items[id] = (self.items[id] or 0) + (n or 1)
end

return Inventory
```

## Remotes – the rules
1. Define all remotes in one shared module (`Net.luau`) created by the server.
2. Client→server: treat **every argument as hostile**. Check `typeof`, ranges, ownership, cooldowns.
3. Never trust client-sent prices, damage, positions-as-truth, or "I won".
4. Prefer RemoteEvent. Avoid server→client `InvokeClient` (client can hang/never return).
5. Use `UnreliableRemoteEvent` for high-frequency cosmetic data (VFX, look direction).
```lua
-- server
Net.BuyItem.OnServerEvent:Connect(function(player: Player, itemId: unknown)
	if typeof(itemId) ~= "string" then return end
	local item = Config.Items[itemId]
	if not item then return end
	if not RateLimit.allow(player, "BuyItem", 0.5) then return end
	ShopService.tryBuy(player, item) -- server checks currency
end)
```
See skill `roblox-anti-exploit` for more.

## Leaks and cleanup
- Every `:Connect` that outlives its object → store and `:Disconnect()`, or use a Trove/Janitor.
- On `Players.PlayerRemoving` clear per-player tables.
- `Instance:Destroy()` disconnects that instance's events; tables referencing it still leak.

## Performance
- Don't poll in `while true do task.wait() end`; use events (`.Changed`, `GetPropertyChangedSignal`, `CollectionService` tags).
- RunService: `Heartbeat` (server/client logic), `RenderStepped`/`BindToRenderStep` client camera only, keep under ~1 ms.
- Cache `FindFirstChild` results; avoid `GetDescendants()` per frame.
- Spatial queries: `workspace:GetPartBoundsInRadius` with `OverlapParams`, not looping all parts.
- Use `--!native` on hot pure-math modules; `table.create(n)` to presize; `buffer` for compact network/data blobs.
- Measure with MicroProfiler (skill `roblox-testing-debugging`), don't guess.

## Common gotchas
- `WaitForChild` on the client for replicated things; never on server for things the server made.
- `Player.CharacterAdded` can fire before you connect – also handle `player.Character` if present.
- Attributes (`SetAttribute`) for simple replicated state; values replicate server→client only.
- `pcall` every DataStore / MarketplaceService / HttpService call.

## Output checklist
- [ ] `--!strict`, types on exports
- [ ] Server validates all remote input
- [ ] No deprecated globals (`wait`, `spawn`, `delay`)
- [ ] Connections cleaned up
- [ ] Short note on where each script lives in the Rojo tree
