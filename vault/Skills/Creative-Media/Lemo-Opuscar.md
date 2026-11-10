---
tags: [plugin, video, creative]
source: https://github.com/lemomo-ai/lemo-opuscar
license: MIT
type: plugin
risk: caution
category: Creative-Media
verdict: CAUTION
vetted: 2026-11-06
installed: no
---
# Lemo-Opuscar

Short films made entirely in code, in 43+ named styles (newer "OPUSCAR 98" set has 98).

## What it does
- You ask for a video/explainer/promo in a style (oil painting, ukiyo-e, satellite briefing, product teardown…). It writes the treatment, then builds and renders the film.
- Can make explainers from real material (satellite images, CAD, archive scans) and re-cut archive footage.
- You can tweak a style or make your own (saved in `~/lemo-my-styles/`).
- Tuned for Opus 5.5.

## Install
```bash
claude plugin marketplace add lemomo-ai/lemo-opuscar
claude plugin install lemo-opuscar@lemolab
```
Needs **Node 20+, ffmpeg 7+, Python 3.11+** on your computer first.

## Usage
Just ask: *"Make a 30-second ukiyo-e explainer about how tides work."*
Or start it with no request and it asks your language, then offers ways in.

## Caveats/risks
- First run: `setup.sh` clones its library to `~/lemo-opuscar` and installs Node/Python packages (a few minutes). `deps voice` / `deps music` add more.
- Styles may install extra packages into the project folder.
- Rendering is heavy on CPU and disk.
- Vetted: SKILL.md and `scripts/setup.sh` are benign. It only clones its own library and installs packages.

**Verdict: CAUTION** (2026-11-06).
## Links
- Repo: https://github.com/lemomo-ai/lemo-opuscar
- Copies: [[Skills/Creative-Media/Lemo-Opuscar/lemo-opuscar.SKILL|SKILL.md]] · `Skills/Creative-Media/Lemo-Opuscar/setup.sh.txt`
- Category: [[Categories/Creative-Media|Creative-Media]] · [[Home]]
