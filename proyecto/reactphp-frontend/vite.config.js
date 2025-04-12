import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,              // Exponer para poder acceder desde fuera del contenedor
    port: 5173,              // El mismo puerto que exponés en docker-compose
    strictPort: true,
    watch: {
      usePolling: true       // Importante dentro de Docker para que los cambios se detecten bien
    },
    fs: {
      strict: false
    },
    historyApiFallback: true // 🔥 Esto soluciona el error 404 al refrescar rutas
  }
})
