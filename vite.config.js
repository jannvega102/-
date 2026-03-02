import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // This must match your repo name '-' exactly
  base: '/-/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
