# Deployment status and handoff

Status: recovered static site merged into `master` on 2026-10-17 by PR #2
(commit `b826d8a0ee7ef794c7395ceb902f748b68457cc8`).
No live deployment has been verified or created by this recovery. The closed issue named `Stake-referrals.github.io` does not
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
| Publishing branch / directory | Proposed `master` / repository root (`.`); not yet configured |
| Canonical public URL | Unconfirmed |
| Custom domain and DNS owner | Unconfirmed |
| HTTPS verification date | Not verified |
| Released commit / deployment ID | None; latest confirmed source recovery merge `b826d8a0ee7ef794c7395ceb902f748b68457cc8` |
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

## Free static hosting route (proposed, not configured)

Owner preference: a free, no-surprise-billing setup with minimal limitations.
**Cloudflare Pages Free** is a strong option for this plain HTML, CSS, and JS
site. Its static asset requests are advertised as free and unlimited. Pages
Free still has technical limits (including 500 builds/month, 20,000 files per
site, and 25 MiB maximum per individual file), plus acceptable-use terms. Do
not describe it as unrestricted hosting. As this is a casino referral page,
the owner should confirm the hosting provider's policies, local legal
requirements and any affiliate program rules before public release.

Cloudflare product docs:
- https://developers.cloudflare.com/pages/functions/pricing/
- https://developers.cloudflare.com/pages/platform/limits/
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

### Site settings for Cloudflare Pages Git integration

1. Use a free Cloudflare account, open **Workers & Pages**, create a **Pages**
   project, and **Import an existing Git repository**.
2. Authorize just `ADUB303CO/DopeLife-inc.` if GitHub allows selecting it
   individually.
3. Set production branch: `master`.
4. Framework preset: **None**. Build command: leave blank (or `exit 0`).
5. Root directory: repository root. Build output directory: `.` (the folder
   containing `index.html`).
6. Publish and record the actual assigned `*.pages.dev` URL below; never
   invent the hostname. Verify HTTPS, `/`, the stylesheet and script URLs.
7. Confirm mobile view, reduced motion and link destination behavior on the
   deployed domain. Record host policy checks and verified referral terms.
8. Keep this plain static site free of Pages Functions/Workers/database/paid
   add-ons unless expressly approved. Any dynamic features have different
   free tier quotas. Never enable paid upgrades automatically.

### Deployment evidence to fill after publishing

- Hosting account/owner: **not connected or verified**
- Public URL: **not assigned/verified**
- Production branch: **proposed `master`**
- Latest verified deployed commit: **none**
- Published at (UTC): **not deployed**
- HTTPS check: **pending**
- Operator promotion / jurisdiction review: **owner-reported content review;
  third-party documentation not deposited here**

### Provider restrictions

GitHub Pages terms prohibit using Pages as free hosting for a site primarily
directed at commercial transactions; Vercel Hobby restricts commercial
affiliate-link sites. Therefore neither is the proposed host for this
commercial referral landing page.
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://vercel.com/docs/limits/fair-use-guidelines

The free host is a recommendation, not evidence that the gambling-related
promotion complies with provider policies or applicable laws.
