---
tags: [scripting, luau]
type: cheatsheet
source: https://create.roblox.com/docs/luau
risk: low
updated: 2026-11-06
---
# Luau cheatsheet
Up: [[MOC-Scripting]]

```lua
--!strict
type Pet = { id: string, level: number, shiny: boolean? }
local pets: { Pet } = {}
local byId: { [string]: Pet } = {}

local function add(p: Pet): ()
	table.insert(pets, p)
	byId[p.id] = p
end

local name = `Pet {pets[1] and pets[1].id or "none"}` -- string interpolation
local n = if #pets > 0 then #pets else 0                -- if-expression
for i, p in pets do end                                 -- generalized iteration
```
- `continue` in loops, `//` floor division, `+=` etc.
- Types: `typeof(v)` at runtime, `::` cast, `export type`, generics `<T>`.
- `task.spawn(fn)`, `task.defer`, `task.delay(s, fn)`, `task.wait(s)`, `task.cancel(thread)`.
- Never: `wait()`, `spawn()`, `delay()`, `Instance.new(class, parent)` in hot code (set Parent last).
