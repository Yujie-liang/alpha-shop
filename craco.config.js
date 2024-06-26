const path = require('path')
const webpack = require('webpack');
module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src")
    },
    // 这种方式是无效的，错误写法
    // resolve: {
    //   fallback: {
    //     "path": false,
    //     "util": false,
    //     ...
    //   }
    // },
    // 这种方式才对的
    configure: (webpackConfig, { env, paths }) => {
      // eslint-disable-next-line no-param-reassign
      webpackConfig.resolve.fallback = {
        "path": false,
        "util": false,
        "url": false,
        "http": false,
        "https": false,
        "stream": false,
        "assert": false,
        "querystring": false,
        "zlib": false,
        "crypto": false,
        "buffer": require.resolve("buffer/"),
        "process": require.resolve("process/browser"),
        "stream": require.resolve("stream-browserify"),
        "vm": require.resolve("vm-browserify"),
      },
      webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        }),
      ]);
      return webpackConfig
    },
    // 也可以这么写
    // configure: {
    //   resolve: {
    //     fallback: {
    //       "path": false,
    //       "util": false,
    //       "url": false,
    //       "http": false,
    //       "https": false,
    //       "stream": false,
    //       "assert": false,
    //       "querystring": false,
    //       "zlib": false
    //     }
    //   }
    // }
  }
}