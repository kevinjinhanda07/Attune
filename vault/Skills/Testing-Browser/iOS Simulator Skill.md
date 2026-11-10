---
tags: [skill, testing-browser]
category: Testing-Browser
source: https://github.com/conorluddy/ios-simulator-skill
license: MIT
type: skill
risk: low
verdict: APPROVE
vetted: 2026-11-06
installed: no
---
# iOS Simulator Skill

Build, run and tap through iPhone apps in the Simulator.

## What it does
- 30 scripts: build Xcode projects, launch on a simulator, navigate by accessibility label, screenshots, logs.

## Install
```
/plugin marketplace add conorluddy/ios-simulator-skill
/plugin install ios-simulator-skill@conorluddy
```
Scan first: `skillspector scan https://github.com/conorluddy/ios-simulator-skill --no-llm`

## Usage
- *"Build the app, open it in the iPhone 16 simulator and test login."*

## Caveats/risks
- **Mac only** (needs Xcode). Won't work in cloud sessions.

**Verdict: APPROVE** (2026-11-06). Read SKILL.md and scripts: local `xcrun simctl`/`xcodebuild` wrappers, no network.

## Links
- Repo: https://github.com/conorluddy/ios-simulator-skill
- Copies: [[Skills/Testing-Browser/iOS Simulator Skill/ios-simulator-skill.SKILL|ios-simulator-skill]]
- Category: [[Categories/Testing-Browser|Testing-Browser]] · [[Home]]
