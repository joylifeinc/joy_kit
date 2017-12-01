const w = require('../webpack.config');

const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules = [...config.module.rules, w().module.rules[0]];
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
