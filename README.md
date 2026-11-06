# Mikhil — developer portfolio

A responsive, static portfolio built with Astro, TypeScript, and plain CSS. It has no runtime backend, tracking, external fonts, or client-side JavaScript dependencies. Case studies use the professional contributions supplied by the owner.

## Run locally

Install **Node.js 22.12 or newer** (Node 24 LTS recommended) and npm, then from the repository root:

```bash
cd portfolio
npm ci
npm run dev
```

Open **http://localhost:4321**. Astro prints the actual port if 4321 is occupied. Use `npm install` if intentionally updating dependencies; commit the resulting lockfile.

## Production build

```bash
npm run build
npm run preview
```

The build runs Astro/TypeScript checks before generating static files in `dist/`. Preview serves that output locally. Deploy `dist/` to a static host; `npm run preview` is for local verification.

## Personalize before publishing

Edit `src/data/profile.ts`:

- Confirm the public name (currently Mikhil Kuppattil).
- LinkedIn and email are configured from the supplied profile and February 2026 resume. Set `github` if you want that contact link displayed; blank values are omitted.
- Career history, education, and skills reference the supplied resume. The PDF and phone numbers are not published; review the current-role dates when updating the site.
- The introduction displays the owner-supplied portrait at `public/mikhil-kuppattil.png`. Replace that file to update the photo.
- Review the project descriptions and confirm they can be shared publicly.

Edit `src/styles/global.css` to change the visual design. Page markup and metadata are in `src/pages/index.astro`.

## Set the public URL

The default example URL is never emitted as a canonical URL. For your actual deployment, build with the real origin:

```bash
SITE_URL=https://your-domain.com npm run build
```

For a GitHub Pages project site, also set the repository path (including a trailing slash):

```bash
SITE_URL=https://your-username.github.io BASE_PATH=/your-repository/ npm run build
```

For a user site (`your-username.github.io` repository) or custom domain, leave `BASE_PATH` unset. Use `actions/upload-pages-artifact` to upload **only `portfolio/dist`**, then `actions/deploy-pages` to deploy it. Do not publish the surrounding service repository or its configuration files. Configure your host to use the generated `404.html` for missing routes.

## Included

- Responsive layouts for desktop and mobile.
- Native keyboard-accessible expandable case studies.
- Skip navigation, visible keyboard focus, semantic landmarks, and reduced-motion support.
- Title, description, Open Graph metadata, optional canonical URL, and SVG favicon.
- Custom 404 page and no-JavaScript navigation.

## Verification limits

`npm run build` verifies types and production generation. Before public launch, review at mobile and desktop sizes in a browser, check contact destinations, and run Lighthouse for accessibility and performance. There is no contact form or server to configure.
