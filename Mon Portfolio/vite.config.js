import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ou '/' si tu déploies à la racine, mais './' évite parfois des problèmes de chemins relatifs
})
