# Internationalization Setup

This project supports internationalization (i18n) in three languages: English (default), Spanish, and German.

## Structure

The internationalization setup consists of two main parts:

### 1. Astro i18n Configuration (astro.config.mjs)

This project uses **Astro's native i18n routing** instead of Starlight's locales configuration:

- **Default locale**: English (`en`) - no prefix in URL
- **Available locales**: 
  - English (`en`) - `/guides/example/`
  - Spanish (`es`) - `/es/guides/example/`
  - German (`de`) - `/de/guides/example/`

**Important**: This project uses Astro's `i18n` configuration, NOT Starlight's `locales` configuration. You cannot use both simultaneously.

The configuration includes:
- Astro's built-in routing for localized URLs
- Sidebar translations in Starlight
- SEO meta tags in the appropriate language

### 2. Custom i18n Utilities (src/i18n/)

For custom UI strings not covered by Starlight:

- `src/i18n/ui.ts` - Translation strings dictionary
- `src/i18n/utils.ts` - Helper functions to use translations
- `src/i18n/README.md` - Documentation for custom i18n

## Content Structure

Content files are organized by language:

```
src/content/docs/
├── index.mdx           # English homepage
├── guides/
│   └── example.md      # English guide
├── reference/
│   └── example.md      # English reference
├── es/                 # Spanish content
│   ├── index.mdx
│   ├── guides/
│   └── reference/
└── de/                 # German content
    ├── index.mdx
    ├── guides/
    └── reference/
```

## Creating Translated Pages

### For Starlight Content

1. Create a directory named after your locale code in `src/content/docs/` (e.g., `es/`, `de/`)
2. Mirror the English content structure within that directory
3. Translate the frontmatter and content

Example:
```markdown
---
title: Guía de ejemplo
description: Una guía en mi nuevo sitio de documentación Starlight.
---

Content in Spanish...
```

### URL Structure

- English: `/guides/example/`
- Spanish: `/es/guides/example/`
- German: `/de/guides/example/`

## Using Custom Translations

In your Astro components:

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<p>{t('footer.copyright')}</p>
```

## Language Switcher

A simple language switcher component is provided at `src/components/LanguageSwitcher.astro`. You can import and use it in your custom pages:

```astro
---
import LanguageSwitcher from '../components/LanguageSwitcher.astro';
---

<LanguageSwitcher />
```

The language switcher automatically:
- Detects the current locale from the URL
- Preserves the current page path when switching languages
- Highlights the active language

## Adding a New Language

1. Update Astro's i18n config in `astro.config.mjs`:
```javascript
i18n: {
  defaultLocale: "en",
  locales: ["en", "de", "es", "fr"], // Add new locale
  routing: {
    prefixDefaultLocale: false,
  },
}
```

2. Add translations to `src/i18n/ui.ts`:
```typescript
fr: {
  'nav.home': 'Accueil',
  // ... all other keys
}
```

3. Add sidebar translations in Starlight config (optional):
```javascript
sidebar: [
  {
    label: "Guides",
    translations: {
      es: "Guías",
      de: "Anleitungen",
      fr: "Guides", // Add French
    },
    // ...
  }
]
```

4. Create content directory: `src/content/docs/fr/`

## Features

- ✅ Astro's native i18n routing
- ✅ Localized sidebar labels (via Starlight's translations)
- ✅ SEO-friendly URLs
- ✅ Automatic language detection from URL path
- ✅ Fallback to default language
- ✅ Custom UI string translations
- ⚠️  Note: Language switcher must be implemented manually (Starlight's built-in switcher requires Starlight locales config)

## Testing

Run the dev server:

```bash
npm run dev
```

Visit the different language versions:
- http://localhost:4321/ (English - default, no prefix)
- http://localhost:4321/es/ (Spanish)
- http://localhost:4321/de/ (German)

To test the language switcher, add the `LanguageSwitcher` component to your pages or create a custom layout that includes it.
