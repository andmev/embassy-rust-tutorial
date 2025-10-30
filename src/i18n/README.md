# Internationalization (i18n)

This directory contains custom translation files for UI strings that are not covered by Starlight's built-in translations.

## Usage

In your Astro components or pages, you can use the translation utilities:

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('nav.home')}</h1>
<p>{t('footer.copyright')}</p>
```

## Adding New Languages

1. Add the language to `ui.ts` in the `languages` object
2. Add translations for all keys in the `ui` object
3. Update `astro.config.mjs` to include the new locale in both Astro and Starlight configurations

## Adding New Translation Keys

Add the key and its translations for all languages in the `ui` object in `ui.ts`:

```typescript
export const ui = {
  en: {
    'my.new.key': 'My new translation',
    // ... other keys
  },
  es: {
    'my.new.key': 'Mi nueva traducción',
    // ... other keys
  },
  de: {
    'my.new.key': 'Meine neue Übersetzung',
    // ... other keys
  },
};
```
