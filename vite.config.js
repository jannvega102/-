import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // This MUST match your repo name '-'
  base: '/-/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
