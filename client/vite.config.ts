import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import taildwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [taildwindcss(), react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      lib: "/src/lib",
      utils: "/src/utils",
    },
  },
});
