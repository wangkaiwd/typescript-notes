const {
  override,
  fixBabelImports,
  disableEsLint,
  addWebpackAlias,
  addDecoratorsLegacy,
  addBundleVisualizer,
} = require('customize-cra');
const WebpackBar = require('webpackbar');

// const addMyPlugin = config => {
//   config.plugins.push(new WebpackBar());
//   return config;
// };

const path = require('path');
const getPath = dir => path.resolve(__dirname, `src/${dir}`);
module.exports = override(
  // addMyPlugin(),
  disableEsLint(), // 禁用eslint
  addDecoratorsLegacy(), // 使用修饰器
  addBundleVisualizer(), // 打包资源分析
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': getPath(),
    'components': getPath('components'),
    'layout': getPath('layout'),
    'views': getPath('views'),
    'assets': getPath('assets'),
    'styles': getPath('styles'),
    'imgs': getPath('imgs'),
    'router': getPath('router'),
    'store': getPath('store')
  })
);
