import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    EnvironmentPlugin({

      AUTH0_DOMAIN: '',
      AUTH0_CLIENT_ID:'',
      AUTH0_AUDIENCE:'',
    }),
  ],
  server: {
    host: true,
    port: 8000,
  },
});
