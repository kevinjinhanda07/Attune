---
tags: [plugin, databases]
category: Databases
source: https://github.com/supabase-community/supabase-mcp
license: Apache-2.0
type: plugin
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Supabase

Manage Supabase: tables, migrations, SQL, edge functions.

## What it does
- Run SQL, apply migrations, generate types, read logs, deploy edge functions.

## Install
```
/plugin install supabase@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/supabase-community/supabase-mcp --no-llm`

## Usage
- *"Add a profiles table with RLS."*

## Caveats/risks
- Can change your database. **Use `read_only=true` and a dev project**, not prod.
- Prompt-injection risk from data rows: keep reviews on.

**Verdict: CAUTION** (2026-11-06). Official Supabase. Read README and plugin skills: clean. Caution = write access.

## Links
- Repo: https://github.com/supabase-community/supabase-mcp
- Copies: [[Skills/Databases/Supabase/supabase-postgres-best-practices.SKILL|supabase-postgres-best-practices]] · [[Skills/Databases/Supabase/supabase.SKILL|supabase]]
- Category: [[Categories/Databases|Databases]] · [[Home]]
