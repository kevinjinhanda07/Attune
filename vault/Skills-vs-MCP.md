---
tags: [explainer]
---
# Skills vs MCP vs Plugins

People (and AI summaries) mix these up. Quick version:

| | What it is | What it adds | Example |
|---|---|---|---|
| **Skill** | A folder with a `SKILL.md` (instructions), sometimes plus scripts | **Know-how**: how to do a task well. Loads only when relevant. | [[Taste Skill]], [[Frontend Slides]] |
| **MCP server** | A program (local or hosted) speaking Model Context Protocol | **New tools**: access to outside systems (browser, database, Figma, GitHub) | [[Playwright MCP]], [[Supabase]] |
| **Plugin** | A bundle installed with `/plugin install` | Any mix of skills, MCP servers, slash commands, agents and hooks | [[Superpowers]], [[Vercel Plugin]] |

- "Claude Skills are MCP servers" is **wrong**. Most skills are just Markdown and need no server.
- Skills are safest (text), MCP servers can act on your accounts, and plugins can add **hooks** that run code on every session. That's why hooks and `.mcp.json` get extra checks in the vetting checklist.
- Install routes: `/plugin install …` (plugins), `npx skills add owner/repo` (skills from GitHub), `claude mcp add …` (MCP servers).

## Good combos
- **Standout website:** [[Taste Skill]] or [[Impeccable]] (lead) + [[Emil Kowalski Design Skills]] (motion) + [[Playwright MCP]] (look at it) + [[Supabase Agent Skills]] / [[Supabase]] (backend).
- **Launch kit:** [[Web Asset Generator]] (icons, OG) + [[Marketing Skills]] (copy, SEO) + [[HyperFrames]] (demo video) + [[Frontend Slides]] (pitch deck).
- **Finding more:** [[Find Skills]], then always [[SkillSpector]] before installing.

[[Home]]
