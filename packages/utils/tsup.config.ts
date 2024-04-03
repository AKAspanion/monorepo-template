import { defineConfig, type Options } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig((options: Options) => ({
  splitting: true,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: env === "production",
  bundle: env === "production",
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  watch: env === "development",
  target: "es2020",
  outDir: env === "production" ? "dist" : "lib",
  entry: ["src/**/*.ts", "!src/**/__tests__/**", "!src/**/*.test.*"], //include all files under src
  ...options,
}));
