import { afterEach, describe, expect, it } from 'vitest';
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import { deleteSync } from 'del';
import Components from 'unplugin-vue-components/vite';
import { Vue3MapUiResolver } from '../../src';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const appDir = path.resolve(__dirname, '../fixtures/app');
const distDir = path.resolve(appDir, './dist');

describe('Vue3 Map UI Resolver', () => {
  afterEach(() => {
    deleteSync(distDir);
  });

  it('components should be auto imported', async () => {
    const result: any = await build({
      root: appDir,
      plugins: [
        vue(),
        Components({
          resolvers: [Vue3MapUiResolver()]
        })
      ],
      build: {
        minify: false,
        rollupOptions: {
          external: ['vue', 'vue3-map-ui']
        }
      }
    });

    expect(result.output[0].code).toContain(
      'import { VMapOsmTileLayer, VMap } from "vue3-map-ui"'
    );
    expect(result.output[0].code).toContain(
      'const _component_VMapOsmTileLayer = VMapOsmTileLayer'
    );
    expect(result.output[0].code).toContain('const _component_VMap = VMap');
  });
});
