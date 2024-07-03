import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/components"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "ui-gallery",
      fileName: (format) => `ui-gallery.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: `assets/[name]-[hash][extname]`,
      },
    },
    cssCodeSplit: false,
    outDir: "package-dist",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
