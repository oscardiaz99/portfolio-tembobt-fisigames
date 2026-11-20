# Verification record

Date: 2026-11-19. Scope: this public portfolio candidate only.

| Check | Result | Limit |
|---|---|---|
| `npm test` | 7 passing tests | Metadata transformation and local HTTP contract |
| `npm run build` | Production bundle generated | Does not validate original deployments |
| `npm audit --omit=dev --audit-level=high` | No reported production dependency vulnerabilities | Registry advisory results at review time only |
| `python scripts/check_publication.py` | No findings | Pattern-based and file-policy checks |
| Gitleaks 8.30.1 directory scan | No findings in the explicit publication candidate | No guarantee against every possible secret format |
| Original local authorization comparison | Authorization value absent from publication text | Private value was compared locally, never copied to the portfolio |
| Source identity | 4/4 selected files match original local bytes | See SHA-256 values in provenance |
| Browser interaction | React form received metadata JSON from the local API; duplicate hashtag removed | Local demonstration, no platform account access |

The source excerpts retain Next.js `use client` directives. Vite reports that these directives are ignored in this client-only demo; this is expected and does not convert the excerpts into server components.

The secret review excludes private source repositories and their history from publication entirely. Only the reviewed portfolio files are intended for the new public repository. No claim is made that the private source history has been audited.
