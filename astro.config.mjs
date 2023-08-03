import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/edge';


// https://astro.build/config
export default defineConfig({
  site: "https://mhussain.net",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), sitemap()],
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  }
});