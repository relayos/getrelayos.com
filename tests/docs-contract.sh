#!/bin/sh
set -eu

test -s README.md
test -s .woodpecker.yml
test -s docs/presales-offering-evidence.md

grep -F '## BLUF' README.md
grep -F '## Reader Paths' README.md
grep -F '## Stack Shape' README.md
grep -F '## Local Development' README.md
grep -F '## Deployment Boundary' README.md
grep -F '## Change Checklist' README.md
grep -F '## Agent Contract' README.md

grep -F '[`pages/`](pages/)' README.md
grep -F '[`components/`](components/)' README.md
grep -F '[`wordpress/themes/relayos/`](wordpress/themes/relayos/)' README.md
grep -F '[`Dockerfile.nextjs`](Dockerfile.nextjs)' README.md
test -s wordpress/themes/relayos/README.md
grep -F '## BLUF' wordpress/themes/relayos/README.md
grep -F '## What This Theme Owns' wordpress/themes/relayos/README.md
grep -F '## Change Path' wordpress/themes/relayos/README.md
grep -F '## Runtime Boundary' wordpress/themes/relayos/README.md
grep -F '## Agent Contract' wordpress/themes/relayos/README.md
grep -F 'POST /wp-json/relayos/v1/contact' wordpress/themes/relayos/README.md
grep -F 'relayos/relayos-deploy' wordpress/themes/relayos/README.md
grep -F 'POST /wp-json/relayos/v1/signup' wordpress/themes/relayos/README.md
grep -F 'npm run lint' wordpress/themes/relayos/README.md
grep -F 'npm run build' wordpress/themes/relayos/README.md
grep -F 'npm test' wordpress/themes/relayos/README.md

grep -F 'npm run lint' README.md
grep -F 'npm run build' README.md
grep -F 'npm test' README.md
grep -F 'infra-registry selects the deployed image revision' README.md
grep -F 'GitOps path' README.md
grep -F '[RelayOS deploy stack](https://github.com/relayos/relayos-deploy)' README.md
grep -F '[IRC operator config repo](https://github.com/relayos/relayos-irc-config)' README.md
grep -F '[infra-registry](https://gitea.i.cyberstorm.dev/relaxgg/infra-registry)' README.md
grep -F '[presales offering evidence](docs/presales-offering-evidence.md)' README.md
grep -F 'ghcr.io/relayos/getrelayos.com' README.md
grep -F 'infra-registry selects the deployed image revision' README.md
grep -F '# RelayOS public offering evidence' docs/presales-offering-evidence.md
grep -F 'RelayBNC' docs/presales-offering-evidence.md
grep -F 'persistent IRC connection' docs/presales-offering-evidence.md
grep -Fi 'offline direct messages' docs/presales-offering-evidence.md
grep -F 'https://github.com/relayos/relayos-deploy/blob/main/' docs/presales-offering-evidence.md
grep -F 'KiwiIRC' docs/presales-offering-evidence.md
grep -F 'RelayBNC release interest' pages/contact.tsx
grep -F '/wp-json/relayos/v1/contact' pages/contact.tsx
grep -F 'not a purchase' pages/contact.tsx
test -s pages/teams.tsx
grep -F 'For organizations' pages/teams.tsx
grep -F 'Each tenant has its own WordPress site, IRC services, browser IRC, and BNC boundary.' pages/teams.tsx
grep -F 'not an automated signup or purchase flow' pages/teams.tsx
grep -F 'href="/teams"' pages/solutions.tsx
! rg -F 'relayos_interest' wordpress/themes/relayos/functions.php
! rg -F 'relayos_handle_contact_form' wordpress/themes/relayos/functions.php
expected_clone='clone:
  git:
    image: woodpeckerci/plugin-git
    settings:
      recursive: false'
actual_clone="$(awk '/^clone:$/ { capture=1 } /^steps:$/ { capture=0 } capture { print }' .woodpecker.yml | sed '/^$/d')"
test "$actual_clone" = "$expected_clone"
grep -F 'build-site-image:' .woodpecker.yml
grep -F 'publish-site-image:' .woodpecker.yml
grep -F 'repo: ghcr.io/relayos/getrelayos.com' .woodpecker.yml
grep -F 'dry_run: true' .woodpecker.yml
grep -F 'branch: [main]' .woodpecker.yml
grep -F 'from_secret: ghcr_username' .woodpecker.yml
grep -F 'from_secret: ghcr_token' .woodpecker.yml
grep -F 'sha-${CI_COMMIT_SHA:0:7}' .woodpecker.yml

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

for doc in [
    root / "wordpress/themes/relayos/README.md",
    root / "docs/presales-offering-evidence.md",
]:
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
! rg -F 'RelayOS Connect' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'RelayOS Embed' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'RelayOS Integrate' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'RelayOS Persist' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'RelayOS Communities' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'Start Free Trial' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F '99.99%' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'What Our Customers Say' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'relayos-api-example.js' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -i -F 'millions of' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'Series A' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'Founded in 2020' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
! rg -F 'TechCorp' . --glob '!node_modules/**' --glob '!tests/**' --glob '!docs/**'
