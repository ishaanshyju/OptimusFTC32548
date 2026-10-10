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
- The hero robot is an original SVG concept illustration, not a photograph of the team's robot.
- Instagram: https://www.instagram.com/optimus_ftc/ (linked in the contact section and footer).
- Build updates and additional contact details can be added when available.
- Google Fonts are optional; system fallback fonts work offline.

The files can be hosted on any static website host. No backend, credentials, or database is required.

## Motion and team profiles

The homepage includes scroll reveals, a floating robot illustration, animated orbit lines, a reading progress indicator, and a pause/resume motion control. The site respects the browser’s reduced-motion setting.

The Team section includes the ten names supplied by the team, with Vishal marked Captain. Other roles and bios have not been supplied; the remaining members are labeled Team member. Initials are used until portraits are provided.

The reference website’s visual design is still pending inspection because its hostname is blocked by the current environment network policy. Animation controls, mobile navigation, and roster layout were verified locally.
