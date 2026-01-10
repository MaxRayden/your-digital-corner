import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Base path para GitHub Pages
  // IMPORTANTE: Deve corresponder ao nome do repositório no GitHub
  // O GitHub Actions sobrescreve com VITE_BASE_PATH, mas usamos '/your-digital-corner/' como padrão
  const base = process.env.VITE_BASE_PATH || '/your-digital-corner/';
  
  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
