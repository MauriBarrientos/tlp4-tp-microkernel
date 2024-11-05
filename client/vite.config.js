import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
>>>>>>> origin/fabian
})
