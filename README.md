# DragonBite: Chinese Recipe App

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

A modern, responsive Chinese recipe website built with React. Browse authentic dishes, search and filter the menu, open step-by-step recipe pages, and save your favorites.

**Live demo:** https://chineesefood.vercel.app/

> **Demo project:** reviews and contact details are sample content used to showcase the design and layout.

<!--
## Screenshots

Add your screenshots to a `docs/` folder, then remove the comment markers around this section.

| Home | Recipes | Recipe page |
| --- | --- | --- |
| ![Home](docs/home.png) | ![Recipes](docs/recipes.png) | ![Recipe](docs/recipe.png) |
-->

## Features

### Home page
- Hero section with an animated dish image and live stats (recipe count, categories, average cook time) calculated from the data
- Auto-scrolling featured recipes marquee that pauses on hover
- Popular recipes grid with poster-style cards and a mouse-follow spotlight effect
- Clickable category circles with recipe counts that open the Recipes page already filtered
- Cooking skills, flavor story timeline, video collections, and a chef section
- Video cards load only a thumbnail; the YouTube player loads when you press play

### Recipes page
- Live search across recipe names and descriptions
- Category chips built automatically from the data
- Sort by name (A–Z, Z–A) or fewest ingredients
- Filter by cooking time
- Time and difficulty shown on every card
- Filters are stored in the URL, so a filtered page can be shared or bookmarked
- Result counter, reset button, and a friendly empty state when nothing matches

### Recipe page
- Clean, readable URLs such as `/recipe/chicken-chow-mein` (old numeric links redirect)
- Time, difficulty, ingredient count, and step count at a glance
- Interactive ingredient checklist with a progress bar (remembered for the browser session)
- Numbered method steps and a full description
- "You might also like" suggestions, starting with recipes from the same category

### Favorites
- Heart button on recipe cards and a "Save recipe" button on the recipe page
- Saved recipes are remembered in the browser (localStorage) and stay in sync across tabs
- Saved count badge in the navbar and a "Saved" filter on the Recipes page

### About and Contact
- About page with story, real stats taken from the recipe data, and values
- Contact form with labeled fields, validation, clear error messages, a character counter, and a topic selector
- Works without a backend: opens the visitor's email app, or sends through Formspree when an endpoint is added

### Navigation and layout
- Navbar with active-page highlight, click-to-open search that jumps to the filtered Recipes page, blur on scroll, and a slide-in mobile menu
- Footer with a call-to-action, social links, and a back-to-top button
- Pages open at the top when you navigate
- Custom "Page not found" screen

### Quality details
- Fully responsive, with mobile-specific layouts
- Responsive images with `srcset` and lazy loading, and a WebP hero image
- Keyboard-friendly focus styles, `aria` labels and states, and labeled form fields
- Respects `prefers-reduced-motion` for users who want less animation
- Page titles update on the recipe, About, and Contact pages

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite |
| Routing | React Router 7 |
| Icons | React Icons |
| Styling | Plain CSS (custom design system, no UI library) |
| Fonts | Playfair Display and Inter (Google Fonts) |
| Linting | ESLint with the React Hooks plugin |
| Deployment | Vercel |

## Technical Highlights

- **URL-driven filters:** search, sort, time, category, and saved state live in the query string with `useSearchParams`, so they survive refreshes and can be shared.
- **Shared state with Context:** one `FavoritesContext` feeds the cards, the recipe page, the navbar badge, and the Saved filter, and persists to localStorage.
- **Derived data:** categories, stats, and counts are calculated from the recipe data, so adding a recipe updates the whole site.
- **Performance:** resized image variants with `srcset`, lazy loading, a prioritized hero image, and click-to-load video.
- **Accessibility:** semantic HTML, labeled controls, visible focus states, and reduced-motion support.

## Getting Started

**Requirements:** Node.js 20 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/mehreencodes/Chineesefood.git
cd Chineesefood

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the local address shown in the terminal (usually http://localhost:5173).

### Other commands

```bash
npm run build     # create a production build
npm run preview   # preview the production build locally
npm run lint      # check the code with ESLint
```

### Optional: contact form endpoint

By default the contact form opens the visitor's email app. To send messages directly, create a form on [Formspree](https://formspree.io) and paste its URL into the `FORM_ENDPOINT` constant in `src/pages/Contact.jsx`.

## Project Structure

```
Chineesefood/
├── public/
├── src/
│   ├── assets/        # hero image (WebP)
│   ├── components/    # Navbar, Footer, FavButton, ScrollToTop
│   ├── context/       # FavoritesContext (saved recipes)
│   ├── data/          # recipes.js (list data) and recipeDetails.js (ingredients, steps)
│   ├── pages/         # Home, Recipes, RecipeDetail, About, Contact, NotFound
│   ├── styles/        # global and page styles
│   └── utils/         # img.js (image sizing) and slug.js (clean URLs)
├── index.html
├── vercel.json        # routes every path to index.html for the single-page app
├── vite.config.js
└── package.json
```

## Deployment

The app is deployed on Vercel. Every push to the `main` branch builds and publishes automatically. A `vercel.json` rewrite sends all routes to `index.html`, so direct links and page refreshes work.

## Roadmap

- Prerendering and recipe structured data (JSON-LD) for better search results
- User accounts so saved recipes sync across devices (full-stack version)

## Author

**Mehreen Khalid**: React.js and Full Stack Web Developer
GitHub: [@mehreencodes](https://github.com/mehreencodes)
