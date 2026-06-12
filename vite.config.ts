import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// Served from https://<user>.github.io/STash-CV/, so assets need this base.
export default defineConfig({
  base: "/STash-CV/",
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});
