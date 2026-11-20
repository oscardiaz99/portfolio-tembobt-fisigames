# Public portfolio security scope

This repository is assembled from an explicit list of source excerpts and newly written demonstration files. It is not a clone or export of the original repositories.

## Publication rules

- Do not commit environment files, local authorization files, browser profiles, cookies, private keys, OBS exports, production settings, SQL dumps, backup archives or customer data.
- Do not place credentials in frontend code, screenshots, URLs, README examples or commit messages.
- The demo requires no credentials and makes no external API calls. Its API is loopback-only and does not publish content or start broadcasts.
- Use `python scripts/check_publication.py` before committing. It checks the publishable file list, key signatures, credential assignments and accidental private paths. It prints finding locations, never matched values.
- Gitleaks is run separately before first publication. Scanner results reduce risk but are not a mathematical proof of absence of every possible secret.
- `docs/provenance.md` records hashes and relative source labels only. No machine paths or private source history are included.

## Limits

The API is an educational preview endpoint, not a production authentication implementation. No browser extension, account login or broadcasting permissions are needed. Do not expose the demo API to a public network without a separate security design.

If a genuine secret is later discovered, revoke or rotate it at its provider; deleting the current file alone does not remove it from Git history. Report a possible leak privately, without quoting a secret in a public issue.

## Images

The only reviewed image is `public/images/postiz-review.jpg`: a cropped real header with no pending content or account configuration. Binary images require manual visual review; pattern scanners cannot certify visible text in images. Do not add screenshots of private records or credential-bearing URLs.
