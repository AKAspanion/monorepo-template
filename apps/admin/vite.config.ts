import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3001,
    host: true,
  },
  clearScreen: false,
  plugins: [react()],
  build: {
    rollupOptions: {
      onLog(level, log, handler) {
        const cause = log.cause as any;
        if (
          cause &&
          cause?.message === `Can't resolve original location of error.`
        ) {
          return;
        }
        handler(level, log);
      },
    },
  },
});
