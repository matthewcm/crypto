import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	server: {
		host: true,
		hmr: {
			port: 3001,
		},
		port: 8000,
	},
});
