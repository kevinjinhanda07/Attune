---
tags: [skill, docs-writing]
category: Docs-Writing
source: https://github.com/anthropics/skills
license: Source-available (Anthropic, all rights reserved)
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Document Skills

Create and edit Word, PDF, PowerPoint and Excel files.

## What it does
- `docx`, `pdf`, `pptx`, `xlsx`: the same skills Claude.ai uses for files. Tracked changes, forms, formulas, charts.

## Install
```
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
```
Scan first: `skillspector scan https://github.com/anthropics/skills --no-llm`

## Usage
- *"Turn this markdown into a branded .docx."*
- *"Clean up this spreadsheet and add a pivot."*

## Caveats/risks
- License is source-available, not open source: use, don't redistribute (so no copies kept in this vault).
- Needs Python/LibreOffice bits for some conversions.

**Verdict: APPROVE** (2026-11-06). Read all 4 SKILL.md files and scripts: local file processing only.

## Links
- Repo: https://github.com/anthropics/skills
- Category: [[Categories/Docs-Writing|Docs-Writing]] · [[Home]]
