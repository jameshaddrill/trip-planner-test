const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const pkg = require('./package.json')

module.exports = {
	entry: './src/js/index.js',
  	output: {
		publicPath: '/',
		filename: 'js/main.js'
  	},
  	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: pkg.name,
			template: './src/index.html',
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	devServer: {
		historyApiFallback: true
	},
  	module: {
		rules: [{
			test: /\.vue$/,
			use: 'vue-loader'
		},
		{
            test: /\.scss$/,
            use: [
                "vue-style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
		  		loader: 'babel-loader',
			}
	  	},
		 {
			test: /\.(ico)$/,
			use: {
		  		loader: 'file-loader'
			}
		},
		{
			test: /\.(png|svg|jpe?g|gif)$/,
			loader: 'url-loader',
			options: {
			publicPath: './',
			limit: 10000,
			},
		  },
		]
	}
}
