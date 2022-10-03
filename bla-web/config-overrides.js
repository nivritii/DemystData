const path = require('path');
const { removeModuleScopePlugin, override } = require('customize-cra');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const resolvePolyfills = config => {
    config.plugins.push(new NodePolyfillPlugin());
    config.resolve.fallback = {
      'fs': false,
      'child_process': false
    };
    config.resolve.alias = {
      'react': path.resolve('./node_modules/react')
    };
    return config;
  };

  module.exports = override(
    removeModuleScopePlugin(),
    resolvePolyfills
  );