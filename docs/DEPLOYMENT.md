# Deployment and release record

## Current hosted release

- **Status:** Live according to ShipStatic deployment and domain APIs, checked October 17, 2026.
- **Canonical URL:** https://dopelife-inc.shipstatic.com
- **Static deployment URL:** https://radiant-rift-t46bheb.shipstatic.com
- **Hosting:** ShipStatic, connected account on its free plan.
- **Source repository:** https://github.com/ADUB303CO/DopeLife-inc.
- **Source branch:** `master`.
- **Source commit:** `b826d8a0ee7ef794c7395ceb902f748b68457cc8` (merged recovery PR #2).
- **Uploaded files:** `index.html`, `assets/css/styles.css`, `assets/js/main.js`.
- **Deployment status:** `success`; no expiration (`expires: null`).
- **Domain status:** `live`; domain verification reported `verified` by ShipStatic.
- **Independent external HTTP/HTTPS response check:** unavailable in the execution environment; the provider-reported status is not an independent end-to-end check.
- **Custom purchased domain:** none.
- **Deployment method:** manual static file upload from the reviewed repository sources; **GitHub pushes do not automatically redeploy the website**.
- **Build command / runtime server:** none. This is a static HTML/CSS/JS site.
- **Secrets / environment variables:** none required for this version.

The public hosting step does not verify advertising statements, operator terms, testimonials, referral eligibility, or the ultimate destination of external shortened links. The owner reported verifying promotional content on October 17, 2026; that is an owner-attested review, not independently documented supporting evidence.

## GitHub automatic publishing (configured; awaiting repository secret)

A workflow at `.github/workflows/publish-shipstatic.yml` is installed on
`master`. It runs on changes to the public HTML/CSS/JavaScript source or
when started manually. It validates JavaScript syntax, stages only the three
website files, and uses the pinned ShipStatic GitHub Action to publish and
link the canonical project-domain alias.

**Current state as of October 17, 2026:** Workflow syntax and staging
passed, but the actual publish step was **skipped** because no
`SHIP_TOKEN` GitHub Actions repository secret was present.
GitHub's green workflow status alone does not mean that a new
release was deployed.

To activate automatic publishing, create a fresh ShipStatic API key or
deploy-scoped token in ShipStatic and add it directly in GitHub's repository
Settings > Secrets and variables > Actions > New repository secret,
using the exact name `SHIP_TOKEN`. Do not commit the key, enter it into
workflow YAML, or share it in messages. Use the GitHub Actions UI to
manually run Publish DopeLife to ShipStatic once after saving the secret.
Check that the 'Publish and link production domain' step actually
succeeded and that the domain still points to the expected version.

Until that step succeeds, publish manually as described below. The original
deployed snapshot remains separate from newer documentation and CI commits.

## Updating the site

1. Edit the files on a GitHub branch and review the pull request. Use `README.md` and `docs/MAINTENANCE.md` for local preview and checks.
2. Merge reviewed changes into `master` and record the exact source commit.
3. Upload the three site files, preserving these relative paths: `index.html`, `assets/css/styles.css`, and `assets/js/main.js`. Use the connected ShipStatic deployment tool or its account UI.
4. Inspect the new deployment; if correct, relink `dopelife-inc.shipstatic.com` to that new deployment.
5. Verify the page, CSS, JavaScript, links, keyboard behavior, mobile layout, and HTTPS from an external browser. Record the new deployment URL, source commit, date, and test result here.

No GitHub/Vercel connection, continuous deployment, backend, visitor tracking, or database was added. Do not treat a GitHub merge as automatic publication.

## Rollback

Keep the previous deployment intact before switching the site alias. If a new release fails, relink `dopelife-inc.shipstatic.com` to the previous known-good deployment. To revert source changes, use a reviewed GitHub revert commit and publish those sources as a new static deployment; do not force-push shared history. Check the live URL and assets again after the rollback.

## Historical note

Before recovery PR #2, the public `master` branch had no `index.html` or verified hosting configuration. An old GitHub issue named `Stake-referrals.github.io` did not establish an actual deployment. The September 28, 2026 documentation therefore listed hosting as unknown; this record supersedes that status.
