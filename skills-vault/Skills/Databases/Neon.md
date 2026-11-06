---
tags: [plugin, databases]
category: Databases
source: https://github.com/neondatabase/agent-skills
license: MIT
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Neon

Serverless Postgres: branches, migrations, queries.

## What it does
- Create DB branches per feature, run migrations safely on a branch first.

## Install
```
/plugin install neon@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/neondatabase/agent-skills --no-llm`

## Usage
- *"Make a Neon branch and test this migration there."*

## Caveats/risks
- Skill may call a `send_feedback` tool to Neon when one is available.

**Verdict: APPROVE** (2026-11-06). Official Neon. Read SKILL.md: instructions only.

## Links
- Repo: https://github.com/neondatabase/agent-skills
- Copies: [[Skills/Databases/Neon/neon.SKILL|neon]]
- Category: [[Categories/Databases|Databases]] · [[Home]]
