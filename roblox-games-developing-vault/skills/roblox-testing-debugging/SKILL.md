---
name: roblox-testing-debugging
description: Test, debug and profile Roblox games - Jest-Lua unit tests, Studio playtests (multi-client Start Server), breakpoints and the Script Debugger, Output/Developer Console (F9), MicroProfiler (Ctrl+F6), Script Profiler, memory and network stats, Luau Heap, static checks with luau-lsp/Selene, and CI. Use when something is broken, slow, laggy, leaking memory, or the user wants tests or CI for a Roblox project.
---

# Roblox Testing, Debugging & Profiling

## Fast loop
1. Static: `stylua --check src && selene src && luau-lsp analyze --sourcemap=sourcemap.json --defs=globalTypes.d.luau src`
2. Unit: Jest-Lua specs for pure logic (inventory, damage math, data migrations).
3. Playtest: Studio **Test → Clients and Servers** with 2–3 players for replication bugs.
4. With Studio MCP: ask Claude to start a playtest, read Output, stop, fix, repeat.

## Jest-Lua
```lua
-- tests/Inventory.spec.luau
local JestGlobals = require(ReplicatedStorage.DevPackages.JestGlobals)
local describe, it, expect = JestGlobals.describe, JestGlobals.it, JestGlobals.expect
describe("Inventory", function()
	it("stacks", function()
		local inv = Inventory.new(); inv:add("Gem", 2); inv:add("Gem")
		expect(inv.items.Gem).toBe(3)
	end)
end)
```
Keep game logic in pure modules so it's testable without Players/Workspace.

## Debugging
- Breakpoints (click gutter), Watch, Call Stack in Studio. Conditional breakpoints / logpoints for hot code.
- `print` with tags: `print("[Shop]", player.Name, itemId)`. `warn` for recoverable issues, `error` for bugs.
- Developer Console (F9 / `/console`): Log (client+server), Memory, Network, Scripts, Server Jobs. Works in live servers for owners.
- Common bugs: race with `CharacterAdded`; `WaitForChild` infinite yield (streaming); remote fired before listener connected; module required from wrong side.

## Profiling
- **MicroProfiler** (Ctrl+F6, or Settings): pause, look for wide bars. Add labels:
```lua
debug.profilebegin("PetFollow")
-- work
debug.profileend()
```
  Server profiling via Developer Console → MicroProfiler tab.
- **Script Profiler** (Studio, View tab) – per-function CPU.
- **Luau Heap** in Dev Console Memory – find table/instance leaks; compare snapshots.
- Targets: 60 FPS = 16.6 ms frame. Scripts usually < 2–3 ms. Network: watch remote spam in Network tab.
- Mobile: test real device; render cost (parts, lights, particles) usually dominates.

## CI (GitHub Actions idea)
- Install Rokit, `rokit install`, run StyLua/Selene/luau-lsp.
- Run Jest in Roblox via Open Cloud Luau Execution (or `run-in-roblox` locally). Keep API keys in CI secrets, scoped to a test universe.

## Checklist
- [ ] Reproduced with exact steps
- [ ] Root cause, not symptom
- [ ] Regression test added if logic bug
- [ ] Profiled before/after for perf fixes
