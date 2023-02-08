# unplugin-vue3-map-ui [![npm version](https://img.shields.io/npm/v/unplugin-vue3-map-ui.svg)](https://npmjs.org/package/unplugin-vue3-map-ui)

> On-demand components auto importing for [vue3-map-ui](https://github.com/nikolaynau/vue3-map-ui).

## Installation

```bash
npm install -D unplugin-vue3-map-ui unplugin-vue-components
```

<details>
<summary>Vite</summary>
<br>

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { Vue3MapUiResolver } from 'unplugin-vue3-map-ui';

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [Vue3MapUiResolver()]
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
const { Vue3MapUiResolver } = require('unplugin-vue3-map-ui');

module.exports = {
  // ...
  plugins: [
    Components({
      resolvers: [Vue3MapUiResolver()]
    })
  ]
};
```

<br>
</details>

## Usage

It will automatically turn this

```html
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

```html
<script setup>
import { VMap, VMapOsmTileLayer } from 'vue3-map-ui';
//...
</script>

<template>
  <VMap>
    <VMapOsmTileLayer />
  </VMap>
</template>
```

## License

Licensed under the [MIT License](./LICENSE).
