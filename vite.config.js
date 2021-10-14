import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@assets': resolve(__dirname, 'src/assets'),
			'@components': resolve(__dirname, 'src/components'),
		},
	},
  plugins: [vue()]
})
