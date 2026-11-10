---
tags: [plugin, devops-cloud]
category: DevOps-Cloud
source: https://github.com/microsoft/azure-skills
license: MIT
type: plugin
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Azure

Azure MCP server + Azure skills.

## What it does
- Manage Azure resources, query logs, deploy; best-practice skills.

## Install
```
/plugin install azure@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/microsoft/azure-skills --no-llm`

## Usage
- *"List my Azure storage accounts."*

## Caveats/risks
- Uses your Azure login: real resource access. Prefer read-only roles.
- **Telemetry hooks** on SessionStart/PostToolUse; set `AZURE_MCP_COLLECT_TELEMETRY=false` to opt out.

**Verdict: CAUTION** (2026-11-06). Official Microsoft (skills: microsoft/azure-skills; server: microsoft/mcp). Pattern scan clean; hooks only send usage telemetry.

## Links
- Repo: https://github.com/microsoft/azure-skills
- Category: [[Categories/DevOps-Cloud|DevOps-Cloud]] · [[Home]]
