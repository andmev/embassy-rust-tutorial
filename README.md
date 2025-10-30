# Embassy Rust Tutorial Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A multilingual documentation site built with Astro and Starlight, deployed to GitHub Pages.

🌐 **Live Site**: https://andmev.github.io/embassy-rust-tutorial/

## 🌍 Available Languages

- 🇬🇧 English (default) - `/`
- 🇪🇸 Spanish - `/es/`
- 🇩🇪 German - `/de/`

## 🚀 Project Structure

```
.
├── public/
│   └── .nojekyll              # Prevents GitHub Pages Jekyll processing
├── src/
│   ├── assets/                # Images and static assets
│   ├── components/            # Reusable components
│   │   └── LanguageSwitcher.astro
│   ├── content/
│   │   └── docs/              # Documentation content
│   │       ├── index.mdx      # English homepage
│   │       ├── es/            # Spanish content
│   │       ├── de/            # German content
│   │       ├── guides/        # Guide pages
│   │       └── reference/     # Reference pages
│   ├── i18n/                  # Internationalization utilities
│   │   ├── ui.ts              # Translation strings
│   │   ├── utils.ts           # i18n helper functions
│   │   └── README.md          # i18n documentation
│   └── content.config.ts
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
├── astro.config.mjs           # Astro & Starlight configuration
├── I18N_SETUP.md              # Internationalization guide
├── DEPLOYMENT.md              # Deployment guide
└── package.json
```

Content files (`.md` or `.mdx`) in `src/content/docs/` are automatically exposed as routes.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🌐 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

- **Production URL**: https://andmev.github.io/embassy-rust-tutorial/
- **Deployment**: Automatic on push to `main` branch
- **Documentation**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

### Key Configuration

The site uses the same configuration for both local development and production:

```javascript
// astro.config.mjs
{
  site: "https://andmev.github.io",
  base: "/embassy-rust-tutorial",
  // Astro handles this automatically for dev vs production!
}
```

## 🌍 Internationalization (i18n)

This project uses Astro's native i18n routing with Starlight:

- **System**: Astro i18n routing (not Starlight locales)
- **Languages**: English (default), Spanish, German
- **Custom translations**: Available in `src/i18n/`
- **Documentation**: See [I18N_SETUP.md](./I18N_SETUP.md)

### URL Structure

- English: `/` → `/guides/example/`
- Spanish: `/es/` → `/es/guides/example/`
- German: `/de/` → `/de/guides/example/`

## 📚 Documentation

- [I18N_SETUP.md](./I18N_SETUP.md) - Complete i18n guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [.github/GITHUB_PAGES_SETUP.md](./.github/GITHUB_PAGES_SETUP.md) - GitHub Pages setup

## 👀 Learn More

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
