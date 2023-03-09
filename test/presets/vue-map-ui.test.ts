import { afterEach, describe, expect, it } from 'vitest';
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import vue from '@vitejs/plugin-vue';
import { deleteSync } from 'del';
import Components from 'unplugin-vue-components/vite';
import { VueMapUiPreset } from '../../src';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const appDir = path.resolve(__dirname, '../fixtures/app');
const distDir = path.resolve(appDir, './dist');
const dtsFile = path.resolve(appDir, 'components.d.ts');

describe('VueMapUiPreset', () => {
  afterEach(() => {
    deleteSync(distDir);
    deleteSync(dtsFile);
  });

  it('should be added types in dts', async () => {
    await build({
      root: appDir,
      plugins: [
        vue(),
        Components({
          types: [VueMapUiPreset]
        })
      ],
      build: {
        minify: false,
        rollupOptions: {
          external: ['vue', 'vue-map-ui']
        }
      }
    });

    const data = await readFile(dtsFile, 'utf-8');
    expect(data).toMatchSnapshot();
  });
});
