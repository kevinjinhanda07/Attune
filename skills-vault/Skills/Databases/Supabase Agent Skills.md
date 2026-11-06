---
tags: [skill, databases]
category: Databases
source: https://github.com/supabase/agent-skills
license: MIT
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: yes (Attune repo)
---
# Supabase Agent Skills

Supabase's own guidance: schema, auth, RLS, Postgres best practices.

## What it does
- `supabase` (how to build on Supabase the recommended way) and `supabase-postgres-best-practices`.
- Pairs with the [[Supabase]] MCP plugin, which does the actual database work.

## Install
```
npx skills add supabase/agent-skills
```
Scan first: `skillspector scan https://github.com/supabase/agent-skills --no-llm`

## Usage
- *"Set up auth and a profiles table with RLS the Supabase way."*

## Caveats/risks
- Knowledge only; changes go through the [[Supabase]] MCP (see its caveats).

**Verdict: APPROVE** (2026-11-06). Official Supabase. Read both SKILL.md files: instructions only.

## Links
- Repo: https://github.com/supabase/agent-skills
- Copies: [[Skills/Databases/Supabase Agent Skills/supabase-postgres-best-practices.SKILL|supabase-postgres-best-practices]] · [[Skills/Databases/Supabase Agent Skills/supabase.SKILL|supabase]]
- Category: [[Categories/Databases|Databases]] · [[Home]]
