import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Base path: 
  // - No Vercel: '/' (raiz, sem subdiretório)
  // - No GitHub Pages: '/your-digital-corner/' (nome do repositório)
  // O Vercel não precisa de base path, então usamos '/' como padrão
  // O GitHub Actions sobrescreve com VITE_BASE_PATH
  const base = process.env.VITE_BASE_PATH || '/';
  
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
