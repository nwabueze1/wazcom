import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: [
      { find: "__generated__", replacement: resolve(__dirname, "__generated__") },
      { find: "core", replacement: resolve(__dirname, "src/core") },
      { find: "fonts", replacement: resolve(__dirname, "src/fonts") },
      { find: "gql", replacement: resolve(__dirname, "src/gql") },
      { find: "helpers", replacement: resolve(__dirname, "src/helpers") },
      { find: "io", replacement: resolve(__dirname, "src/io") },
      { find: "stories", replacement: resolve(__dirname, "src/stories") },
      { find: "templates", replacement: resolve(__dirname, "src/templates") },
      { find: "utilities", replacement: resolve(__dirname, "src/utilities") },
      { find: "view", replacement: resolve(__dirname, "src/view") },
      { find: "src", replacement: resolve(__dirname, "src") },
    ]
  },
})