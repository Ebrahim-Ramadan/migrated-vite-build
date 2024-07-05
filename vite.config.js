import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import mdx from 'vite-plugin-mdx'

export default defineConfig({  
  plugins: [
    react(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('src', import.meta.url))
      },
      {
        find: '~',
        replacement: fileURLToPath(new URL('utils', import.meta.url))
      },
    ]
  }
})