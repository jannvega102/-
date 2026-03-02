import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For GitHub Pages project site use: base: '/your-repo-name/'
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/',
})
