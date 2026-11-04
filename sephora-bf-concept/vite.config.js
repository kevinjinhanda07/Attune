import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    lib: { entry: 'src/main.jsx', formats: ['iife'], name: 'page', fileName: () => 'assets/page.js' },
  },
  define: { 'process.env.NODE_ENV': '"production"' },
})
