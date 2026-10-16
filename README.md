# OptimusFTC32548

A responsive black-and-white website for Optimus FTC 32548, one of Round Rock High School’s robotics teams in Round Rock, Texas. No build step or package installation is required.

## Live website

https://optimusftc32548.netlify.app/

## GitHub Pages

GitHub Pages is configured to serve the `main` branch from the repository root.

The current GitHub Pages address is shown in the repository’s Pages settings.

## Netlify hosting

The `netlify.toml` file configures this static website for deployment without a build command.

In Netlify, import this GitHub repository as an existing project and deploy the `main` branch. Leave the build command empty and use `.` as the publish directory. Set the project name to `OptimusFTC32548` if that name is available. Netlify provides a public address that does not contain the GitHub account username.

## Open the website

Unzip the download and open `index.html` in your browser. Keep `styles.css` and `script.js` beside it.

## Run locally

To serve the website locally, run this from the website folder:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

## Customize

- Edit `index.html` for team information, robot updates, and contact details.
- Edit `styles.css` for colors and layout.
- The robot section uses a labeled SVG concept illustration until team robot photos are provided.
- Instagram: https://www.instagram.com/optimus_ftc/ (linked in the contact section and footer).
- Build updates and additional contact details can be added when available.
- Google Fonts are optional; system fallback fonts work offline.

The files can be hosted on any static website host. No backend, credentials, or database is required.

## Motion and team profiles

The homepage includes scroll reveals, a floating robot illustration, animated orbit lines, a reading progress indicator, and a pause/resume motion control. The site respects the browser’s reduced-motion setting.

The Team section includes the ten names supplied by the team, with Vishal marked Captain. Other roles and bios have not been supplied; the remaining members are labeled Team member. Initials are used until portraits are provided.

The design incorporates the black-and-white split hero, wording, season results, and public email from the HTML supplied by the team. The 2025–26 results are presented as supplied, with a link to the team's FIRST event record. The email is optimusftc.rrhs@gmail.com.

The Season section includes animated counters and an expandable table of all 15 supplied qualification results. Final counter values remain visible with JavaScript disabled or reduced motion enabled. The page includes desktop navigation and a mobile menu that closes on selection or Escape.

Netlify currently deploys the `main` branch of `ishaanshyju/OptimusFTC32548`. Updates pushed to that repository are published at the live address above.

## Outreach

The Outreach section adapts the reference site's numbered card grid and partnership invitation to the team's black-and-white design. It describes the five areas supplied by the team: STEM demonstrations, robotics education, community events, mentoring and collaboration, and inspiring young engineers. Email links open outreach and partnership inquiries addressed to the team. Specific completed events and impact figures can be added once supplied by the team.

## Search visibility

The site allows search engine crawling through `robots.txt` and its page metadata. `sitemap.xml` lists the homepage; its sections share that page and are not separate sitemap entries. The homepage includes a descriptive search title, canonical Netlify URL, social sharing metadata, and structured data identifying the team and its Instagram profile.

Search engines decide when to crawl, index, and rank the site. These settings do not guarantee a listing or immediate visibility. To request indexing in Google:

1. Open https://search.google.com/search-console and add `https://optimusftc32548.netlify.app/` as a URL-prefix property.
2. Verify ownership using the HTML tag or HTML file method. Add the exact verification tag or file Google provides to this repository and deploy it before clicking Verify. Keep the verification in place afterward.
3. Submit `sitemap.xml` under Sitemaps, then inspect the homepage URL and choose Request indexing if available.

Adding the website link to the team's Instagram bio or an official school robotics page can also help people and search engines discover it.
