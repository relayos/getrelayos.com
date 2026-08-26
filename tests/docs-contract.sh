#!/bin/sh
set -eu

test -s README.md

grep -F '## BLUF' README.md
grep -F '## Reader Paths' README.md
grep -F '## Stack Shape' README.md
grep -F '## Local Development' README.md
grep -F '## Deployment Boundary' README.md
grep -F '## Change Checklist' README.md
grep -F '## Agent Contract' README.md

grep -F '[`pages/`](pages/)' README.md
grep -F '[`components/`](components/)' README.md
grep -F '[`lib/data.ts`](lib/data.ts)' README.md
grep -F '[`wordpress/themes/relayos/`](wordpress/themes/relayos/)' README.md
grep -F '[`Dockerfile.nextjs`](Dockerfile.nextjs)' README.md
test -s wordpress/themes/relayos/README.md
grep -F '## BLUF' wordpress/themes/relayos/README.md
grep -F '## What This Theme Owns' wordpress/themes/relayos/README.md
grep -F '## Change Path' wordpress/themes/relayos/README.md
grep -F '## Runtime Boundary' wordpress/themes/relayos/README.md
grep -F '## Agent Contract' wordpress/themes/relayos/README.md
grep -F 'POST /wp-json/relayos/v1/contact' wordpress/themes/relayos/README.md
grep -F 'POST /wp-json/relayos/v1/signup' wordpress/themes/relayos/README.md
grep -F 'npm run lint' wordpress/themes/relayos/README.md
grep -F 'npm run build' wordpress/themes/relayos/README.md
grep -F 'npm test' wordpress/themes/relayos/README.md

grep -F 'npm run lint' README.md
grep -F 'npm run build' README.md
grep -F 'npm test' README.md
grep -F 'deployment registry' README.md
grep -F 'GitOps path' README.md

python3 - <<'PY'
from pathlib import Path
import re

root = Path.cwd()
link_re = re.compile(r"\[[^\]]+\]\(([^)]+)\)")

for target in link_re.findall((root / "README.md").read_text(encoding="utf-8")):
    if target.startswith(("http://", "https://", "mailto:")):
        continue
    path, _, _anchor = target.partition("#")
    if not path:
        continue
    resolved = (root / path).resolve()
    if not resolved.exists():
        raise SystemExit(f"README.md links missing path: {target}")

for doc in [root / "wordpress/themes/relayos/README.md"]:
    for target in link_re.findall(doc.read_text(encoding="utf-8")):
        if target.startswith(("http://", "https://", "mailto:")):
            continue
        path, _, _anchor = target.partition("#")
        if not path:
            continue
        resolved = (doc.parent / path).resolve()
        if not resolved.exists():
            raise SystemExit(f"{doc.relative_to(root)} links missing path: {target}")
PY

! grep -E '(password|token|secret)[[:space:]]*=' README.md
! grep -E '(password|token|secret)[[:space:]]*=' wordpress/themes/relayos/README.md
! grep -F 'self-deploy.sh' README.md
