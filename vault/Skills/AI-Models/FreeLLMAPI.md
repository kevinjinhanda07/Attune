---
tags: [server, llm-proxy, cost]
source: https://github.com/tashfeenahmed/freellmapi
license: MIT
type: server
risk: caution
category: AI-Models
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# FreeLLMAPI

Self-hosted proxy that pools the free tiers of ~34 LLM providers behind one OpenAI/Anthropic-compatible endpoint.

## What it does
- You add your own free API keys (Google, Groq, Cerebras, Mistral, OpenRouter…). It routes each request to an available model and fails over on rate limits.
- Speaks the Anthropic Messages API, so Claude Code can point at it.
- Local dashboard at `http://localhost:3001`. Keys are stored encrypted (AES-256-GCM) in SQLite.

## Install
Docker one-liner, or the desktop app from Releases (macOS/Windows). Read the script before piping it to bash:
```bash
curl -fsSL https://freellmapi.co/install.sh | bash
```
Then add provider keys on the **Keys** page and copy the unified key.

Connect Claude Code:
```bash
npx freellmapi setup-claude --url http://localhost:3001 --api-key <key>
```

## Usage
Open `localhost:3001` to manage keys and the fallback chain. Use Claude Code as normal; requests go to the pool.

## Caveats/risks
- **No free tokens of its own.** It only pools the free plans you sign up for.
- **Your prompts and code go to third-party providers.** Don't use it on private or client code.
- **Failover can land on weaker models.** Quality drops later in the day as top models hit caps (resets at UTC midnight).
- `setup-claude` writes `ANTHROPIC_BASE_URL` and points **all** model aliases (Opus/Sonnet/Haiku) at the proxy in `~/.claude/settings.json`. That affects every Claude Code session. Safer: `npx freellmapi launch` (no config written) or `--profile <name>`. Try `--dry-run` first.
- Server contacts `api.freellmapi.co` twice a day for a signed model catalog. Paid tier ($19/yr) gets updates sooner.
- Author's own disclaimer: for personal experiments, not production. Provider terms vary.

**Verdict: CAUTION** (2026-11-06). No SKILL.md in the repo. Read the README, the `setup-claude` code (`cli/src/tools.ts`) and the catalog sync. Nothing malicious found. Caution comes from where your data goes and the global Claude Code config change. The repo's own `.claude/` folder only matters if you open the repo itself in Claude Code.

## Links
- Repo: https://github.com/tashfeenahmed/freellmapi
- Category: [[Categories/AI-Models|AI-Models]] · [[Home]]
