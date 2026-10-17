# Maintenance

## Editing

Use a branch and reviewable pull request. Keep changes small and describe the
problem, behavior change, and verification performed. Do not add a framework,
dependency manager, or secrets for this static page without a concrete need.
Keep business/content decisions separate from mechanical maintenance.

## Verification checklist

Run the local preview command in README.md. If Node.js is available, run
`node --check assets/js/main.js` (Node is optional and not a site dependency).

- Confirm `/`, `/assets/css/styles.css`, and `/assets/js/main.js` return HTTP 200.
- Check desktop and 320px / 375px mobile widths for clipped text or horizontal overflow.
- Disable JavaScript and confirm all content remains visible.
- Block the script or remove IntersectionObserver support and confirm readable content.
- Enable reduced motion before loading, then change it while the page is open;
  content must remain visible and optional animations must stop.
- Press Tab from the top: the skip link should appear and move focus to main content.
  Verify visible focus on the remaining links without following external destinations.
- Confirm there are no browser errors and no external asset requests.
- Preview under a subdirectory to ensure relative asset paths still resolve.
- Inspect diffs for accidental content changes, credentials, and generated files.

This checklist does not verify offers, endorsements, legal eligibility, or external
referral destinations. Do not interpret technical checks as content approval.

## Recovery validation

Checked on 2026-09-28 UTC:

- PASS: `node --check assets/js/main.js`.
- PASS: local Python HTTP server returned 200 with HTML, CSS, and JavaScript
  content types for the page and both assets under a subdirectory.
- PASS: HTML parsing confirmed that legacy body text and external link targets
  were preserved; the only added body text is the keyboard skip link.
- NOT REPRODUCED BY MAINTAINER: browser layout, keyboard, JavaScript-disabled,
  missing-observer, and reduced-motion checks; a browser was unavailable during
  the September 28 recovery. The owner reported completing Step 2 of the
  recovery checklist on October 17, 2026. This is an owner-attested result, not
  an independently observed or automated test pass.
- OWNER REVIEW: on October 17, 2026 the owner stated promotional content had
  been verified. No updated campaign copy, proof, destination URL, or operator
  approval documents were supplied to this repository as part of this recovery.
- NOT CHECKED BY THIS RECOVERY: live hosting, referral redirect destination,
  and promotional claim evidence.

The pull request can proceed to merge review based on the owner's confirmation.
