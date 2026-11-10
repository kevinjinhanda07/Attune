---
tags: [plugin, devops-cloud]
category: DevOps-Cloud
source: https://github.com/cloudflare/skills
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Cloudflare

Workers, Durable Objects, Agents SDK skills + remote MCP servers.

## What it does
- 19 skills for the Cloudflare developer platform.
- Remote MCP servers: docs, bindings, observability, browser rendering (`https://<name>.mcp.cloudflare.com/mcp`).

## Install
```
/plugin install cloudflare@claude-plugins-official
claude mcp add --transport http cf-docs https://docs.mcp.cloudflare.com/mcp
```
Scan first: `skillspector scan https://github.com/cloudflare/skills --no-llm`

## Usage
- *"Deploy this as a Cloudflare Worker with a KV cache."*

## Caveats/risks
- Account MCP servers use OAuth into your Cloudflare account.

**Verdict: APPROVE** (2026-11-06). Official Cloudflare. Read 19 SKILL.md files: instructions only.

## Links
- Repo: https://github.com/cloudflare/skills
- Copies: [[Skills/DevOps-Cloud/Cloudflare/agents-sdk.SKILL|agents-sdk]] · [[Skills/DevOps-Cloud/Cloudflare/basin.SKILL|basin]] · [[Skills/DevOps-Cloud/Cloudflare/cf-cli.SKILL|cf-cli]] · [[Skills/DevOps-Cloud/Cloudflare/cloudflare-email-service.SKILL|cloudflare-email-service]] · [[Skills/DevOps-Cloud/Cloudflare/cloudflare-one-migrations.SKILL|cloudflare-one-migrations]] · [[Skills/DevOps-Cloud/Cloudflare/cloudflare-one.SKILL|cloudflare-one]] · [[Skills/DevOps-Cloud/Cloudflare/cloudflare.SKILL|cloudflare]] · [[Skills/DevOps-Cloud/Cloudflare/durable-objects.SKILL|durable-objects]] · [[Skills/DevOps-Cloud/Cloudflare/gateway-workers.SKILL|gateway-workers]] · [[Skills/DevOps-Cloud/Cloudflare/k2.SKILL|k2]] · [[Skills/DevOps-Cloud/Cloudflare/nextjs-on-cloudflare.SKILL|nextjs-on-cloudflare]] · [[Skills/DevOps-Cloud/Cloudflare/sandbox-migrate-to-next.SKILL|sandbox-migrate-to-next]]
- Category: [[Categories/DevOps-Cloud|DevOps-Cloud]] · [[Home]]
