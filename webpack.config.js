var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDORS = [
  'jquery'
];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDORS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		loaders: [
			{
				use: 'vue-loader',
				test: /\.vue$/
			},
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			},
			{
				use : 'file-loader',
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/
			},
			{
				use: "file-loader",
				test: /\.(jpe?g|png|gif|svg)$/
			}
		]
	},
	resolve: {
		// extensions: ['', '.js', '.vue'],
		alias: {
			'vue$': 'vue/dist/vue.js',
			jquery: "jquery/src/jquery"
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new CopyWebpackPlugin([
			{ from: './style', to: './style' },
			{ from: './images', to: './images'}
		])
	]
};
