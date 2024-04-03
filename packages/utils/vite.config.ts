import { glob } from "glob";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: glob.sync(resolve(__dirname, "src/*.ts")),
      formats: ["es", "cjs"],
      fileName: (format, name) => `${name}.${format === "es" ? "mjs" : "cjs"}`,
    },
  },
  plugins: [dts()],
});
