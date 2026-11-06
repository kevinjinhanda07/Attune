---
tags: [architecture]
type: guide
source: self (Knit-style pattern)
risk: low
updated: 2026-11-06
---
# Services pattern
Up: [[MOC-Architecture]]

- Server: `Services/*.luau`, each returns a table with optional `Init()` and `Start()`.
- Client: same with `Controllers/`.
- One bootstrap script per side requires all, runs all `Init`, then all `Start`.
- Init: no yielding. Start: connect events, call other services.
- Communication: direct `require` + typed functions. Signals for events.
- Why not Knit? Unmaintained; the pattern is ~30 lines (see skill).

```
Server  ─ DataService ─ ShopService ─ CombatService
            ▲  Net remotes (shared/Net.luau)  ▼
Client  ─ UIController ─ InputController ─ CameraController
```
