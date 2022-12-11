import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { splitVendorChunkPlugin } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  define: {
    'process.env':  process.env
  },
  build: {
    chunkSizeWarningLimit: 16000,
    outDir: 'build',
    
  },
})
