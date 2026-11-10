---
tags: [skill, testing-browser]
category: Testing-Browser
source: https://github.com/anthropics/skills
license: Apache-2.0
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Webapp Testing

Test local web apps with Playwright scripts.

## What it does
- Writes and runs Python Playwright scripts against your local server; captures screenshots and logs.

## Install
```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```
Scan first: `skillspector scan https://github.com/anthropics/skills --no-llm`

## Usage
- *"Test the signup flow on my local app."*

## Caveats/risks
- Needs Python Playwright installed.

**Verdict: APPROVE** (2026-11-06). Read SKILL.md and helper script (starts your server, runs Playwright): local only.

## Links
- Repo: https://github.com/anthropics/skills
- Copies: [[Skills/Testing-Browser/Webapp Testing/webapp-testing.SKILL|webapp-testing]]
- Category: [[Categories/Testing-Browser|Testing-Browser]] · [[Home]]
