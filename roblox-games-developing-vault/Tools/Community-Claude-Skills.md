---
tags: [tool, ai, skills, community]
type: tool
source: skills.sh, claudemarketplaces.com, github: dig1t/skills, greedychipmunk/agent-skills
risk: medium
verdict: CAUTION
updated: 2026-11-06
---
# Community Claude skills (Roblox/Luau)
Up: [[MOC-Tools]] · Ours: [[MOC-Skills]]

**Verdict: ⚠️ CAUTION** – no official Anthropic/Roblox skill pack. Skills are prompts (+ sometimes scripts): read them before installing.

| Skill set | Verdict | Note |
|---|---|---|
| dig1t/skills (luau-type-expert, luau-best-practices, rojo-pro, luau-roblox-optimizer) | ⚠️ CAUTION → good | Roblox-focused, Markdown. Mentions Aftman (outdated). Install: `npx skills add dig1t/skills --skill luau-type-expert` |
| greedychipmunk/agent-skills › roblox-game-developer | ⚠️ CAUTION | generic multi-domain repo; Roblox skill is broad/shallow |
| stephenshorton › roblox-ts skill | ⚠️ CAUTION | only if using [[roblox-ts]] |
| Unknown "roblox-suite" style bundles with scripts | ❌ until read | |

## Install safely
1. Clone/read the repo, open each `SKILL.md` and any `scripts/`.
2. Copy only the skill folder into `.claude/skills/`. See [[Install-Skills]].
