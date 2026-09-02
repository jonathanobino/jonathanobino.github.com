# Jonathan Obino — Portfolio

Source code for [jonathanobino.xyz](https://jonathanobino.xyz), Jonathan Obino's personal portfolio website.

Built with React, Parcel, and Sass.

## Getting started

```bash
npm install
npm start
```

Parcel prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the local development server. |
| `npm run dev:network` | Starts the development server and exposes it on the local network. |
| `npm run build` | Creates the production build in `docs/`, including prerendered content. |
| `npm run preview` | Serves the production build locally on port 4173. |
| `npm run lint` | Runs Biome's linter. |
| `npm run format` | Formats the source files with Biome. |

## Project structure

```text
src/        React application, components, styles, and utilities
static/     Static files copied to the production build
templates/  Parcel HTML entry point
scripts/    Production prerendering scripts
docs/       Generated site published through GitHub Pages
```

## Copyright

The source code is licensed under the [ISC License](LICENSE). All portfolio content—including text, images, project work, and branding—remains copyright © Jonathan Obino. Do not reuse it without permission.
