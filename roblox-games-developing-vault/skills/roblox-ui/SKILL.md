---
name: roblox-ui
description: Build Roblox user interfaces - ScreenGui, Frames, UIListLayout/UIGridLayout, UIScale/UIAspectRatioConstraint, scale vs offset, safe areas, tweening, React-lua (jsdotlua/react) or Fusion components, and input for mouse, touch, gamepad/console with ContextActionService and GuiService selection. Use for any HUD, shop, menu, inventory, popup, or "UI looks wrong on mobile/console" request.
---

# Roblox UI

## Ground rules
- Build UI in code (React-lua or Fusion) **or** in Studio and clone templates. Don't mix in one screen.
- Size with **Scale**, fix shape with `UIAspectRatioConstraint`, limit with `UISizeConstraint`. Offset only for padding/strokes.
- `ScreenGui.ResetOnSpawn = false` for persistent HUD. `IgnoreGuiInset` deliberate; respect `ScreenInsets` (`DeviceSafeInsets`) for notches.
- One `ScreenGui` per screen/layer; set `DisplayOrder` for stacking. Toggle `Enabled`, not Parent.
- Text: `TextScaled` + `UITextSizeConstraint` (MaxTextSize), or fixed sizes per breakpoint. Use `RichText` sparingly.
- Min touch target ≈ 44 px on phone. Test in Studio Device Emulator: phone, tablet, 1080p, 4K TV, console.

## Layouts
- `UIListLayout` (rows/columns, `Padding`, `HorizontalFlex`/`VerticalFlex` for flex fill), `UIGridLayout` (shop grids; `CellSize` in scale), `UIPadding`, `UICorner`, `UIStroke`.
- Scrolling lists: `ScrollingFrame` + `AutomaticCanvasSize = Y`, `CanvasSize = UDim2.new()`.

## Tweening
```lua
local TweenService = game:GetService("TweenService")
local info = TweenInfo.new(0.18, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
local function pop(frame: GuiObject)
	local scale = frame:FindFirstChildOfClass("UIScale")
	if not scale then
		scale = Instance.new("UIScale")
		scale.Parent = frame
	end
	scale.Scale = 0.85
	TweenService:Create(scale, info, { Scale = 1 }):Play()
end
```
Animate `UIScale`, `Position`, `GroupTransparency` (on CanvasGroup). Keep durations 0.12–0.3 s. Respect reduced motion if you add a setting.

## React-lua (Wally: jsdotlua/react, jsdotlua/react-roblox)
```lua
local React = require(Packages.React)
local ReactRoblox = require(Packages.ReactRoblox)
local e = React.createElement

local function CoinLabel(props: { coins: number })
	return e("TextLabel", {
		Size = UDim2.fromScale(0.2, 0.06), Position = UDim2.fromScale(0.02, 0.02),
		BackgroundTransparency = 1, TextScaled = true, Text = `🪙 {props.coins}`,
	})
end

local root = ReactRoblox.createRoot(Instance.new("Folder"))
root:render(ReactRoblox.createPortal(e("ScreenGui", { ResetOnSpawn = false }, {
	Coins = e(CoinLabel, { coins = 0 }),
}), Players.LocalPlayer.PlayerGui))
```
Fusion is a fine alternative (reactive `Value`/`Computed`). Pick one per project.

## Input (all devices)
- Detect with `UserInputService.PreferredInput` (or `GamepadEnabled`/`TouchEnabled`) and **react to changes**, not once.
- Bind actions with `ContextActionService:BindAction(name, fn, createTouchButton, Enum.KeyCode.E, Enum.KeyCode.ButtonX)` – one binding covers keyboard, gamepad and an optional touch button.
- Console: every button must be reachable with `GuiService.SelectedObject`; set `Selectable`, `NextSelection*` where auto-nav fails; show gamepad glyphs.
- Show correct prompts (E vs X vs tap) per input type.

## Checklist
- [ ] Looks right on phone, tablet, desktop, TV
- [ ] Usable with gamepad only
- [ ] No overlap with top-bar / safe insets
- [ ] Buttons send *intent* to server; server validates (prices never from UI)
