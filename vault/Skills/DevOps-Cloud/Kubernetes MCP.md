---
tags: [server, devops-cloud]
category: DevOps-Cloud
source: https://github.com/containers/kubernetes-mcp-server
license: Apache-2.0
type: server
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Kubernetes MCP

Kubernetes and OpenShift cluster access.

## What it does
- List/describe/logs/exec, Helm, events. Native Go, no kubectl needed.

## Install
```
claude mcp add kubernetes -- npx -y kubernetes-mcp-server@latest --read-only
```
Scan first: `skillspector scan https://github.com/containers/kubernetes-mcp-server --no-llm`

## Usage
- *"Why is the api pod crash-looping?"*

## Caveats/risks
- Uses your kubeconfig. **Start with `--read-only`.**

**Verdict: CAUTION** (2026-11-06). Red Hat / containers org. Read README and skill: clean.

## Links
- Repo: https://github.com/containers/kubernetes-mcp-server
- Category: [[Categories/DevOps-Cloud|DevOps-Cloud]] · [[Home]]
