---
tags: [server, devops-cloud]
category: DevOps-Cloud
source: https://github.com/grafana/mcp-grafana
license: Apache-2.0
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Grafana MCP

Grafana dashboards, Prometheus/Loki queries, alerts, incidents.

## What it does
- Search dashboards, run PromQL/LogQL, manage alerts and incidents.

## Install
```
/plugin install grafana-mcp@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/grafana/mcp-grafana --no-llm`

## Usage
- *"Show error-rate trend for checkout in the last 6h."*

## Caveats/risks
- Use a viewer-role service account token.

**Verdict: APPROVE** (2026-11-06). Official Grafana. Read README; plugin comes from grafana/ai-marketplace (scan clean).

## Links
- Repo: https://github.com/grafana/mcp-grafana
- Category: [[Categories/DevOps-Cloud|DevOps-Cloud]] · [[Home]]
