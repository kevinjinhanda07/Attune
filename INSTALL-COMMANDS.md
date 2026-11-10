# Install commands for every tool

Use these in Claude Code on the new account. This is the *proper* install for plugins and MCP servers (Playwright, GitHub, Figma, Supabase…), which can't be moved as plain folders. The official marketplace may need: `/plugin marketplace add anthropics/claude-plugins-official`.

Scan anything new first: `skillspector scan <repo URL> --no-llm`.

## Official

**Claude API Skill** (APPROVE)
```
/plugin marketplace add anthropics/skills
/plugin install claude-api@anthropic-agent-skills
```

**MCP Builder** (APPROVE)
```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```

**Skill Creator** (APPROVE)
```
/plugin install skill-creator@claude-plugins-official
```

## Coding Workflow

**Code Review Plugin** (APPROVE)
```
/plugin install code-review@claude-plugins-official
```

**Code Simplifier** (APPROVE)
```
/plugin install code-simplifier@claude-plugins-official
```

**Commit Commands** (APPROVE)
```
/plugin install commit-commands@claude-plugins-official
```

**Feature Dev** (APPROVE)
```
/plugin install feature-dev@claude-plugins-official
```

**Hookify** (APPROVE)
```
/plugin install hookify@claude-plugins-official
```

**LSP Plugins** (APPROVE)
```
/plugin install typescript-lsp@claude-plugins-official
/plugin install pyright-lsp@claude-plugins-official
```

**Matt Pocock Skills** (APPROVE)
```
/plugin install mattpocock-skills@claude-plugins-official
```

**Ponytail** (APPROVE)
```
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

**PR Review Toolkit** (APPROVE)
```
/plugin install pr-review-toolkit@claude-plugins-official
```

**Ralph Loop** (CAUTION)
```
/plugin install ralph-loop@claude-plugins-official
```

**Superpowers** (APPROVE)
```
/plugin install superpowers@claude-plugins-official
(If the official marketplace is missing: `/plugin marketplace add anthropics/claude-plugins-official`.)
```

## Testing Browser

**Chrome DevTools MCP** (APPROVE)
```
/plugin install chrome-devtools-mcp@claude-plugins-official
# or
/plugin marketplace add ChromeDevTools/chrome-devtools-mcp
/plugin install chrome-devtools-mcp@chrome-devtools-plugins
```

**iOS Simulator Skill** (APPROVE)
```
/plugin marketplace add conorluddy/ios-simulator-skill
/plugin install ios-simulator-skill@conorluddy
```

**Playwright MCP** (APPROVE)
```
/plugin install playwright@claude-plugins-official
# or
claude mcp add playwright npx @playwright/mcp@latest
```

**Webapp Testing** (APPROVE)
```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```

## Research Web

**Agent Reach** (CAUTION)
```
Tell Claude Code: Install Agent Reach: https://raw.githubusercontent.com/Panniantong/Agent-Reach/main/docs/install.md
```

**Brave Search MCP** (APPROVE)
```
claude mcp add brave-search -e BRAVE_API_KEY=... -- npx -y @brave/brave-search-mcp-server --transport stdio
```

**Context7** (APPROVE)
```
/plugin install context7@claude-plugins-official
```

**Exa Search** (APPROVE)
```
/plugin install exa@claude-plugins-official
```

**Find Skills** (CAUTION)
```
npx skills add vercel-labs/skills --skill find-skills
```

**Firecrawl** (APPROVE)
```
/plugin install firecrawl@claude-plugins-official
# or
claude mcp add firecrawl -e FIRECRAWL_API_KEY=fc-... -- npx -y firecrawl-mcp
```

**MCP Reference Servers** (APPROVE)
```
claude mcp add fetch -- uvx mcp-server-fetch
claude mcp add memory -- npx -y @modelcontextprotocol/server-memory
claude mcp add seq-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
```

## Docs Writing

**Doc Coauthoring and Internal Comms** (APPROVE)
```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```

**Document Skills** (APPROVE)
```
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
```

**Frontend Slides** (APPROVE)
```
/plugin marketplace add https://github.com/zarazhangrui/frontend-slides
/plugin install frontend-slides@frontend-slides
```

## Data Analytics

**dbt MCP** (APPROVE)
```
claude mcp add dbt -- uvx dbt-mcp
```

**DuckDB Skills** (APPROVE)
```
/plugin install duckdb-skills@claude-plugins-official
```

## DevOps Cloud

**AWS MCP Servers** (CAUTION)
```
claude mcp add --transport http aws-knowledge https://knowledge-mcp.global.api.aws
claude mcp add aws-api -e AWS_REGION=us-east-1 -- uvx awslabs.aws-api-mcp-server@latest
```

**Azure** (CAUTION)
```
/plugin install azure@claude-plugins-official
```

**Cloudflare** (APPROVE)
```
/plugin install cloudflare@claude-plugins-official
claude mcp add --transport http cf-docs https://docs.mcp.cloudflare.com/mcp
```

**Grafana MCP** (APPROVE)
```
/plugin install grafana-mcp@claude-plugins-official
```

**Kubernetes MCP** (CAUTION)
```
claude mcp add kubernetes -- npx -y kubernetes-mcp-server@latest --read-only
```

**Sentry** (APPROVE)
```
/plugin install sentry@claude-plugins-official
```

**Terraform MCP** (APPROVE)
```
/plugin install terraform@claude-plugins-official
```

**Vercel Plugin** (CAUTION)
```
/plugin install vercel@claude-plugins-official
```

## Databases

**MCP Toolbox for Databases** (APPROVE)
```
npx @toolbox-sdk/server --config tools.yaml
# then: claude mcp add toolbox ... (see README)
```

**Neon** (APPROVE)
```
/plugin install neon@claude-plugins-official
```

**Supabase** (CAUTION)
```
/plugin install supabase@claude-plugins-official
```

**Supabase Agent Skills** (APPROVE)
```
npx skills add supabase/agent-skills
```

## Security

**Claude Security** (APPROVE)
```
/plugin install claude-security@claude-plugins-official
```

**Security Guidance** (APPROVE)
```
/plugin install security-guidance@claude-plugins-official
```

**Semgrep** (CAUTION)
```
/plugin install semgrep@claude-plugins-official
```

**SkillSpector** (APPROVE)
```
uv tool install git+https://github.com/NVIDIA/skillspector.git
```

**Trail of Bits Skills** (APPROVE)
```
/plugin marketplace add trailofbits/skills
/plugin install differential-review@trailofbits
/plugin install insecure-defaults@trailofbits
/plugin install supply-chain-risk-auditor@trailofbits
```

## Memory Context

**Basic Memory** (APPROVE)
```
uv tool install basic-memory --prerelease=allow
claude mcp add basic-memory -- uvx --prerelease=allow basic-memory mcp
```

**CLAUDE-md Management** (APPROVE)
```
/plugin install claude-md-management@claude-plugins-official
```

**Claude-Mem** (CAUTION)
```
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem@thedotmack
```

**Graphify** (CAUTION)
```
uv tool install graphifyy      # note: double y
graphify install               # registers the skill for Claude Code
```

## Productivity

**Atlassian** (APPROVE)
```
/plugin install atlassian@claude-plugins-official
```

**GitHub MCP** (APPROVE)
```
/plugin install github@claude-plugins-official
# needs GITHUB_PERSONAL_ACCESS_TOKEN in your environment
```

**Google Workspace MCP** (CAUTION)
```
claude mcp add google -- uvx workspace-mcp --tool-tier core
```

**Linear** (APPROVE)
```
/plugin install linear@claude-plugins-official
```

**Notion** (APPROVE)
```
/plugin install notion@claude-plugins-official
```

**Slack** (APPROVE)
```
/plugin install slack@claude-plugins-official
```

## Creative Media

**Anthropic Creative Skills** (APPROVE)
```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```

**HyperFrames** (CAUTION)
```
/plugin install hyperframes@claude-plugins-official
# or
/plugin marketplace add heygen-com/hyperframes
/plugin install hyperframes@hyperframes
```

**Lemo-Opuscar** (CAUTION)
```
claude plugin marketplace add lemomo-ai/lemo-opuscar
claude plugin install lemo-opuscar@lemolab
```

**Remotion Skills** (APPROVE)
```
npx skills add remotion-dev/skills
```

## AI Models

**FreeLLMAPI** (CAUTION)
```
npx freellmapi setup-claude --url http://localhost:3001 --api-key <key>   # see vault note first
```

**Hugging Face Skills** (APPROVE)
```
/plugin install huggingface-skills@claude-plugins-official
```

## Marketing

**Marketing Skills** (APPROVE)
```
npx skills add coreyhaines31/marketingskills --list
npx skills add coreyhaines31/marketingskills --skill cro copywriting seo-audit
```

## Web Design

**Emil Kowalski Design Skills** (APPROVE)
```
npx skills add emilkowalski/skills
```

**Figma MCP** (APPROVE)
```
/plugin install figma@claude-plugins-official
# or
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

