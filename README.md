# Advice Generator App

A Frontend Mentor challenge solution — responsive web app that fetches and displays random advice using the Advice Slip API. This README documents the project structure, styling approach (SCSS 7-1 pattern), usage, and the `index.js` behaviour.

![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-Challenge-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)

## Table of Contents

- [Overview](#overview)
- [Project Contents](#project-contents)
- [Styles & SCSS Architecture (7-1)](#styles--scss-architecture-7-1)
- [JavaScript (`index.js`)](#javascript-indexjs)
- [Getting Started](#getting-started)
- [Development](#development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This project is a solution to the [Advice Generator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). It demonstrates a clean, responsive UI and a lightweight JavaScript integration with the Advice Slip API to fetch random advice.

## Project Contents

Root-level files and folders:

```
advice-generator-app-main/
├── index.html                 # Main HTML file (markup + structure)
├── index.js                   # App JS: fetches advice and updates the DOM
├── package.json               # Dev dependencies (sass)
├── README.md                  # Project documentation (this file)
├── README-template.md         # Starter README template
├── style-guide.md             # Design tokens and specs
├── styles/                    # SCSS source and compiled CSS
│   ├── main.scss              # Entry SCSS that imports the 7-1 modules
│   ├── main.css               # Compiled CSS output (generated)
│   ├── abstracts/             # Variables, mixins, utilities
│   │   ├── _variables.scss
│   │   ├── _colors.scss
│   │   ├── _mixins.scss
│   │   └── _utilities.scss
│   ├── base/                  # Base styles, reset, typography
│   │   ├── _reset.scss
│   │   ├── _base.scss
│   │   └── _typography.scss
│   └── layout/                # Page and component layouts
│       └── _home.scss
├── images/                    # Icons and design assets
└── design/                    # Reference design files (JPGs, etc.)
```

## Styles & SCSS Architecture (7-1)

This project uses the 7-1 SCSS pattern for maintainable styles. Files are organized so that global tokens and helpers are easy to find, and component/layout styles remain focused.

- `abstracts/` (no CSS output)

  - `_variables.scss` — color, spacing, sizing, breakpoints
  - `_colors.scss` — HSL palette used across the project
  - `_mixins.scss` — reusable mixins (e.g., `flex-row`, `flex-col`)
  - `_utilities.scss` — utility classes and helpers

- `base/` (global element styles)

  - `_reset.scss` — reset/normalization rules
  - `_base.scss` — base element styles (body, headings)
  - `_typography.scss` — font stacks, sizes, weights

- `layout/` (page-level and component styles)

  - `_home.scss` — main card layout and component styles for the advice card

- `main.scss` simply imports the modules above in the correct order:

```scss
@import 'abstracts/_variables.scss';
@import 'abstracts/_colors.scss';
@import 'base/_reset.scss';
@import 'base/_base.scss';
@import 'base/_typography.scss';
@import 'abstracts/_mixins.scss';
@import 'abstracts/_utilities.scss';
@import 'layout/_home.scss';
```

Key SCSS details:

- Variables centralize color and spacing tokens for consistent design changes.
- Mixins include small helpers (`flex-row`, `flex-col`) used widely in `main.scss` and layout files.
- Files in `abstracts/` do not output CSS directly — they provide tokens and functions for the rest of the styles.

### Example mixin usage

```scss
.advice {
  @include flex-col;
  gap: 10px;
}
```

## JavaScript (`index.js`)

This project ships a small script that integrates with the Advice Slip API and updates the DOM when the dice button is clicked.

Full `index.js` source:

```javascript
'use strict';

const adviceBtn = document.querySelector('.advice-dice-button');
const adviceId = document.querySelector('.advice-heading__id');
const adviceText = document.querySelector('.advice-text');

async function getAdvice() {
  const AdviceApi = 'https://api.adviceslip.com/advice';
  try {
    const response = await fetch(AdviceApi);
    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }
    const result = await response.json();
    const { id, advice } = result.slip;
    adviceId.textContent = id;
    adviceText.textContent = `${' " '}${advice}${' " '}`;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
}

adviceBtn.addEventListener('click', getAdvice);
```

What it does:

- Selects the advice dice button, advice id, and advice text elements.
- Fetches a random advice slip from `https://api.adviceslip.com/advice`.
- Parses the returned JSON and updates the DOM with the `id` and `advice`.
- Includes `try/catch` error handling to log network or parsing issues.

## Getting Started

### Prerequisites

- Node.js and npm (for installing `sass` if needed)
- A browser for testing

### Install dependencies

```powershell
npm install
```

(`package.json` currently includes `sass` as a dev dependency.)

### Compile SCSS

Compile once:

```powershell
npx sass styles/main.scss styles/main.css
```

Watch mode (auto-compile on change):

```powershell
npx sass --watch styles:styles
```

### Open the app

- Open `index.html` directly in your browser, or use a local dev server (Live Server in VS Code is recommended).

## Development notes

- The project uses SCSS mixins for common layout patterns (see `abstracts/_mixins.scss`).
- Keep tokens (colors, spacing, breakpoints) in `abstracts/_variables.scss` to simplify theme changes.
- The `main.css` file is generated — do not hand-edit it; edit SCSS sources instead.

## Author

Louai Khodary
GitHub: [Profile](https://github.com/LouaiKhodary13)

Frontend Mentor: [Profile](https://www.frontendmentor.io/profile/LouaiKhodary13)

LinkedIn: [profile](https://www.linkedin.com/in/louai-khodary-b29347302/)

## Acknowledgments

- Frontend Mentor — challenge and assets
- Advice Slip API — random advice JSON endpoint
- Google Fonts — Manrope used in design

---
