// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://andmev.github.io",
  base: "/embassy-rust-tutorial",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          translations: {
            es: "Guías",
            de: "Anleitungen",
          },
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          translations: {
            es: "Referencia",
            de: "Referenz",
          },
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    mdx(),
  ],
});
