---
tags: [ui]
type: checklist
source: https://create.roblox.com/docs/ui
risk: low
updated: 2026-11-06
---
# UI scaling checklist
Up: [[MOC-UI]]

- [ ] Scale-based sizes, `UIAspectRatioConstraint` on squares/icons
- [ ] `UISizeConstraint` for max/min sizes on huge/tiny screens
- [ ] Text: `TextScaled` + `UITextSizeConstraint`
- [ ] Safe insets respected (notch, top bar)
- [ ] Device Emulator: phone portrait/landscape, tablet, 1080p, 4K TV
- [ ] Touch targets ≥ ~44 px
- [ ] `ResetOnSpawn=false` on HUD
- [ ] Tweens 0.12–0.3 s, no layout jumps
