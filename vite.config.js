import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Update this to match your new repo name
  base: '/myportfolio/', 
  build: {
    outDir: 'dist',
  }
})
