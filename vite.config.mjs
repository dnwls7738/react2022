import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react2022/',
  plugins: [react({ include: /\.[jt]sx?$/ })],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
});