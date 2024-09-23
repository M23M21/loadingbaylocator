// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add shims to provide fallbacks for Node-specific modules
defaultConfig.resolver.extraNodeModules = {
  "node:util": require.resolve('util/'),
};

module.exports = defaultConfig;
