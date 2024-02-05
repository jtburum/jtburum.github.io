import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
console.log("did define config get called?")
export default defineConfig({
  integrations: [sitemap()],
  site: "https://tinytechtuts.com",
  trailingSlash: "never"
});