import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/edge-functions";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://notioncommerce.com",
  output: "server",
  adapter: netlify(),
  integrations: [mdx(), sitemap(), tailwind(), react()],
});