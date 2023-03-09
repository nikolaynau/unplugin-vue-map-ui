import type { TypeImport } from 'unplugin-vue-components';
import { allComponents, libraryName } from './config';

export const VueMapUiPreset: TypeImport = {
  from: libraryName,
  names: allComponents
};
