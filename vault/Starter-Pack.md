---
tags: [starter]
---
# Starter Pack

Top 10 to install first, in order. Paste each block into Claude Code.
Before each one, scan it: `skillspector scan <repo URL> --no-llm`.

**1. [[SkillSpector]]**: scanner, so you can check everything else.
```
uv tool install git+https://github.com/NVIDIA/skillspector.git
```

**2. [[Context7]]**: current library docs (fewer made-up APIs).
```
/plugin install context7@claude-plugins-official
```

**3. [[Superpowers]]**: plan → TDD → debug → review workflow.
```
/plugin install superpowers@claude-plugins-official
```

**4. [[Playwright MCP]]**: Claude can open and test your app in a browser.
```
/plugin install playwright@claude-plugins-official
```

**5. [[GitHub MCP]]**: issues, PRs, Actions. Needs `GITHUB_PERSONAL_ACCESS_TOKEN`.
```
/plugin install github@claude-plugins-official
```

**6. [[Commit Commands]]**: `/commit`, `/commit-push-pr`.
```
/plugin install commit-commands@claude-plugins-official
```

**7. [[Code Review Plugin]]**: multi-agent PR review.
```
/plugin install code-review@claude-plugins-official
```

**8. [[Security Guidance]]**: warns on risky code as Claude writes it.
```
/plugin install security-guidance@claude-plugins-official
```

**9. [[Document Skills]]**: Word, PDF, PowerPoint, Excel.
```
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
```

**10. [[Skill Creator]]**: build your own skills next.
```
/plugin install skill-creator@claude-plugins-official
```

If `@claude-plugins-official` isn't found: `/plugin marketplace add anthropics/claude-plugins-official`.

**Next:** building websites? → [[Web-Design-Starter-Pack]]. Add your stack's language server from [[LSP Plugins]].
Each plugin adds context to every session. Start with these, add more only when a task needs one.

[[Home]]
