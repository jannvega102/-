import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/-/', // This matches your repo name exactly
  build: {
    outDir: 'dist'
  }
})
