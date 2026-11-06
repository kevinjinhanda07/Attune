---
tags: [tool, testing]
type: tool
source: https://github.com/jsdotlua/jest-lua ; https://jsdotlua.github.io/jest-lua
risk: low
verdict: APPROVE
updated: 2026-11-06
---
# Jest-Lua
Up: [[MOC-Tools]] · Guide: [[Testing-and-Profiling]]

**Verdict: ✅ APPROVE** – Lua port of Jest, used internally by Roblox. Successor to [[TestEZ]].

## Install (wally.toml)
```toml
[dev-dependencies]
Jest = "jsdotlua/jest@3.10.0"
JestGlobals = "jsdotlua/jest-globals@3.10.0"
```
(check latest on wally.run)

## Example
```lua
local JestGlobals = require(ReplicatedStorage.DevPackages.JestGlobals)
local describe, it, expect = JestGlobals.describe, JestGlobals.it, JestGlobals.expect

describe("Inventory", function()
	it("adds items", function()
		local inv = Inventory.new()
		inv:add("Sword")
		expect(inv:count("Sword")).toBe(1)
	end)
end)
```
Runner: `Jest.runCLI(root, { verbose = true }, { root })` from a server script; needs `jest.config.lua`.

## Caveats
- Runs **inside Roblox only** (Studio, or `run-in-roblox`/Open Cloud Luau execution in CI).
- v3 needs `EnableLoadModule` flag; no injected globals.
