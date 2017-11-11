var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

const config = {
  entry: './app',
  output: {
    path: __dirname,
    filename: './dist/public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '*'],
    alias: {
      components: path.resolve(__dirname, 'app/components/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      /** load and modularize .scss files, exports to public */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            'css-loader?importLoaders=1&modules&localIdentName=[path][name]-[local]',
            'sass-loader?importLoaders=1&modules&localIdentName=[path][name]-[local]'
          ]
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/public/bundle.css'),
  ]
};

module.exports = config;
