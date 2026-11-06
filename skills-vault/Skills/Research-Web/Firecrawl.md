---
tags: [server, research-web]
category: Research-Web
source: https://github.com/firecrawl/firecrawl-mcp-server
license: MIT
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Firecrawl

Scrape and crawl sites into clean markdown.

## What it does
- Scrape, crawl, map, search and extract structured data from websites.

## Install
```
/plugin install firecrawl@claude-plugins-official
# or
claude mcp add firecrawl -e FIRECRAWL_API_KEY=fc-... -- npx -y firecrawl-mcp
```
Scan first: `skillspector scan https://github.com/firecrawl/firecrawl-mcp-server --no-llm`

## Usage
- *"Crawl these 3 competitor sites and summarise their pricing."*

## Caveats/risks
- Needs a Firecrawl API key; paid beyond free credits.
- Respect sites' terms and robots.txt.

**Verdict: APPROVE** (2026-11-06). Official Firecrawl. Read README and config: standard API client.

## Links
- Repo: https://github.com/firecrawl/firecrawl-mcp-server
- Category: [[Categories/Research-Web|Research-Web]] · [[Home]]
