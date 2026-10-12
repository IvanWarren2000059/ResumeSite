# Resume site — skeleton

A 4-page resume/portfolio site built with Node.js (Express + EJS), designed to deploy
straight to Vercel. Design concept: an engineering-blueprint / service-log look —
deep blueprint blue, cyan "ink" lines, copper accent — grounded in the hardware-to-software
story rather than a generic dark-mode template.

## Pages

| Route        | File                    | Purpose |
|--------------|-------------------------|---------|
| `/`          | `views/index.ejs`       | Home — intro, skills |
| `/systems`   | `views/systems.ejs`     | Systems Developed — payroll demo + downloadable apps |
| `/hardware`  | `views/hardware.ejs`    | Hardware Experience — video + photo gallery |
| `/cv`        | `views/cv.ejs`          | CV — summary, experience, education |
| `/payroll`   | `views/payroll.ejs`     | Stub landing route for the mock payroll demo (opens in a new tab from Systems) |

## Run locally

```bash
npm install
npm start          # http://localhost:3000
# or, with auto-reload:
npm run dev
```

## What to customize first

1. **`server.js`** — edit the `site` object (name, role, email, GitHub/LinkedIn, `cvDownloadUrl`).
2. **`views/systems.ejs`** — fill in your real project names/descriptions/stack; point
   `Download app` buttons at your Google Drive share links; point `View source` at GitHub.
3. **`views/payroll.ejs`** — either build the payroll app's own routes/views under this
   Express app, or replace the button in `systems.ejs` with a link to wherever the payroll
   app is actually deployed.
4. **`views/hardware.ejs`** — drop real photos into `public/assets/hardware/` and swap each
   `.media__placeholder` block for an `<img src="/assets/hardware/your-file.jpg" alt="...">`.
   Replace the `<video>` source with your own clip, or swap it for a YouTube `<iframe>`.
5. **`views/cv.ejs`** — fill in real experience, education, and certifications.

## Deploying to Vercel

This repo includes a `vercel.json` that routes all requests to the Express app in
`server.js`, with `views/` and `public/` bundled in.

```bash
npm i -g vercel   # if you don't have it
vercel            # first deploy, follow the prompts
vercel --prod     # subsequent production deploys
```

Or connect the GitHub repo in the Vercel dashboard for automatic deploys on push —
no project settings need to change, `vercel.json` handles the build.

## Structure

```
server.js              Express app + routes
vercel.json             Vercel build/route config
views/
  partials/             head, nav, footer (title-block style)
  index.ejs             Home
  systems.ejs            Systems Developed
  hardware.ejs           Hardware Experience
  cv.ejs                 CV
  payroll.ejs             Payroll demo stub
public/
  css/style.css          Design system (tokens + components)
  js/main.js             Mobile nav toggle
  assets/hardware/       Put photos/video here
  assets/systems/        Put project screenshots here
```
