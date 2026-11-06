---
tags: [plugin, coding-workflow]
category: Coding-Workflow
source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins
license: Apache-2.0
type: plugin
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# LSP Plugins

Real language servers: go-to-definition, errors, references.

## What it does
- typescript-lsp, pyright-lsp, gopls-lsp, rust-analyzer-lsp, clangd, jdtls, kotlin, swift, php, ruby, lua, csharp.

## Install
```
/plugin install typescript-lsp@claude-plugins-official
/plugin install pyright-lsp@claude-plugins-official
```
Scan first: `skillspector scan https://github.com/anthropics/claude-plugins-official --no-llm`

## Usage
- Claude uses them automatically for diagnostics and navigation.

## Caveats/risks
- Needs the language server installed on your computer (e.g. `npm i -g typescript-language-server typescript`).

**Verdict: APPROVE** (2026-11-06). Official Anthropic plugins. Config only.

## Links
- Repo: https://github.com/anthropics/claude-plugins-official/tree/main/plugins
- Category: [[Categories/Coding-Workflow|Coding-Workflow]] · [[Home]]
