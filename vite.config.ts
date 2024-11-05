import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
    ],
  },
  build: {
    outDir: "dist/js",
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
        dir: "dist/js",
      },
    },
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      formats: ["es"],
    },
  },
});
