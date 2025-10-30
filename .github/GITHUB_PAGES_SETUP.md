# GitHub Pages Setup Instructions

Follow these steps to enable GitHub Pages for this repository.

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/andmev/embassy-rust-tutorial`
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (not "Deploy from a branch")
5. Click **Save** (if there's a save button)

## Step 2: Verify Workflow Permissions

1. While in **Settings**, click on **Actions** → **General** in the left sidebar
2. Scroll down to **Workflow permissions**
3. Ensure the following is selected:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## Step 3: Trigger the First Deployment

### Option A: Push a Commit (Recommended)
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Option B: Manual Trigger
1. Go to the **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

## Step 4: Monitor Deployment

1. Go to the **Actions** tab
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait for it to complete (usually 1-2 minutes)
4. A green checkmark ✅ means success

## Step 5: Access Your Site

Once deployed, your site will be available at:

**🌐 https://andmev.github.io/embassy-rust-tutorial/**

Available in three languages:
- English: https://andmev.github.io/embassy-rust-tutorial/
- Spanish: https://andmev.github.io/embassy-rust-tutorial/es/
- German: https://andmev.github.io/embassy-rust-tutorial/de/

## Troubleshooting

### Workflow Fails

**Error: "Resource not accessible by integration"**
- Go to Settings → Actions → General
- Enable "Read and write permissions"

**Error: "Page build failed"**
- Verify GitHub Pages source is set to "GitHub Actions"
- Check that `.nojekyll` file exists in `public/` directory

### 404 Page Not Found

- Wait 2-3 minutes after deployment completes
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check the Actions tab to ensure deployment succeeded

### Site Shows But Styles Are Broken

- Verify `base: "/embassy-rust-tutorial"` is set in `astro.config.mjs`
- Ensure `.nojekyll` file exists in `public/` directory
- Clear your browser cache

## Repository Visibility

- ✅ **Public repositories**: GitHub Pages works out of the box
- ⚠️ **Private repositories**: Requires GitHub Pro, Team, or Enterprise

---

## Next Steps After Setup

Once your site is live:
1. Add the site URL to your repository description
2. Update the README.md with the live link
3. Share your documentation site! 🎉

## Support

If you encounter issues:
1. Check the [Actions](https://github.com/andmev/embassy-rust-tutorial/actions) tab for error logs
2. Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Verify the workflow file at `.github/workflows/deploy.yml`
