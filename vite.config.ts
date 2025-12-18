import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL for production builds
  base: "/",
  
  server: {
    host: "localhost", // "::" can cause issues on some machines
    port: 8080,
    open: true,        // automatically open browser when running `npm run dev`
  },
  
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // allows import "@/components/..." style
    },
  },
  
  build: {
    outDir: "dist",  // default, but explicitly defined for clarity
  },
}));
