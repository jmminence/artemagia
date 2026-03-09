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
      // Inyectar clave en el script del cliente (evita que falle import.meta.env en Astro)
      __WEB3FORMS_ACCESS_KEY__: JSON.stringify(env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''),
    },
  },
});