**Frontend Design** (APPROVE)
```
/plugin install frontend-design@claude-plugins-official
```

**GSAP Skills** (APPROVE)
```
/plugin marketplace add greensock/gsap-skills
/plugin install gsap-skills@gsap-skills
```

**Impeccable** (APPROVE)
```
/plugin marketplace add pbakaus/impeccable
/plugin install impeccable@impeccable
```

**Modern Web Guidance** (APPROVE)
```
/plugin install modern-web-guidance@claude-plugins-official
# or
/plugin marketplace add GoogleChrome/modern-web-guidance
/plugin install modern-web-guidance@googlechrome
```

**Superdesign** (CAUTION)
```
/plugin marketplace add superdesigndev/superdesign-skill
/plugin install superdesign@superdesign
```

**Taste Skill** (APPROVE)
```
/plugin marketplace add Leonxlnx/taste-skill
/plugin install taste-skill@taste-skill
```

**Threejs Skills** (CAUTION)
```
npx skills add CloudAI-X/threejs-skills
```

**UI Skills** (APPROVE)
```
npx skills add ibelick/ui-skills
# browse first: npx ui-skills list
```

**UI UX Pro Max** (APPROVE)
```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

**Vercel Agent Skills** (APPROVE)
```
npx skills add vercel-labs/agent-skills
```

**Watermelon UI** (APPROVE)
```
claude mcp add --transport http watermelon https://mcp.watermelon.sh/mcp
npx skills add WatermelonCorp/watermelon-platform
```

**Web Artifacts Builder** (APPROVE)
```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
```

**Web Asset Generator** (APPROVE)
```
/plugin marketplace add alonw0/web-asset-generator
/plugin install web-asset-generator@web-asset-generator-marketplace
```

**Web Quality Skills** (APPROVE)
```
/plugin marketplace add addyosmani/web-quality-skills
/plugin install web-quality-skills@addy-web-quality-skills
```
