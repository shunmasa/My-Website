const webpack = require('webpack')
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  webpack: (config, { dev }) => {
      config.plugins.push(
          new webpack.ProvidePlugin({
              '$': 'jquery',
              'jQuery': 'jquery',
          })
      )
      return config
  },
  
  webpack(config) {

    config.resolve.modules.push(__dirname)

    return config;

  },
  api: {
    bodyParser: false,
  },
  env: {
    BASE_URL: dev ? 'localhost:3000/graphql' : 'excelnz.herokuapp.com/graphql'
  }
}
