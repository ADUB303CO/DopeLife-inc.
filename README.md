# DopeLife-inc.

A recovered static landing-page prototype originally committed in December 2025.
The legacy content describes a Stake referral page. This recovery documents and
maintains the existing code; it does not verify its offers, endorsements, external
destinations, or eligibility claims. It is not a production release.

## Quick start

Requirements: Git, Python 3, and a modern browser. There is no build step, package
installation, backend, database, environment file, or API key.

```sh
git clone https://github.com/ADUB303CO/DopeLife-inc..git dopelife
cd dopelife
# Until the recovery pull request is merged:
git switch recovery/static-site-maintenance-2026-09-28
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Stop the server with Ctrl+C. The Python server is for
local development only. After the recovery is merged, use `master` instead of the
recovery branch. The two dots in the clone URL are intentional: the repository
name ends with a dot.

## Files and responsibilities

| File | Purpose |
| --- | --- |
| `index.html` | Semantic page structure and inherited content |
| `assets/css/styles.css` | Layout, responsive styles, focus states, motion preferences |
| `assets/js/main.js` | Optional, one-time viewport animations; no tracking or requests |
| `docs/RECOVERY.md` | Historical evidence, completed recovery work, unresolved items |
| `docs/DEPLOYMENT.md` | Hosting status, release evidence and rollback requirements |
| `docs/MAINTENANCE.md` | Editing guidance and repeatable verification checklist |

Keep asset paths relative (`./assets/...`) so local preview and hosting below a
URL subdirectory both work. Edit content in HTML and styling in CSS. JavaScript
must never be necessary to read the page or follow a link. No framework is needed.

## Current limitations

- Legacy marketing text and outbound links are inherited, unverified material.
- There are no signups, authentication, visit counters, geofencing, or analytics.
- The external placeholder image has been replaced by a local CSS gradient.
- A working local page does not establish that any public deployment exists.
- No license was present in the original repository; no license is assumed here.

Read [recovery status](docs/RECOVERY.md), [maintenance](docs/MAINTENANCE.md), and
[deployment status](docs/DEPLOYMENT.md) before treating this prototype as released.
