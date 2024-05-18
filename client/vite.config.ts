import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "@svgr/rollup";
import sass from "sass";

export default defineConfig({
  // depending on your application, base can also be "/"
  base: "",
  plugins: [react(), viteTsconfigPaths(), svgr()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  preview: {
    open: false, // Prevents the browser from opening during preview
    host: true, // Makes the preview available on the network
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  assetsInclude: ["**/*.jpeg", "**/*.jpg", "**/*.png", "**/*.svg"],
});
