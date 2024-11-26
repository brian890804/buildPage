import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://brian890804.github.io/buildPage",
  plugins: [react()],
});
