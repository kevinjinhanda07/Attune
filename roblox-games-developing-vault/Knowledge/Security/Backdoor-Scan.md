---
tags: [security, toolbox]
type: checklist
source: self
risk: high
updated: 2026-11-06
---
# Backdoor scan (Toolbox / free models)
Up: [[MOC-Security]] · See [[Rejected]]

Studio → Find All (Ctrl+Shift+F) for:
`require(` + number · `getfenv` · `setfenv` · `loadstring` · `HttpService` · `MarketplaceService` · `TeleportService` · long `\` escape strings · `string.reverse` · `:GetAsync("http`

- Delete scripts you didn't expect inside meshes/parts.
- Keep LoadStringEnabled off; HTTP off unless needed.
- Prefer Creator Store assets from verified creators.
