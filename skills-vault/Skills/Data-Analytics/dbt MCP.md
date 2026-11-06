---
tags: [server, data-analytics]
category: Data-Analytics
source: https://github.com/dbt-labs/dbt-mcp
license: Apache-2.0
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# dbt MCP

Work with dbt projects: models, lineage, runs, semantic layer.

## What it does
- Run dbt commands, explore lineage and metadata, query the semantic layer.

## Install
```
claude mcp add dbt -- uvx dbt-mcp
```
Scan first: `skillspector scan https://github.com/dbt-labs/dbt-mcp --no-llm`

## Usage
- *"Which models depend on stg_orders?"*

## Caveats/risks
- Can run `dbt run` against your warehouse: be careful with prod targets.

**Verdict: APPROVE** (2026-11-06). Official dbt Labs. Read README and skill.

## Links
- Repo: https://github.com/dbt-labs/dbt-mcp
- Category: [[Categories/Data-Analytics|Data-Analytics]] · [[Home]]
