import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      plugins: [
        import('postcss-import'),
        import('tailwindcss'),
        import('autoprefixer')
      ]
    }
  }
})
