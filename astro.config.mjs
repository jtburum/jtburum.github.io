import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://tinytechtuts.com"
  // redirects: {
  //   '/2023-ecto-trigger-update-without-changeset/': {
  //     status: 301,
  //     destination: 'https://google.com'
  //   }
  // }
});