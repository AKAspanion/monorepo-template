import { defineConfig, type Options } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig((options: Options) => ({
  splitting: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: env === "production",
  external: ["react"],
  banner: {
    js: '"use client"',
  },
  entry: ["./src/**/*.tsx", "!src/**/__tests__/**", "!src/**/*.test.*"], //include all files under src
  ...options,
}));
