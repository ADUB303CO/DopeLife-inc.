# DopeLife-inc.

A recovered static landing-page project originally committed in December 2025.
The legacy content describes a Stake referral page. This recovery maintains and
documents the existing code; it does not independently verify offers, endorsements,
external destinations, or eligibility claims. The owner reported reviewing these
claims on October 17, 2026.

**Hosted page:** https://dopelife-inc.shipstatic.com

**Publishing:** The page is a publicly hosted static snapshot, not an automatic
deployment from GitHub. See [deployment instructions](docs/DEPLOYMENT.md) for the
exact published source commit, manual redeployment, and rollback procedure.

## Quick start

Requirements: Git, Python 3, and a modern browser. There is no build step, package
installation, backend, database, environment file, or API key.

```sh
git clone https://github.com/ADUB303CO/DopeLife-inc..git dopelife
cd dopelife
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Stop the server with Ctrl+C. The Python server is for
local development only. The recovered site is now on `master`. The two dots in the clone URL are
intentional: the repository name ends with a dot.

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
- The published ShipStatic snapshot is manually updated; GitHub commits alone do not change it.
- No license was present in the original repository; no license is assumed here.

Read [recovery status](docs/RECOVERY.md), [maintenance](docs/MAINTENANCE.md), and
[deployment instructions](docs/DEPLOYMENT.md) before treating this prototype as released.
The structural recovery was merged on 2026-10-17 via PR #2; publishing requires
an external hosting configuration, which has not been verified or completed.
