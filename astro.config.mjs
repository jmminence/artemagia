// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// Cargar .env para que PUBLIC_* esté disponible (evita problemas de timing en dev)
const env = loadEnv(process.env.MODE ?? 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    define: {
      // Asegura que la clave Web3Forms esté disponible en el cliente
      'import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY': JSON.stringify(
        env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''
      ),
    },
  },
});
