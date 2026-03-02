import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages URL will be: username.github.io/-/
  base: '/-/', 
  build: {
    outDir: 'dist',
  }
})
