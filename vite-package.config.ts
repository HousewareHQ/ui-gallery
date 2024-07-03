import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

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
