// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Ruta del directorio del proyecto (donde está este config y el .env)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = loadEnv(process.env.MODE ?? 'development', __dirname, '');
let web3formsKey = (env.PUBLIC_WEB3FORMS_ACCESS_KEY || '').trim();

// Si loadEnv no devolvió la clave, leer .env manualmente (por si se ejecuta desde otra carpeta)
if (!web3formsKey) {
	const envPath = path.join(__dirname, '.env');
	if (fs.existsSync(envPath)) {
		const content = fs.readFileSync(envPath, 'utf-8');
		const match = content.match(/PUBLIC_WEB3FORMS_ACCESS_KEY\s*=\s*(.+)/);
		if (match) web3formsKey = match[1].trim();
	}
}

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    define: {
      // Inyectar clave en el script del cliente (evita que falle import.meta.env en Astro)
      __WEB3FORMS_ACCESS_KEY__: JSON.stringify(web3formsKey),
    },
  },
});
