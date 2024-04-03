import { defineConfig, type Options } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig((options: Options) => ({
  minify: env === "production",
  entryPoints: ["src/index.ts"],
  splitting: true,
  clean: true,
  format: ["esm", "cjs"],
  ...options,
}));
