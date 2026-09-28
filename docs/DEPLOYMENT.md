# Deployment status and handoff

Status: local static prototype. No live deployment has been verified or created
by this recovery. The closed issue named `Stake-referrals.github.io` does not
establish a hostname or a successful release. The repository had no deployment
workflow and no recorded GitHub Actions runs at inspection.

## Technical characteristics

- Entry point: `index.html`.
- Assets: `assets/css/styles.css` and `assets/js/main.js`.
- Build command: none. Runtime server application: none.
- Runtime environment variables and secrets: none.
- Asset paths are relative and support a subdirectory base path.
- Local development uses Python's HTTP server; this is not production hosting.

## Information needed for an accountable release

| Field | Current value |
| --- | --- |
| Hosting service and owner | Unconfirmed |
| Publishing branch / directory | Unconfirmed |
| Canonical public URL | Unconfirmed |
| Custom domain and DNS owner | Unconfirmed |
| HTTPS verification date | Not verified |
| Released commit / deployment ID | None established |
| Previous working deployment | None established |

Record actual evidence here rather than guessing a URL from the repository name.
Keep credentials out of the repository. Resolving the inherited content issues in
RECOVERY.md is separate from verifying the technical files.

## Rollback record

For any future approved release, record the released commit and the previous
working deployment before changing hosting. Prefer the host's previous-version
restore mechanism. For source changes, revert the relevant commit on a new branch
and review the result; do not force-push shared history. Re-check the page and asset
URLs after a rollback. The pre-recovery commit lacks `index.html` and should not be
mistaken for a known-working deployed version.
