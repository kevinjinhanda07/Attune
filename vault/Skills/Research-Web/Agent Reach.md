---
tags: [skill, CLI, web, social]
source: https://github.com/Panniantong/Agent-Reach
license: MIT
type: CLI
risk: caution
category: Research-Web
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Agent Reach

CLI plus skill that lets agents read X, Reddit, LinkedIn, Instagram, YouTube (transcripts), GitHub, Bilibili, Xiaohongshu and more.

## What it does
- One command: `agent-reach <channel> <action>` or `agent-reach read <url>`. Returns JSON.
- **Read-only:** no posting, commenting, liking or DMs.
- The skill tells Claude to try its own web tools first and use Reach only to fill gaps.

## Install
Tell Claude Code:
> Install Agent Reach: https://raw.githubusercontent.com/Panniantong/Agent-Reach/main/docs/install.md

It runs `uv tool install` from the GitHub release, then `agent-reach setup`.
⚠️ The **PyPI package `agent-reach` is NOT this project.** Never `pip install agent-reach`.

## Usage
```bash
agent-reach channels              # what each channel can do
agent-reach read <link>
agent-reach reddit search "..." --limit 5
agent-reach add linkedin          # add a platform
agent-reach login <channel>       # you log in yourself in its browser
agent-reach doctor --text         # status
```

## Caveats/risks
- **Logged-in platforms use your browser session, not an official API.** That breaks most sites' terms and risks a ban. **Use a throwaway account.**
- If your Chrome has the OpenCLI extension connected, it **copies that site's cookies automatically** into its own browser the first time. That means it can act as your main account without asking. Skip the extension, or log in with the throwaway account through `agent-reach login`.
- Uses CloakBrowser (an anti-bot-detection browser), falling back to your Chrome.
- `agent-reach add` installs Node, OpenCLI and a browser on its own. The install guide may install `uv` with `curl | sh`.

**Verdict: CAUTION** (2026-11-06). Read `agent_reach/skill/SKILL.md` (Chinese; English copy in `SKILL_en.md`), `references/sessions.md` and `docs/install.md`. Benign. Plain instructions with clear red lines: read-only, never logs in for you, never asks for or prints passwords or cookies, no auto-updates. Caution comes from the session-cookie approach and platform terms, not hidden behavior. Python source not reviewed.

## Links
- Repo: https://github.com/Panniantong/Agent-Reach
- Copies: [[Skills/Research-Web/Agent Reach/agent-reach.SKILL|SKILL.md (中文)]] · [[Skills/Research-Web/Agent Reach/agent-reach.SKILL_en|SKILL_en.md]]
- Category: [[Categories/Research-Web|Research-Web]] · [[Home]]
