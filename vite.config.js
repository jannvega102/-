import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Use the repo name as the base path
  base: '/-/', 
  build: {
    outDir: 'dist',
  }
})
