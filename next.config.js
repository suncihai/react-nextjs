/* eslint-disable */
const withCss = require('@zeit/next-css')

/* eslint-disable */
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

// // fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack (config) {
    const { module = {} } = config
    return {
      ...config,
      module: {
        ...module,
        rules: [
          ...(module.rules || []),
          {
            test: /\.(png|woff|woff2|eot|ttf|gif|jpg|ico|otf|svg|mp4)$/,
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              publicPath: `/_next/static/files`,
              outputPath: 'static/files'
            }
          }
        ]
      }
    }
  }
}))