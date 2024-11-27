import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'client-key.pem')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'client-cert.pem'))
    // },
    proxy: {
      '/api': {
        target: 'http://localhost:8443',
        changeOrigin: true,
        secure: true,
      }
    }
  }
});
