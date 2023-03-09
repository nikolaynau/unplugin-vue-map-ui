import type { TypeImport } from 'unplugin-vue-components';
import { allComponents, libraryName } from '../../config';

export default <TypeImport>{
  from: libraryName,
  names: allComponents
};
