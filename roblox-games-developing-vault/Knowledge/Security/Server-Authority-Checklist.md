---
tags: [security]
type: checklist
source: https://create.roblox.com/docs/scripting/security
risk: high
updated: 2026-11-06
---
# Server authority checklist
Up: [[MOC-Security]]

For each remote handler:
- [ ] Types checked (`typeof`, finite numbers)
- [ ] Ownership (player owns item/plot/pet)
- [ ] Distance/range check
- [ ] State check (alive, round active, tool equipped)
- [ ] Cooldown / rate limit
- [ ] Server-side prices, damage, rewards
- [ ] Logged if suspicious; kick only when certain
Also: server owns critical physics (`SetNetworkOwner(nil)`), no trusted values in ReplicatedStorage that clients can "set".
