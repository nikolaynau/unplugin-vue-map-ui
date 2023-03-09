import type { ComponentResolver } from 'unplugin-vue-components';
import { libraryName } from './config';

export function VueMapUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: name => {
      if (name.match(/^VMap[A-Z]?/)) {
        return {
          name,
          from: libraryName
        };
      }
    }
  };
}
