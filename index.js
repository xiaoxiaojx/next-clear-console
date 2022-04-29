/**
 * @param { { pure_funcs: Array<string> } } param
 * @returns
 */
module.exports = ({ pure_funcs }) => {
  return (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        const { dev } = options;

        if (!dev) {
          for (const plugin of config.plugins) {
            if (plugin.constructor.name === "UglifyJsPlugin") {
              plugin.options.uglifyOptions.compress.pure_funcs = pure_funcs;
              break;
            }
          }

          if (config.optimization && config.optimization.minimizer) {
            for (const plugin of config.optimization.minimizer) {
              if (plugin.constructor.name === "TerserPlugin") {
                plugin.options.terserOptions.compress.pure_funcs = pure_funcs;
                break;
              }
            }
          }
        }

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }
        return config;
      },
    });
  };
};
