---
tags: [ui, input]
type: guide
source: https://create.roblox.com/docs/input
risk: low
updated: 2026-11-06
---
# Input across devices
Up: [[MOC-UI]]

```lua
local CAS = game:GetService("ContextActionService")
CAS:BindAction("Interact", function(_, state)
	if state == Enum.UserInputState.Begin then Net.Interact:FireServer() end
	return Enum.ContextActionResult.Sink
end, true, Enum.KeyCode.E, Enum.KeyCode.ButtonX)
```
- `true` = auto touch button on mobile.
- Gamepad UI: `GuiService.SelectedObject`, `Selectable`, `NextSelectionUp/Down/Left/Right`.
- Show the right glyph (E / X / tap) and update when input type changes (`UserInputService.LastInputTypeChanged`).
