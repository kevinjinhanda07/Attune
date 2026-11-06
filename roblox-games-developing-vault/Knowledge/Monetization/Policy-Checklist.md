---
tags: [policy, safety]
type: checklist
source: https://create.roblox.com/docs/production/promotion/experience-guidelines
risk: high
updated: 2026-11-06
---
# Policy checklist (verify against current docs)
Up: [[MOC-Monetization]]

- [ ] Maturity & Compliance questionnaire submitted; label honest (Minimal/Mild/Moderate/Restricted)
- [ ] Want widest audience → design for Minimal/Mild (non-age-checked users & kids accounts are limited to these)
- [ ] Paid random items: odds visible; disabled where `PolicyService` says restricted
- [ ] Trading: respect `IsPaidItemTradingAllowed`
- [ ] All player text filtered (`TextService` / TextChatService)
- [ ] No off-platform links, real-money trading, or gambling
- [ ] Thumbnails/ads match real gameplay
- [ ] Group owns assets/animations/audio used
