---
tags: [plugin, devops-cloud]
category: DevOps-Cloud
source: https://github.com/vercel/vercel-plugin
license: Apache-2.0
type: plugin
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Vercel Plugin

Vercel platform skills: Next.js, AI SDK, deploys, sandbox.

## What it does
- 55 skills covering Vercel, Next.js, AI SDK, Workflow, Sandbox, plus hooks that inject context.

## Install
```
/plugin install vercel@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/vercel/vercel-plugin --no-llm`

## Usage
- *"Deploy this to Vercel preview."*

## Caveats/risks
- Many hooks (session + tool context injection).
- **Sends telemetry to telemetry.vercel.com** by default; set `VERCEL_PLUGIN_TELEMETRY=off` to disable.

**Verdict: CAUTION** (2026-11-06). Official Vercel. Read hooks.json and telemetry code: no prompt/code exfiltration found, but opt-out telemetry.

## Links
- Repo: https://github.com/vercel/vercel-plugin
- Category: [[Categories/DevOps-Cloud|DevOps-Cloud]] · [[Home]]
