---
tags: [scripting, performance]
type: checklist
source: https://create.roblox.com/docs/performance-optimization
risk: low
updated: 2026-11-06
---
# Script performance checklist
Up: [[MOC-Scripting]] · Measure: [[Testing-and-Profiling]]

- [ ] Events instead of polling loops
- [ ] Heavy per-frame work < 1 ms (MicroProfiler label it)
- [ ] Cache services, instances, `FindFirstChild` results
- [ ] Spatial queries over looping all parts
- [ ] Pool frequently created instances
- [ ] Disconnect connections; clear per-player tables on leave
- [ ] `--!native` for math-heavy pure modules
- [ ] Remote traffic small and infrequent
- [ ] Animations loaded once per Animator
