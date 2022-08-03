/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@routes': path.resolve(__dirname, 'src/routes'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@wrappers': path.resolve(__dirname, 'src/components/wrappers'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@type': path.resolve(__dirname, 'src/types'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
  }),
);
