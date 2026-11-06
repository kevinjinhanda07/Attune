---
tags: [skill, official]
category: Official
source: https://github.com/anthropics/skills
license: Apache-2.0
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Skill Creator

Make, edit and test your own skills.

## What it does
- Interviews you, writes the SKILL.md, then runs evals to check the skill triggers and works.
- Can benchmark a skill and tune its description.

## Install
```
/plugin install skill-creator@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/skills --no-llm`

## Usage
- *"Make a skill that formats my meeting notes."*
- *"Improve the description of my X skill so it triggers more reliably."*

## Caveats/risks
- Eval runs spawn extra Claude sessions, which use your plan.

**Verdict: APPROVE** (2026-11-06). Read SKILL.md and its scripts: plain instructions and local eval helpers. No network calls besides Claude itself.

## Links
- Repo: https://github.com/anthropics/skills
- Copies: [[Skills/Official/Skill Creator/skill-creator.SKILL|skill-creator]]
- Category: [[Categories/Official|Official]] · [[Home]]
