#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${KRDS_REPO_URL:-https://github.com/SimpleScaffold/ss-design-krds.git}"
INSTALL_DIR="${KRDS_INSTALL_DIR:-.krds}"
SKILLS_DIR="${KRDS_SKILLS_DIR:-$HOME/.cursor/skills}"

echo "=== ss-design-krds installer ==="
echo ""

# 1. Git submodule
if [ -d "$INSTALL_DIR" ]; then
  echo "[skip] $INSTALL_DIR already exists"
else
  echo "[1/3] Adding git submodule at $INSTALL_DIR ..."
  git submodule add "$REPO_URL" "$INSTALL_DIR" 2>/dev/null || {
    echo "  Submodule add failed (maybe not in git repo). Cloning instead..."
    git clone --depth 1 "$REPO_URL" "$INSTALL_DIR"
  }
fi

# 2. Skills copy
echo "[2/3] Copying skills to $SKILLS_DIR ..."
mkdir -p "$SKILLS_DIR"
cp -R "$INSTALL_DIR/skills/krds-"* "$SKILLS_DIR/" 2>/dev/null || cp -R skills/krds-* "$SKILLS_DIR/"
echo "  Installed: krds-plan, krds-transform, krds-improve"

# 3. npm scripts hint
echo "[3/3] Add to your package.json:"
cat <<'EOF'
  "devDependencies": {
    "ss-design-krds": "github:SimpleScaffold/ss-design-krds"
  },
  "scripts": {
    "krds:score": "node node_modules/ss-design-krds/scripts/krds-similarity.mjs --target ./public/index.html"
  }
EOF

echo ""
echo "Done. Add templates/consumer-CLAUDE.md.snippet to your CLAUDE.md"
echo "Validate: node $INSTALL_DIR/scripts/krds-similarity.mjs --target <page.html>"
