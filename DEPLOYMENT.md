# GitHub Pages Deployment Guide

This project is configured to work seamlessly on both **local development** and **GitHub Pages** using the same configuration.

## Configuration

### astro.config.mjs

```javascript
export default defineConfig({
  site: "https://andmev.github.io",
  base: "/embassy-rust-tutorial",
  // ... rest of config
});
```

- **`site`**: Your GitHub Pages domain
- **`base`**: Your repository name (required for GitHub Pages projects)

### Key Point: Same Config for Local & Production! 🎉

Astro is smart enough to handle the `base` path differently in development and production:

- **Local Development** (`npm run dev`): 
  - Runs on `http://localhost:4321/`
  - The `base` path is automatically handled, so you browse at the root
  
- **Production** (GitHub Pages):
  - Deployed to `https://andmev.github.io/embassy-rust-tutorial/`
  - The `base` path is properly applied to all URLs

**You don't need separate configs or environment variables!** ✨

## File Structure

```
public/
  └── .nojekyll          # Prevents GitHub Pages from using Jekyll
.github/
  └── workflows/
      └── deploy.yml     # Automated deployment workflow
```

### .nojekyll File

The empty `.nojekyll` file in the `public/` directory is crucial. It tells GitHub Pages not to process your site with Jekyll, which prevents issues with files/directories starting with underscores.

## Deployment Process

### Automatic Deployment (Recommended)

The project uses GitHub Actions for automatic deployment:

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **GitHub Actions automatically**:
   - Checks out your code
   - Installs dependencies
   - Builds the site with `astro build`
   - Deploys to GitHub Pages

3. **Visit your site**:
   - https://andmev.github.io/embassy-rust-tutorial/

### GitHub Repository Settings

Ensure GitHub Pages is configured correctly:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: GitHub Actions
4. Save the settings

## Local Development

Run the development server:

```bash
npm run dev
```

Your site will be available at:
- English: http://localhost:4321/
- Spanish: http://localhost:4321/es/
- German: http://localhost:4321/de/

**Note**: Even though `base: "/embassy-rust-tutorial"` is set, Astro's dev server automatically handles this for you, so you browse at the root path locally.

## Preview Production Build Locally

To test the production build locally with the correct base path:

```bash
npm run build
npm run preview
```

This will show you exactly how your site will look on GitHub Pages.

## Scripts

Available npm scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run start` - Alias for `npm run dev`

## Internationalization (i18n) with Base Path

The i18n routing works correctly with the base path:

- **Local**:
  - English: `/`
  - Spanish: `/es/`
  - German: `/de/`

- **Production (GitHub Pages)**:
  - English: `/embassy-rust-tutorial/`
  - Spanish: `/embassy-rust-tutorial/es/`
  - German: `/embassy-rust-tutorial/de/`

Astro handles this automatically! 🚀

## Troubleshooting

### Assets not loading on GitHub Pages

Make sure:
- The `.nojekyll` file exists in `public/`
- The `base` path is set correctly in `astro.config.mjs`
- You're using Astro's built-in asset handling (imports, not hardcoded paths)

### 404 errors on GitHub Pages

- Check that GitHub Pages source is set to "GitHub Actions"
- Verify the workflow ran successfully in the Actions tab
- Ensure your repository is public (or you have GitHub Pro for private repos)

### Local development shows broken links

This shouldn't happen with the current setup, but if it does:
- Make sure you're using `npm run dev`, not `npm run preview`
- Astro's dev server ignores the `base` path for convenience

## Updating Your Site

1. Make changes to your content or code
2. Test locally with `npm run dev`
3. Commit and push to the `main` branch
4. GitHub Actions will automatically deploy
5. Wait a minute or two for the deployment to complete
6. Refresh your GitHub Pages site

## Workflow Status

Check the deployment status:
- Go to your repository on GitHub
- Click the **Actions** tab
- View the latest "Deploy to GitHub Pages" workflow run

---

**Happy deploying!** 🎉
