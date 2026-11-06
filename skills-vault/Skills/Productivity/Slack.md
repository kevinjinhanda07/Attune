---
tags: [plugin, productivity]
category: Productivity
source: https://github.com/slackapi/slack-mcp-plugin
license: MIT
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Slack

Official Slack MCP: search, read, post.

## What it does
- Search messages and channels, read threads, send messages, canvases.

## Install
```
/plugin install slack@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/slackapi/slack-mcp-plugin --no-llm`

## Usage
- *"Summarise #launch from this week."*

## Caveats/risks
- Can post as you: review messages before sending.
- Unofficial `korotovsky/slack-mcp-server` is rejected: see [[Rejected]].

**Verdict: APPROVE** (2026-11-06). Official Slack. Read 9 SKILL.md files: slack-cli skill uses Slack's own installer.

## Links
- Repo: https://github.com/slackapi/slack-mcp-plugin
- Copies: [[Skills/Productivity/Slack/block-kit.SKILL|block-kit]] · [[Skills/Productivity/Slack/create-slack-app.SKILL|create-slack-app]] · [[Skills/Productivity/Slack/deploy-slack-app.SKILL|deploy-slack-app]] · [[Skills/Productivity/Slack/slack-api.SKILL|slack-api]] · [[Skills/Productivity/Slack/slack-cli.SKILL|slack-cli]] · [[Skills/Productivity/Slack/slack-docs.SKILL|slack-docs]] · [[Skills/Productivity/Slack/slack-messaging.SKILL|slack-messaging]] · [[Skills/Productivity/Slack/slack-search.SKILL|slack-search]]
- Category: [[Categories/Productivity|Productivity]] · [[Home]]
