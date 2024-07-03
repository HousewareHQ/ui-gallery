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
      exclude: ["**/*.css"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "ui-gallery",
      fileName: "ui-gallery",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
    outDir: "package-dist",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
