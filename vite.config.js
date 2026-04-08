import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        characters: resolve(__dirname, 'characters.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        martin: resolve(__dirname, 'martin.html'),
        about_autor: resolve(__dirname, 'about_autor.html'),
        test: resolve(__dirname, 'test.html')
      }
    }
  }
});