---
tags: [publishing, liveops]
type: guide
source: https://create.roblox.com/docs/production
risk: medium
updated: 2026-11-06
---
# Publishing & live-ops
Up: [[MOC-Publishing]]

- Test universe → prod universe. Never test on prod.
- Deploy: Rojo build → publish (Studio or Open Cloud API with scoped key).
- Update servers at low CCU; soft-shutdown migrates players.
- Instrument funnels (`AnalyticsService`) before launch.
- Metrics: D1/D7/D30, session length, payer conversion, ARPDAU, funnel drop-offs.
- Cadence: weekly patch, monthly event, seasonal big update.
- Events toggled by data/time, not hard-coded republishes.
