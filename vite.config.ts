import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ViteEnvCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
