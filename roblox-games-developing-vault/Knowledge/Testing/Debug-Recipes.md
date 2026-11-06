---
tags: [testing, debugging]
type: cheatsheet
source: self
risk: low
updated: 2026-11-06
---
# Debug recipes
Up: [[MOC-Testing]]

| Symptom | Likely cause | Fix |
|---|---|---|
| Infinite yield on WaitForChild | streaming / wrong side / typo | timeout + check side |
| Works in Studio, not live | API access, timing, ownership of assets | test place with real servers |
| Remote does nothing | listener connected late / wrong remote | define in Net module, connect early |
| CharacterAdded never fires | connected after spawn | also handle existing `player.Character` |
| Data lost | no session lock / saving empty data | [[Data-and-ProfileStore]] |
| Lag spikes | per-frame loops, particles, physics | MicroProfiler |
| Animation won't play | owner mismatch | publish under game owner |
