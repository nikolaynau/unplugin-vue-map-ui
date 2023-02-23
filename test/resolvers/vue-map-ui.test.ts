import { afterEach, describe, expect, it } from 'vitest';
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import { deleteSync } from 'del';
import Components from 'unplugin-vue-components/vite';
import { VueMapUiResolver } from '../../src';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const appDir = path.resolve(__dirname, '../fixtures/app');
const distDir = path.resolve(appDir, './dist');

describe('VueMapUiResolver', () => {
  afterEach(() => {
    deleteSync(distDir);
  });

  it('components should be auto imported', async () => {
    const result: any = await build({
      root: appDir,
      plugins: [
        vue(),
        Components({
          resolvers: [VueMapUiResolver()]
        })
      ],
      build: {
        minify: false,
        rollupOptions: {
          external: ['vue', 'vue-map-ui']
        }
      }
    });

    expect(result.output[0].code).toContain(
      'import { VMapOsmTileLayer, VMap } from "vue-map-ui"'
    );
    expect(result.output[0].code).toContain(
      'const _component_VMapOsmTileLayer = VMapOsmTileLayer'
    );
    expect(result.output[0].code).toContain('const _component_VMap = VMap');
  });
});
