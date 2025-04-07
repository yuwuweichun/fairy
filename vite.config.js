import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Fairy/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './public') // 配置 @ 指向 public 文件夹
    }
  }
})
