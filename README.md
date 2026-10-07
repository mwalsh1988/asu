# Arizona State Pitch Site

Created October 6, 2026 from the current `mwalsh1988/unc` pitch site.
Uploaded to the public `mwalsh1988/asu` repository on October 7, 2026.

This is an independent working draft focused on trading cards as a sellable
asset for Arizona State's sponsorships team and its rights partners.

## Files

- `index.html`: Arizona State pitch copy and section order
- `styles.css`: existing ONIT design with responsive Arizona State draft rules
- `script.js`: product gallery and on-page YouTube player
- `assets/`: images used by this page

## Direction

The palette is Arizona State maroon (`#8C1D40`), gold (`#FFC627`), black
(`#000000`) and white (`#FFFFFF`). White sections use maroon accents and
dark or maroon sections use gold accents. Buttons use gold with black text.
Partner With ONIT has a black background. The closing section is maroon.
The ONIT Gravity section has been removed from this version.

The hero leads with Sun Devil pride and new sponsor inventory, using a
web-optimized copy of the supplied ASU team-specific card collage in
`assets/hero-asu-cards.jpg`. Sellable Asset
and the Jacksons testimonial appear near the top. Copy makes Arizona State
and its rights partners responsible for sponsor relationships, sales and
brand approvals, with ONIT creating the product and supporting activation.
The New Sellable Asset includes the supplied Arizona State football Platinum
box mockup beneath its body copy in the left column.
The Product follows Partner Testimonial, then The Model (formerly The How)
continues into Creating A Win-Win-Win-Win, which replaces the former The Why section.
Its black, left-aligned headline keeps Creating A on the first line and
Win-Win-Win-Win on the second line.
This continuation keeps the `#platform` anchor and features four quadrants:
ATHLETES, UNIVERSITY, PARTNER and ONIT. Each has a one-color maroon icon:
a Material Design Icons football helmet for ATHLETES and Lucide icons
for the remaining quadrants. All four quadrants use the user's supplied
benefit captions, each ending with a period. UNIVERSITY reads
"New sponsor inventory and licensing royalties."
The quadrants use a two-by-two layout, stacking on narrow mobile screens.
The Model's five tiles use small centered ASU pitchfork logos in place of
the original number blocks.

The Premium gallery uses the supplied Jaren Hamilton Arizona State City
Limits card on a textured black background. Its transparent PNG is preserved
unchanged. Authentic uses a web-sized copy of the supplied `_BBB1461.jpg`
showing an Arizona State athlete signing cards, with the full frame preserved.
Valuable (formerly Stories) uses the supplied Cutter Boley resale listing
screenshot in `assets/valuable-resale-example.png`, displayed without cropping.
Other images still show existing ONIT products and activations
at other schools pending replacement. The metrics are ONIT company figures
retained from the source site.

## Preview And Publishing

Use an HTTP preview for the YouTube modal; opening the HTML directly from
the filesystem can cause YouTube Error 153.

Target repository: https://github.com/mwalsh1988/asu
Custom domain: https://sundevils.onitathlete.com

GitHub Pages is configured to publish from the `main` branch and `/(root)` folder.
The `CNAME` file contains `sundevils.onitathlete.com`, and `.nojekyll` makes
GitHub serve the static files directly. Also set the custom domain in
the repository's Settings > Pages before changing DNS.

At the DNS host for `onitathlete.com`, configure:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | sundevils | mwalsh1988.github.io |

Do not include the repository name or `https://` in the DNS target.
Do not change the root domain, `www` or any other site's DNS records.
If `sundevils` has an existing A or AAAA record, replace that subdomain's
record with the CNAME above. GitHub's initial check reported an A record;
the custom domain is not live until DNS points to GitHub Pages.
Enable Enforce HTTPS in GitHub Pages once DNS resolves and GitHub's
certificate is ready. DNS and certificate changes can take up to 24 hours.

Unused legacy images remain locally but are excluded by `.gitignore`.
The published assets include only current images, icons and license notices.

GitHub's setup documentation:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
