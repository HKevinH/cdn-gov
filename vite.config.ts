import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// vite.config.ts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@styles", replacement: path.resolve(__dirname, "css") },
    ],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        format: "es",
        preserveModules: true,
        entryFileNames: "[name].js",
      },
    },
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      formats: ["es"],
    },
  },
});
