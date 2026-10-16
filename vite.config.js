import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync, existsSync } from 'node:fs';

const templateDirs = existsSync(resolve(process.cwd(), 'templates'))
  ? readdirSync(resolve(process.cwd(), 'templates'), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => [entry.name, resolve(process.cwd(), 'templates', entry.name, 'index.html')])
      .filter(([, file]) => existsSync(file))
  : [];

const input = { main: resolve(process.cwd(), 'index.html') };
for (const [name, file] of templateDirs) input[name.replaceAll('-', '_')] = file;

export default defineConfig({
  base: '/',
  build: { rollupOptions: { input } }
});
