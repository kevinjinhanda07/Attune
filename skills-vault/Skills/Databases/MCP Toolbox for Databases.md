---
tags: [server, databases]
category: Databases
source: https://github.com/googleapis/genai-toolbox
license: Apache-2.0
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# MCP Toolbox for Databases

Google's MCP server for Postgres, MySQL, BigQuery, Spanner, SQLite and more.

## What it does
- Define safe, named SQL tools in `tools.yaml`; connection pooling and auth built in.

## Install
```
npx @toolbox-sdk/server --config tools.yaml
# then: claude mcp add toolbox ... (see README)
```
Scan first: `skillspector scan https://github.com/googleapis/genai-toolbox --no-llm`

## Usage
- Expose only the queries you define, instead of raw SQL access.

## Caveats/risks
- You write the tools.yaml; that's the safety boundary.

**Verdict: APPROVE** (2026-11-06). Official Google. Read README and 6 SKILL.md files: clean.

## Links
- Repo: https://github.com/googleapis/genai-toolbox
- Category: [[Categories/Databases|Databases]] · [[Home]]
