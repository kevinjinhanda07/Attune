---
tags: [skill, data-analytics]
category: Data-Analytics
source: https://github.com/duckdb/duckdb-skills
license: MIT
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# DuckDB Skills

Query any CSV/Parquet/JSON file with SQL.

## What it does
- Read any data file, attach DuckDB databases, run analytical SQL locally.

## Install
```
/plugin install duckdb-skills@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/duckdb/duckdb-skills --no-llm`

## Usage
- *"What are the top 10 products by revenue in sales.parquet?"*

## Caveats/risks
- Its install-duckdb skill offers `curl … install.duckdb.org | sh` on Linux; prefer your package manager.

**Verdict: APPROVE** (2026-11-06). Official DuckDB. Read 9 SKILL.md files: instructions; only installer is DuckDB's own.

## Links
- Repo: https://github.com/duckdb/duckdb-skills
- Copies: [[Skills/Data-Analytics/DuckDB Skills/attach-db.SKILL|attach-db]] · [[Skills/Data-Analytics/DuckDB Skills/convert-file.SKILL|convert-file]] · [[Skills/Data-Analytics/DuckDB Skills/duckdb-docs.SKILL|duckdb-docs]] · [[Skills/Data-Analytics/DuckDB Skills/install-duckdb.SKILL|install-duckdb]] · [[Skills/Data-Analytics/DuckDB Skills/query.SKILL|query]] · [[Skills/Data-Analytics/DuckDB Skills/read-file.SKILL|read-file]] · [[Skills/Data-Analytics/DuckDB Skills/read-memories.SKILL|read-memories]] · [[Skills/Data-Analytics/DuckDB Skills/s3-explore.SKILL|s3-explore]] · [[Skills/Data-Analytics/DuckDB Skills/spatial.SKILL|spatial]]
- Category: [[Categories/Data-Analytics|Data-Analytics]] · [[Home]]
