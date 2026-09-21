import { defineConfig } from 'vite';

// The Pages export is static. Preview it without starting a Workers runtime.
export default defineConfig({
  build: { outDir: 'dist/client' },
});
