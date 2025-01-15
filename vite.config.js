import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    cssCodeSplit: false, // Incluye CSS en el JS
    rollupOptions: {
      output: {
        manualChunks: undefined, // Desactiva la división de código
        entryFileNames: 'assets/form.js', // Nombra el archivo JS de salida
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
