---
tags: [plugin, devops-cloud]
category: DevOps-Cloud
source: https://github.com/getsentry/sentry-mcp
license: FSL-1.1 (Apache-2.0 later)
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Sentry

Read Sentry issues and traces; fix errors from Claude.

## What it does
- Search issues, view stack traces, Seer root-cause analysis, releases.

## Install
```
/plugin install sentry@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/getsentry/sentry-mcp --no-llm`

## Usage
- *"Fix the top unresolved Sentry error in project web."*

## Caveats/risks
- OAuth into your Sentry org.
- sentry-cli skill suggests `curl | bash` from cli.sentry.dev (Sentry's own).

**Verdict: APPROVE** (2026-11-06). Official Sentry. Read plugin SKILL.md files: instructions only.

## Links
- Repo: https://github.com/getsentry/sentry-mcp
- Copies: [[Skills/DevOps-Cloud/Sentry/sentry-create-alert.SKILL|sentry-create-alert]] · [[Skills/DevOps-Cloud/Sentry/sentry-debug-issue.SKILL|sentry-debug-issue]] · [[Skills/DevOps-Cloud/Sentry/sentry-fix-stack-traces.SKILL|sentry-fix-stack-traces]] · [[Skills/DevOps-Cloud/Sentry/sentry-get-started.SKILL|sentry-get-started]] · [[Skills/DevOps-Cloud/Sentry/sentry-instrument.SKILL|sentry-instrument]] · [[Skills/DevOps-Cloud/Sentry/sentry-otel-exporter-setup.SKILL|sentry-otel-exporter-setup]] · [[Skills/DevOps-Cloud/Sentry/sentry-setup-releases.SKILL|sentry-setup-releases]] · [[Skills/DevOps-Cloud/Sentry/sentry-snapshots-cocoa.SKILL|sentry-snapshots-cocoa]]
- Category: [[Categories/DevOps-Cloud|DevOps-Cloud]] · [[Home]]
