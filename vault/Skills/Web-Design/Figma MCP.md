---
tags: [server, web-design]
category: Web-Design
source: https://github.com/figma/mcp-server-guide
license: MIT
type: server
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# Figma MCP

Official Figma MCP: design context, variables, code from frames.

## What it does
- Pull layout, tokens/variables, components and screenshots from Figma into code.
- Ships 30+ skills (design-to-code, Code Connect, tokens).

## Install
```
/plugin install figma@claude-plugins-official
# or
claude mcp add --transport http figma https://mcp.figma.com/mcp
```
Scan first: `skillspector scan https://github.com/figma/mcp-server-guide --no-llm`

## Usage
- *"Implement this Figma frame: <link>"*

## Caveats/risks
- OAuth to Figma; some features need a paid Dev/Full seat.
- Community alternative: GLips/Figma-Context-MCP (Framelink), less updated since Jun 2026.

**Verdict: APPROVE** (2026-11-06). Official Figma. Read README and sample SKILL.md files: instructions only.

## Links
- Repo: https://github.com/figma/mcp-server-guide
- Copies: [[Skills/Web-Design/Figma MCP/figma-code-connect.SKILL|figma-code-connect]] · [[Skills/Web-Design/Figma MCP/figma-code-workflows.SKILL|figma-code-workflows]] · [[Skills/Web-Design/Figma MCP/figma-create-new-file.SKILL|figma-create-new-file]] · [[Skills/Web-Design/Figma MCP/figma-design-to-code.SKILL|figma-design-to-code]] · [[Skills/Web-Design/Figma MCP/figma-generate-design.SKILL|figma-generate-design]] · [[Skills/Web-Design/Figma MCP/figma-generate-diagram.SKILL|figma-generate-diagram]] · [[Skills/Web-Design/Figma MCP/figma-generate-library.SKILL|figma-generate-library]] · [[Skills/Web-Design/Figma MCP/figma-generative-plugins.SKILL|figma-generative-plugins]] · [[Skills/Web-Design/Figma MCP/figma-implement-motion.SKILL|figma-implement-motion]] · [[Skills/Web-Design/Figma MCP/figma-shaders.SKILL|figma-shaders]] · [[Skills/Web-Design/Figma MCP/figma-spec.SKILL|figma-spec]] · [[Skills/Web-Design/Figma MCP/figma-swiftui.SKILL|figma-swiftui]]
- Category: [[Categories/Web-Design|Web-Design]] · [[Home]]
