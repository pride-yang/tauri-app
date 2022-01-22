import vue from './vue';
import iconify from './iconify';
import windicss from './windicss';
import visualizer from './visualizer';
import autoImport from './autoImport';

const plugins = [vue, ...iconify, autoImport, windicss, visualizer];

export default plugins;
