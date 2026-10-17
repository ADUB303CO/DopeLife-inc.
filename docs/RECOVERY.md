# Recovery record

Inspection baseline: `master` at `d419ea32a58c8bbd86e12eb5674576fdca73fa93`.
Dates below use UTC, matching the GitHub API.

## What survived

- `23006f08056bbc847d5e7528d4ebe1ddbd7d6ff8` (2019-10-22): initial README.
- `573ecd32292f4c2e724638be1c0aa6a15822d835` (2025-12-03 04:31 UTC): added
  the 369-line `landing page ` file, including the trailing space and no extension.
  This timestamp was December 2 at 21:31 in Denver.
- Issue #1, `Stake-referrals.github.io`, was opened and closed on December 3.
  Its body says only `Stake referral landing page`; it is not deployment evidence.
- `d419ea32a58c8bbd86e12eb5674576fdca73fa93` (2025-12-03 22:24 UTC): removed
  `README.md`, which contained only `# DopeLife-inc.`. There was no substantive
  setup guide to restore.

At inspection there was one branch, three commits, no pull requests, and no
GitHub Actions runs. The original source remains available in Git history.

## Recovery changes

- Renamed the source to `index.html` and extracted CSS and JavaScript.
- Added README, deployment, maintenance, and recovery documentation.
- Made content visible by default, including when JavaScript fails or is disabled.
- Added a main landmark, keyboard skip link, and visible focus indicators.
- Adjusted narrow-screen grid and button layout.
- Added reduced-motion handling and an observer-unsupported fallback.
- Removed load-delay visibility gates and the permanent parallax animation loop.
- Replaced the external placeholder image with a CSS background.

## Content review and outstanding release items

On October 17, 2026 the owner reported reviewing and verifying the promotional
content. This is an owner statement, not an independent check of referral links,
operator terms, claims, or legal eligibility. The recovery retains the original
copy and outbound destinations; no new campaign assets or substantiation were
committed. The remaining observable issues are:

- `index.html` still contains `Whale25`; the owner's later stated preference was
  `LUCKY25`. This maintenance pass does not implement referral promotion changes.
- The shortened CTA URL's final destination has not been independently verified
  or recorded in the repository.
- The three generic testimonials have no supporting evidence in the repository.
- Bonus, betting-limit, crypto-withdrawal, and age/eligibility statements have no
  supporting source or approval record in the repository.
- Public hosting, deployment URL, and HTTPS status are unknown.

## Completed merge and hosting

- PR #2 was squash-merged into `master` on October 17, 2026, as commit
  `b826d8a0ee7ef794c7395ceb902f748b68457cc8`.
- The source files from that commit were uploaded to ShipStatic as deployment
  `radiant-rift-t46bheb.shipstatic.com`.
- A public domain, https://dopelife-inc.shipstatic.com, now points to the
  uploaded snapshot. ShipStatic reports the deployment successful and domain live.
- Manual deployment: source/documentation updates on GitHub do not
  automatically redeploy the public site.
- This recovery did not add signups, tracking, automated referral claims,
  backend data storage, or outgoing-link transactions.

Read DEPLOYMENT.md for the current release URL and MAINTENANCE.md for checks.
