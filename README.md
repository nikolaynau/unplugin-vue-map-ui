# unplugin-vue-map-ui [![npm version](https://img.shields.io/npm/v/unplugin-vue-map-ui.svg)](https://npmjs.org/package/unplugin-vue-map-ui)

> On-demand components auto importing for [vue-map-ui](https://github.com/nikolaynau/vue-map-ui).

## Installation

```bash
npm install -D unplugin-vue-map-ui unplugin-vue-components
```

<details>
<summary>Vite</summary>
<br>

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { VueMapUiResolver, VueMapUiPreset } from 'unplugin-vue-map-ui';

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [VueMapUiResolver()],
      types: [VueMapUiPreset]
    })
  ]
});
```

<br>
</details>

<details>
<summary>Webpack</summary>
<br>

```ts
// webpack.config.js
const Components = require('unplugin-vue-components/webpack');
const { VueMapUiResolver, VueMapUiPreset } = require('unplugin-vue-map-ui');

module.exports = {
  // ...
  plugins: [
    Components({
      resolvers: [VueMapUiResolver()],
      types: [VueMapUiPreset]
    })
  ]
};
```

<br>
</details>

## Usage

It will automatically turn this

```vue
<script setup>
//...
</script>

<template>
  <VMap>
    <VMapOsmTileLayer />
  </VMap>
</template>
```

into this

```vue
<script setup>
import { VMap, VMapOsmTileLayer } from 'vue-map-ui';
//...
</script>

<template>
  <VMap>
    <VMapOsmTileLayer />
  </VMap>
</template>
```

## TypeScript

Make sure you also add `components.d.ts` to your `tsconfig.json` under `include`.

```js
// tsconfig.json
{
  // ...
  "include": ["components.d.ts"]
}
```

## License

Licensed under the [MIT License](./LICENSE).
