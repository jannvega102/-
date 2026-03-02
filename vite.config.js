import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /** * This is the "Magic Fix" for GitHub Pages 
   * It tells Vite that the app is hosted in the /-/ subfolder
   */
  base: '/-/', 
  build: {
    outDir: 'dist',
  }
})
