// Vite 빌드 경로, React 변환, Vitest 실행 환경을 설정합니다.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/react2022/' : '/',
  plugins: [react({ include: /\.[jt]sx?$/ })],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
});