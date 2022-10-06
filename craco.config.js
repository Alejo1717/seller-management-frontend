const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#218BCC',
              '@font-family': 'Open Sans',
              '@layout-body-background': '#F5F5F5',
              '@layout-header-background': '#F5F5F5',
              '@layout-header-height': 'auto',
              '@layout-header-padding': '0 0',
              '@layout-header-color': '@text-color',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  eslint: {
    enable: false
  },
};