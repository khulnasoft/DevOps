import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import typescript from "@rollup/plugin-typescript"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    sourcemap: true,
    minify: "esbuild",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@illa-design/select",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      plugins: [
        typescript({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          compilerOptions: {
            rootDir: path.resolve(__dirname, "src"),
            outDir: path.resolve(__dirname, "dist", "types"),
            declaration: true,
          },
          include: path.resolve(__dirname, "src/**"),
          exclude: path.resolve(__dirname, "node_modules/**"),
        }),
      ],
      external: [
        "react",
        "react-dom",
        "@emotion/react",
        "@illa-design/theme",
        "@illa-design/system",
        "@illa-design/icon",
        "@illa-design/dropdown",
        "@illa-design/input",
        "@illa-design/trigger",
        "@illa-design/input-tag",
        "@illa-design/checkbox",
        "@illa-design/empty",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "@emotion/react": "@emotion/react",
          "@illa-design/theme": "@illa-design/theme",
          "@illa-design/system": "@illa-design/system",
          "@illa-design/icon": "@illa-design/icon",
          "@illa-design/dropdown": "@illa-design/dropdown",
          "@illa-design/input": "@illa-design/input",
          "@illa-design/trigger": "@illa-design/trigger",
          "@illa-design/input-tag": "@illa-design/input-tag",
          "@illa-design/checkbox": "@illa-design/checkbox",
          "@illa-design/empty": "@illa-design/empty",
        },
      },
    },
  },
})