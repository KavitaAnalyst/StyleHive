import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/StyleHive/",
  build:{
    outDir:"dist"
  },
  plugins: [react()],
})
