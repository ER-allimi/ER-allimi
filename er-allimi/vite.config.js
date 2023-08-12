import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('', './src'),
      '@assets': path.resolve('', './src/assets'),
      '@components': path.resolve('', './src/components'),
      '@constants': path.resolve('', './src/constants'),
      '@hooks': path.resolve('', './src/hooks'),
      '@pages': path.resolve('', './src/pages'),
      '@services': path.resolve('', './src/services'),
      '@stores': path.resolve('', './src/stores'),
      '@utils': path.resolve('', './src/utils'),
    }
  },
})
