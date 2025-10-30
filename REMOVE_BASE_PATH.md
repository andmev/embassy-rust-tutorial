# How to Remove the Base Path from Your URL

Currently, your site is deployed at:
- `https://andmev.github.io/embassy-rust-tutorial/`

If you want to remove `/embassy-rust-tutorial/` and have your site at just:
- `https://andmev.github.io/`

You have **two options**:

---

## Option 1: Create a User/Organization Site (Recommended)

GitHub Pages offers "User Sites" that are served from the root domain without a repository name.

### Steps:

1. **Create a new repository named exactly**: `andmev.github.io`
   - The repository name MUST match your username exactly
   - Format: `<username>.github.io`

2. **Move your code to the new repository**:
   ```bash
   # Clone the new repository
   git clone https://github.com/andmev/andmev.github.io.git
   
   # Copy all your project files to the new repo
   # (or just change your git remote)
   
   # Update remote if keeping current local repo
   git remote set-url origin https://github.com/andmev/andmev.github.io.git
   ```

3. **Update `astro.config.mjs`**:
   ```javascript
   export default defineConfig({
     site: "https://andmev.github.io",
     // Remove or comment out the base option:
     // base: "/embassy-rust-tutorial",
     i18n: {
       // ... rest of config stays the same
     }
   });
   ```

4. **Push and deploy**:
   ```bash
   git add .
   git commit -m "Move to user site"
   git push origin main
   ```

5. **Your site will be available at**: `https://andmev.github.io/`

### Pros:
- ✅ Clean URL without repository name
- ✅ Looks more professional
- ✅ Easier to remember and share

### Cons:
- ⚠️ You can only have ONE user site per GitHub account
- ⚠️ Other projects will still need the `/repository-name/` format

---

## Option 2: Use a Custom Domain

If you own a domain name, you can point it to your GitHub Pages site.

### Steps:

1. **Buy a domain** (e.g., from Namecheap, Google Domains, Cloudflare)
   - Example: `embassy-rust.dev`

2. **Add a `CNAME` file**:
   ```bash
   # In your public/ directory
   echo "embassy-rust.dev" > public/CNAME
   ```

3. **Configure DNS** at your domain registrar:
   - Add a `CNAME` record pointing to `andmev.github.io`
   - Or add `A` records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

4. **Update `astro.config.mjs`**:
   ```javascript
   export default defineConfig({
     site: "https://embassy-rust.dev",
     // Remove the base option
     i18n: {
       // ... rest of config
     }
   });
   ```

5. **Configure in GitHub**:
   - Go to repository **Settings** → **Pages**
   - Enter your custom domain
   - Enable "Enforce HTTPS"

### Pros:
- ✅ Completely custom URL
- ✅ Professional appearance
- ✅ Can use this approach for any repository

### Cons:
- 💰 Costs money for the domain (~$10-20/year)
- ⏱️ DNS propagation takes time (up to 48 hours)

---

## Option 3: Keep Current Setup (Easiest)

Keep the current configuration with the base path:
- URL: `https://andmev.github.io/embassy-rust-tutorial/`

### Pros:
- ✅ No changes needed
- ✅ Can have multiple project sites
- ✅ Free and simple

### Cons:
- ⚠️ URL includes repository name

---

## Comparison Table

| Option | URL | Cost | Setup Difficulty | Best For |
|--------|-----|------|------------------|----------|
| User Site | `andmev.github.io` | Free | Easy | Main portfolio/docs site |
| Custom Domain | `embassy-rust.dev` | ~$10-20/year | Medium | Professional projects |
| Project Site (current) | `andmev.github.io/embassy-rust-tutorial` | Free | Easiest | Multiple projects |

---

## My Recommendation

**If this is your main documentation site**: Go with **Option 1** (User Site)
- Create the `andmev.github.io` repository
- Move this project there
- Get a clean URL for free

**If you want a custom brand**: Go with **Option 2** (Custom Domain)
- Buy a domain like `embassy-rust.dev`
- More professional and memorable

**If you have multiple projects to showcase**: Keep **current setup**
- Each project gets its own URL
- Easy to manage multiple sites

---

## After Choosing

Once you decide, update these files:
1. `astro.config.mjs` - Update `site` and remove/adjust `base`
2. `README.md` - Update live site URL
3. `DEPLOYMENT.md` - Update deployment instructions
4. `.github/GITHUB_PAGES_SETUP.md` - Update setup guide

Let me know which option you prefer, and I can help you implement it! 🚀
