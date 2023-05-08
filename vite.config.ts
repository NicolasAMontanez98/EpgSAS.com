import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'vite-plugin-sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sass({
      include: /\.scss$/,
    })
  ],
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
