import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// Served from https://<user>.github.io/STash-CV/, so assets need this base.
export default defineConfig({
  base: "/STash-CV/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});
