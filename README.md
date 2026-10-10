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
