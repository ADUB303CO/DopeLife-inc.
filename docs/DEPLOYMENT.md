# Deployment and release record

## Current production release (October 17, 2026)

- **URL:** https://dopelife-inc.shipstatic.com
- **Hosting:** ShipStatic (connected account).
- **Deployment:** https://dynamic-shard-djt25s6.shipstatic.com
- **Deployment status:** `success` (ShipStatic); no expiration scheduled.
- **Domain status:** `live` and `verified` (ShipStatic).
- **Source repository:** https://github.com/ADUB303CO/DopeLife-inc.
- **Published branch and commit:** `master`, `444c99093aae953c2bf92ad7ff1724cc1fd7c960`.
- **Publishing workflow:** [Publish DopeLife to ShipStatic](https://github.com/ADUB303CO/DopeLife-inc./actions/workflows/publish-shipstatic.yml).
- **Successful deployment run:** https://github.com/ADUB303CO/DopeLife-inc./actions/runs/39077591422
- **Files:** `index.html`, `assets/css/styles.css`, `assets/js/main.js`.
- **Build/server:** none; this is a static website.
- **Automated deployment:** active when site code or its publishing workflow changes on `master`. Documentation-only commits do not redeploy.
- **Deployment credential:** encrypted GitHub Actions repository secret named `SHIP_TOKEN`. Never write or log its value.
- **Independent browser check:** not performed by this handoff. GitHub and ShipStatic both reported success; these provider statuses do not replace a manual browser review.

## Automatic publishing

The workflow at `.github/workflows/publish-shipstatic.yml` validates JavaScript syntax,
stages only the three public site files, then calls the pinned ShipStatic
Action to create a new release and relink `dopelife-inc.shipstatic.com`.
It is triggered by changes to the published HTML/CSS/JS paths or by
the workflow itself, and also supports manual workflow dispatch.

On October 17, 2026, the workflow completed successfully, including
`Publish and link production domain`. ShipStatic confirmed that the live
domain points to the newly created GitHub-origin deployment. The earlier
manual deployment `radiant-rift-t46bheb.shipstatic.com` remains available
as a previous release.

If `SHIP_TOKEN` is missing, the workflow now fails explicitly rather
than reporting a successful run with the publish step skipped.

## Publishing changes

1. Make website changes on a GitHub branch and check them locally using the README.
2. Review and merge the change into `master`.
3. Inspect the `Verify static landing page` and `Publish DopeLife to ShipStatic`
   GitHub Actions runs. Confirm that the **publish step itself** reports success.
4. Verify https://dopelife-inc.shipstatic.com in a browser, including mobile,
   keyboard access, CSS/JS loading, outbound links and HTTPS.
5. For changes only to documentation, automatic publishing is intentionally
   not triggered. Use workflow dispatch when an explicit republish is needed.

## Rollback and credentials

To roll back a deployment, relink the project domain to the last known
working ShipStatic deployment. The original manual deployment is preserved
at `radiant-rift-t46bheb.shipstatic.com`. Never force-push Git history
as a substitute for rolling back a release.

If a deployment credential has been disclosed, rotate/revoke it at ShipStatic
and update the `SHIP_TOKEN` GitHub Actions secret. Do not store API keys
in Git or in public issue comments. Check deployment runs after rotation.

## Promotion/content review

The original content still includes `Whale25`, the shortened URL, legacy
testimonials and 2025 footer text. The owner reported reviewing promotional
content October 17, 2026; this GitHub-to-ShipStatic activation does not
independently verify those claims, destinations, or legal eligibility.

## Recovery history

Recovery pull request #2 was merged as
`b826d8a0ee7ef794c7395ceb902f748b68457cc8`.
The first manually published static release was
`radiant-rift-t46bheb.shipstatic.com`; automatic publishing became
operational with workflow commit `444c99093aae953c2bf92ad7ff1724cc1fd7c960`.
