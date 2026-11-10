---
tags: [plugin, security]
category: Security
source: https://github.com/trailofbits/skills
license: CC-BY-SA-4.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Trail of Bits Skills

Security auditing skills from a top security firm.

## What it does
- 40+ plugins: differential-review, insecure-defaults, static-analysis (Semgrep/CodeQL), supply-chain-risk-auditor, property-based-testing, sharp-edges.

## Install
```
/plugin marketplace add trailofbits/skills
/plugin install differential-review@trailofbits
/plugin install insecure-defaults@trailofbits
/plugin install supply-chain-risk-auditor@trailofbits
```
Scan first: `skillspector scan https://github.com/trailofbits/skills --no-llm`

## Usage
- *"Do a differential security review of this branch."*

## Caveats/risks
- Install only the plugins you need; some have hooks (e.g. gh-cli).

**Verdict: APPROVE** (2026-11-06). Read marketplace + a sample of SKILL.md files and the gh-cli hooks: instructions and local scripts.

## Links
- Repo: https://github.com/trailofbits/skills
- Copies: [[Skills/Security/Trail of Bits Skills/differential-review.SKILL|differential-review]]
- Category: [[Categories/Security|Security]] · [[Home]]
