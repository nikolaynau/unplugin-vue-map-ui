import type { ComponentResolver } from 'unplugin-vue-components';

export function Vue3MapUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: name => {
      if (name.match(/^VMap[A-Z]?/)) {
        return {
          name,
          from: 'vue3-map-ui'
        };
      }
    }
  };
}
