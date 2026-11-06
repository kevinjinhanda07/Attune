---
tags: [index]
---
# Skills Vault

My Claude Code skills and plugins. First batch came from a Nick Saraev video on Claude Code plugins for 2026.

## Skills
- [[SkillSpector]]: security scanner for skills. **Run it before every install.**
- [[Ponytail]]: smallest-change coding mode + review/audit
- [[Lemo-Opuscar]]: code-made short films in 43+ styles
- [[FreeLLMAPI]]: pool free LLM tiers behind one endpoint
- [[Agent Reach]]: read X, Reddit, LinkedIn, YouTube and more

Later: [[Inbox]]

## Status
| Skill | Type | Installed? | Vetted | Risk | Runs where |
|---|---|---|---|---|---|
| [[SkillSpector]] | CLI | no | 2026-11-06 | low | my computer (uv) |
| [[Ponytail]] | plugin | no | 2026-11-06 | low | Claude Code |
| [[Lemo-Opuscar]] | plugin | no | 2026-11-06 | caution | Claude Code + Node/ffmpeg/Python |
| [[FreeLLMAPI]] | server | no | 2026-11-06 | caution | local server (Docker/app) |
| [[Agent Reach]] | CLI | no | 2026-11-06 | caution | my computer (uv + browser) |

## Adding a new skill
1. **Scan with SkillSpector first:** `skillspector scan <repo URL> --no-llm`
2. Use the original repo, not a fork. Check the name on PyPI/npm isn't a different project.
3. Read every `SKILL.md`, plus any `setup.sh`/install scripts and hooks.
4. Note what it installs, where your data goes, and whether it changes global config.
5. Make `Skills/<Name>.md` from an existing note (frontmatter: tags, source, license, type, risk, vetted).
6. Copy its SKILL.md files into `Skills/<Name>/`.
7. Add it to the list and status table above. Remove it from [[Inbox]].
8. Install on my computer only after steps 1–4 pass. Then flip **Installed?** to yes.
9. Commit and push to the `skills-vault` branch.
