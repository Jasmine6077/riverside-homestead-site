import { defineConfig } from "astro/config";

export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
  },
  vite: {
    server: {
      hmr: { overlay: false },
    },
  },
});