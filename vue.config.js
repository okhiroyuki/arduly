const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  publicPath: 'src',
  outputDir: 'docs',
  devServer: {
    port: 3000,
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        {
          from: '/Users/okhiroyuki/Documents/github/arduly/node_modules/blockly/media',
          to: '/Users/okhiroyuki/Documents/github/arduly/dist/media',
        },
      ]),
    ],
  },
  transpileDependencies: [
    'vuetify',
  ],
};
