# 🍜 DragonBite: Chinese Recipe App

A modern, responsive Chinese recipe website built with React. Browse authentic dishes, filter and search the menu, open step-by-step recipe pages, and save your favorites.

**Live demo:** https://chineesefood.vercel.app/

> **Demo project:** reviews, ratings, and contact details are sample content used to showcase the design and layout.

<!--
Add screenshots here, for example:
![Home page](./screenshots/home.png)
![Recipes page](./screenshots/recipes.png)
![Recipe detail](./screenshots/detail.png)
![Mobile view](./screenshots/mobile.png)
-->

---

## Features

### Home page
- Hero section with animated dish image and live stats (recipe count, categories, average cook time) calculated from the data
- Auto-scrolling featured recipes marquee that pauses on hover
- Popular recipes grid with poster-style cards and a mouse-follow spotlight effect
- Clickable category circles that open the Recipes page already filtered
- Cooking skills, flavor story timeline, video collections, and chef sections

### Recipes page
- Live search across recipe names and descriptions
- Category filter chips built automatically from the data
- Sort by name (A–Z, Z–A) or fewest ingredients
- Filter by cooking time
- Filters are stored in the URL, so a filtered page can be shared or bookmarked
- Result counter, reset button, and a friendly empty state when nothing matches

### Recipe detail page
- Time, difficulty, ingredient count, and step count at a glance
- Interactive ingredient checklist with a progress bar
- Numbered method steps and a full description
- "You might also like" suggestions
- Save recipes to a favorites list

### Contact page
- Form with field validation and clear error messages
- Character counter and topic selector
- Works without a backend: opens the visitor's email app, or sends through Formspree when an endpoint is added

### Quality details
- Fully responsive, with a mobile menu and mobile-specific layouts
- Custom 404 "Page not found" screen
- Lazy-loaded, responsive images (`srcset`) for faster loading
- Keyboard-friendly focus styles and `aria` labels
- Respects `prefers-reduced-motion` for users who want less animation
- Dynamic page titles for each page

---

## Tech Stack

| Area | Tools |
|---|---|
| Framework | React 19 |
| Build tool | Vite |
| Routing | React Router 7 |
| Icons | React Icons |
| Styling | Plain CSS (custom design system, no UI library) |
| Linting | ESLint with React Hooks plugin |
| Deployment | Vercel |

---

## Getting Started

**Requirements:** Node.js 18 or newer.

```bash
# 1. Open the project folder
cd Chineesefood

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the local address shown in the terminal (usually `http://localhost:5173`).

### Other commands

```bash
npm run build     # create a production build
npm run preview   # preview the production build locally
npm run lint      # check the code with ESLint
```

---

## Project Structure

```
src/
├── assets/        # images used by the pages
├── components/    # Navbar, Footer and shared pieces
├── data/          # recipes.js (list data) and recipeDetails.js (ingredients, steps)
├── pages/         # Home, Recipes, RecipeDetail, About, Contact, NotFound
├── styles/        # global and page styles
└── utils/         # image helpers
```

---

## Deployment

The app is deployed on [Vercel](https://vercel.com/). Every push to the main branch builds and publishes automatically.

---

## Author

**Mehreen Khalid**: React.js and Full Stack Web Developer
