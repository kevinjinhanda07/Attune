# Claude Skills Export

419 skills from 49 vetted tools, exported 2026-11-10 from the Attune skills vault.

## What's inside
- `skills/<Category>/<Tool>/<skill>/` — complete skill folders (SKILL.md + references/scripts/assets + upstream license).
- `install-to-claude-code.sh` — copies chosen categories into `~/.claude/skills/`.
- `make-upload-zips.py` — makes one zip per skill for claude.ai / desktop upload.
- `INSTALL-COMMANDS.md` — proper install commands for all 80 tools, incl. plugins and MCP servers (Playwright, GitHub, Figma, Supabase…) that aren't plain folders.
- `skills-index.tsv` — every skill with its tool, verdict and source repo.
- `vault/` — the Obsidian vault with vetting notes (open the folder as a vault).

**Get it:** on GitHub, open branch `skills-export` → Code → Download ZIP, or
`git clone -b skills-export --single-branch https://github.com/kevinjinhanda07/Attune.git claude-skills-export`

## Move to Claude Code (other account / computer)
```
cd claude-skills-export
./install-to-claude-code.sh                  # list categories
./install-to-claude-code.sh Web-Design Marketing
```
Restart Claude Code. Skills live in your user folder, so they work in every project and aren't tied to an account.
**Don't install everything:** each skill's description loads into every session, and overlapping skills give mixed advice. Pick the categories you use.

## Move to claude.ai / Claude desktop
1. `python3 make-upload-zips.py Web-Design` (or no arguments for all).
2. In Claude: Settings → Capabilities → Skills → upload each `.zip` from `upload-zips/`.
Some skills expect a terminal, Node/Python or a CLI (see below) and only fully work in Claude Code. Very large skills (Taste Skill ~39 MB of assets) may exceed upload limits.

## Better installed from the source
These skills come from plugins/CLIs, so copying the folder gives the instructions but not the tool. Use `INSTALL-COMMANDS.md` for: Agent Reach, Graphify, HyperFrames, Superdesign, Lemo-Opuscar, Context7, Exa, Figma, Notion, Slack, Sentry, Atlassian, Cloudflare, Neon, Chrome DevTools, Playwright, Watermelon UI. Installing from source also gets you updates.

## CAUTION tools (read the vault note first)
Agent Reach, Find Skills, Graphify, HyperFrames, Lemo-Opuscar, Supabase, Superdesign, Threejs Skills. Not included as folders: Anthropic's Document Skills (docx/pdf/pptx/xlsx, not redistributable; install with `/plugin install document-skills@anthropic-agent-skills`), and tools that have no skill files (MCP servers, CLIs; see `INSTALL-COMMANDS.md`). Rejected tools are listed in `vault/Rejected.md`.

## Contents

**Official** (3): Skill Creator (1); MCP Builder (1); Claude API Skill (1)

**Coding Workflow** (47): Superpowers (14); Matt Pocock Skills (27); Ponytail (6)

**Testing Browser** (9): Chrome DevTools MCP (7); Webapp Testing (1); iOS Simulator Skill (1)

**Research Web** (7): Context7 (3); Exa Search (2); Find Skills (1); Agent Reach (1)

**Docs Writing** (3): Doc Coauthoring and Internal Comms (2); Frontend Slides (1)

**Data Analytics** (9): DuckDB Skills (9)

**DevOps Cloud** (27): Cloudflare (19); Sentry (8)

**Databases** (5): Supabase (2); Neon (1); Supabase Agent Skills (2)

**Security** (81): Trail of Bits Skills (80); SkillSpector (1)

**Productivity** (33): Notion (12); Slack (8); Atlassian (13)

**Creative Media** (28): Remotion Skills (13); Anthropic Creative Skills (5); HyperFrames (9); Lemo-Opuscar (1)

**AI Models** (25): Hugging Face Skills (25)

**Web Design** (88): Frontend Design (1); Web Artifacts Builder (1); GSAP Skills (8); Taste Skill (1); Impeccable (1); UI Skills (9); UI UX Pro Max (1); Vercel Agent Skills (9); Web Quality Skills (6); Modern Web Guidance (1); Threejs Skills (13); Figma MCP (16); Superdesign (1); Watermelon UI (2); Web Asset Generator (1); Emil Kowalski Design Skills (17)

**Marketing** (53): Marketing Skills (53)

**Memory Context** (1): Graphify (1)
