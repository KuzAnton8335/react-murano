import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
// переменные для импорта файлов scss
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// allias scss fails to work
	resolve: {
		alias: {
			"@": path.resolve(__dirname, 'src'),
			"@scss": path.resolve(__dirname, 'src/scss'),
		}
	}
})
