---
tags: [server, devops-cloud]
category: DevOps-Cloud
source: https://github.com/awslabs/mcp
license: Apache-2.0
type: server
risk: caution
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# AWS MCP Servers

Official AWS MCP servers: docs knowledge + AWS API access.

## What it does
- `knowledge-mcp` (remote, no credentials): AWS docs and guidance.
- `aws-api-mcp-server`: runs AWS CLI calls with your credentials.

## Install
```
claude mcp add --transport http aws-knowledge https://knowledge-mcp.global.api.aws
claude mcp add aws-api -e AWS_REGION=us-east-1 -- uvx awslabs.aws-api-mcp-server@latest
```
Scan first: `skillspector scan https://github.com/awslabs/mcp --no-llm`

## Usage
- *"How should I set up S3 + CloudFront for a static site?"*

## Caveats/risks
- API server acts with your AWS credentials: **use a read-only IAM role** first.
- Start with the knowledge server only.

**Verdict: CAUTION** (2026-11-06). Official AWS Labs. Read README and 7 SKILL.md files: clean. Caution = real cloud access.

## Links
- Repo: https://github.com/awslabs/mcp
- Category: [[Categories/DevOps-Cloud|DevOps-Cloud]] · [[Home]]
