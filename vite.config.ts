import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 2025-08-08, 김병현 수정 - Docker 컨테이너에서 외부 접근 허용
    host: '0.0.0.0',
    port: 5173
  }
})
