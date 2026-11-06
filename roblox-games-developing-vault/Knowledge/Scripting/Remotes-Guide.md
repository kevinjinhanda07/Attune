---
tags: [scripting, network, security]
type: guide
source: https://create.roblox.com/docs/scripting/events/remote
risk: medium
updated: 2026-11-06
---
# Remotes guide
Up: [[MOC-Scripting]] · Security: [[Server-Authority-Checklist]]

| Type | Direction | Use |
|---|---|---|
| RemoteEvent | both | default |
| UnreliableRemoteEvent | both | frequent cosmetic data |
| RemoteFunction | client→server | request/response (shop info) |
| BindableEvent | same side | internal signals |

## One Net module
```lua
-- src/shared/Net.luau
local RS = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local folder: Folder
if RunService:IsServer() then
	folder = Instance.new("Folder"); folder.Name = "Net"; folder.Parent = RS
	for _, n in { "BuyItem", "Equip", "Notify" } do
		local r = Instance.new("RemoteEvent"); r.Name = n; r.Parent = folder
	end
else
	folder = RS:WaitForChild("Net") :: Folder
end
return {
	BuyItem = folder:WaitForChild("BuyItem") :: RemoteEvent,
	Equip = folder:WaitForChild("Equip") :: RemoteEvent,
	Notify = folder:WaitForChild("Notify") :: RemoteEvent,
}
```
- Client sends **intent** ("buy sword"), server decides.
- Don't fire remotes every frame; batch or use unreliable.
- Avoid `InvokeClient`.
