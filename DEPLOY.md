# Deploy to GitHub Pages

This project is a **Vue 3 + Tailwind CSS** app built with Vite. Deployment uses a build step and GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output is in the `dist/` folder. Preview with:

```bash
npm run preview
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. `https://github.com/yourusername/your-repo-name`).

2. In the repo go to **Settings** → **Pages**.

3. Under **Build and deployment**:
   - **Source**: GitHub Actions (not “Deploy from a branch”).

4. Push to the `main` branch (or trigger the workflow). The **Deploy to GitHub Pages** workflow will:
   - Install dependencies
   - Run `npm run build`
   - Deploy the `dist/` folder to GitHub Pages

5. Your site will be at:
   - **Project site**: `https://yourusername.github.io/your-repo-name/`

### If the site is in a subpath (project repo)

`vite.config.js` uses `base: './'` so assets load correctly on `https://username.github.io/repo-name/`. If you use a custom base path, set it in `vite.config.js`:

```js
export default defineConfig({
  plugins: [vue()],
  base: '/your-repo-name/',
})
```

## Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Tailwind CSS** (utility classes, theme in `tailwind.config.js`)
- **Vite** (build and dev server)

The previous vanilla `scripts.js` and `styles.css` have been replaced by Vue components and Tailwind; the original files are no longer used by the app.
