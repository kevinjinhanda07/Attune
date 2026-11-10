#!/usr/bin/env bash
# Copy skills from this export into Claude Code's personal skills folder (~/.claude/skills).
# Usage:  ./install-to-claude-code.sh                 -> lists categories
#         ./install-to-claude-code.sh Web-Design Marketing   -> installs those categories
#         ./install-to-claude-code.sh ALL             -> installs everything (not recommended: 400+ skills)
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
dest="${CLAUDE_CONFIG_DIR:-$HOME/.claude}/skills"
if [ $# -eq 0 ]; then
  echo "Categories:"; for c in "$here"/skills/*/; do echo "  $(basename "$c") ($(find "$c" -name SKILL.md | wc -l | tr -d ' ') skills)"; done
  echo "Run: $0 <Category> [Category...]   or   $0 ALL"; exit 0
fi
[ "$1" = "ALL" ] && set -- $(ls "$here/skills")
mkdir -p "$dest"
for cat in "$@"; do
  [ -d "$here/skills/$cat" ] || { echo "No category: $cat" >&2; exit 1; }
  for skill in "$here"/skills/"$cat"/*/*/; do
    name="$(basename "$skill")"
    if [ -e "$dest/$name" ]; then echo "skip (exists): $name"; continue; fi
    cp -R "$skill" "$dest/$name" && echo "installed: $name"
  done
done
echo "Done. Restart Claude Code to load the skills."
