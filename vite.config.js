import {resolve} from 'path'
import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'



let root = resolve(__dirname, 'src')
let outDir = resolve(__dirname, 'dist')


export default defineConfig({
  root: root, 
  base: process.env.NODE_ENV === 'production' ? '/prod-base-url' : '/',
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(process.env.NODE_ENV === 'production' ? '/prod-base-url' : '/')
  },
  plugins: [react(), splitVendorChunkPlugin()],
  build: { 
    outDir,
    emptyOutDir: true,
  },



  server: {
    host: '0.0.0.0',
    port: 3002,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
});


