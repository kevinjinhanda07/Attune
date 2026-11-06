---
tags: [skill, security, scanner]
source: https://github.com/NVIDIA/skillspector
license: Apache-2.0
type: CLI
risk: low
vetted: 2026-11-06
installed: no
---
# SkillSpector

**Scan every other skill with this first.** NVIDIA's security scanner for agent skills.

## What it does
- Static scan of a skill folder, `SKILL.md`, zip or GitHub URL for known risk patterns (prompt injection, exfiltration, over-broad permissions, hidden instructions).
- Ships a `skill-inspector` skill: tells Claude to run the scan, then do its own read of the source. Don't trust the score alone.
- Output: terminal, JSON, Markdown, SARIF.

## Install
```bash
uv tool install git+https://github.com/NVIDIA/skillspector.git
# update later: uv tool update skillspector
```
No Python? Docker works too (see README).

## Usage
```bash
skillspector scan <path or URL> --no-llm
skillspector scan https://github.com/user/repo --no-llm
skillspector scan ./skills/ --recursive --no-llm --format json
```

## Caveats/risks
- `--no-llm` keeps it offline and free. Without it, LLM providers like `claude_cli` start a separate agent session per call, billed to your plan.
- A clean scan isn't proof of safety. Still read the `SKILL.md` and any scripts.
- Its `tests/fixtures/` folder holds deliberately malicious sample skills. Never install those.

## Links
- Repo: https://github.com/NVIDIA/skillspector
- Copy of skill: [[Skills/SkillSpector/skill-inspector.SKILL|skill-inspector SKILL.md]]
- Back to [[Home]]
