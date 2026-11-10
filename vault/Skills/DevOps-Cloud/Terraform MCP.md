---
tags: [server, devops-cloud]
category: DevOps-Cloud
source: https://github.com/hashicorp/terraform-mcp-server
license: MPL-2.0
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Terraform MCP

Terraform Registry docs, providers and modules lookup.

## What it does
- Accurate provider/resource docs and module search; optional HCP Terraform workspace tools.

## Install
```
/plugin install terraform@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/hashicorp/terraform-mcp-server --no-llm`

## Usage
- *"Write Terraform for a GCS bucket with versioning, check the provider docs."*

## Caveats/risks
- Runs in Docker (pinned image `hashicorp/terraform-mcp-server:0.4.0`).
- `TFE_TOKEN` only if you want HCP Terraform access.

**Verdict: APPROVE** (2026-11-06). Official HashiCorp. Read README and plugin config.

## Links
- Repo: https://github.com/hashicorp/terraform-mcp-server
- Category: [[Categories/DevOps-Cloud|DevOps-Cloud]] · [[Home]]
