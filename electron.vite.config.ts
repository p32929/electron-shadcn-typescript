import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'

// import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src')
      }
    },
    plugins: [
      // Old
      // react(),

      // SWC
      react({
        tsDecorators: true
      })
    ]
  }
})
